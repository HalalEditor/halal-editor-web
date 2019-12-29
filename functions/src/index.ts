/*eslint no-param-reassign: "error"*/
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();
const messaging = admin.messaging();

exports.updateProductLikes = functions.firestore
  .document("/users/{userId}/fav-products/{productId}")
  .onWrite(async (change, context) => {
    const { productId, userId } = context.params;
    const productRef = db.collection("products").doc(productId);
    const likesRef = productRef.collection("likes");
    const user = await db.doc(`/users/${userId}`).get();

    if (user.exists) {
      if (!change.before.exists && change.after.exists) {
        await likesRef.doc(userId).set({ _id: user.id, email: (user.data() as any).email });
      } else {
        await likesRef.doc(userId).delete();
      }

      return db.runTransaction(transaction => {
        return transaction.get(likesRef).then(likesQuery => {
          const likesCount = likesQuery.size;

          return transaction.update(productRef, {
            likesCount: likesCount
          });
        });
      });
    } else return;
  });

exports.sendReviewNotification = functions.firestore
  .document("/products/{productId}/reviews/{reviewId}")
  .onWrite(async (change, context) => {
    const { productId } = context.params;
    const stepCount = 100;

    const userRef = db.collection("users");
    const productRef = db.collection("products").doc(productId);
    const likesRef = productRef.collection("likes");

    const likesQuery = await likesRef.get();

    const likeCount = likesQuery.size;
    const numberOfCycles = Math.ceil(likeCount / stepCount);

    const product = await (await productRef.get()).data();
    if (!!product) {
      const body = `new review received for ${
        !!product.mainInfo.name ? product.mainInfo.name : product.mainInfo.barcode
      }`;

      let lastLikedUserId = "";
      for (let i = 0; i < numberOfCycles; i++) {
        let tokens: string[] = [];

        const likedUserQuery = await likesQuery.query
          .orderBy("_id")
          .startAfter(lastLikedUserId)
          .limit(stepCount)
          .get();
        const likedUserIds = likedUserQuery.docs.map(u => u.id);

        for (const likedUserId of likedUserIds) {
          const userDoc = await userRef.doc(likedUserId).get();

          const data = userDoc.data();

          if (userDoc.exists && data) {
            const tokensObj = data.tokens;

            for (const deviceId in tokensObj) {
              if (tokensObj.hasOwnProperty(deviceId)) {
                const tokenObj = tokensObj[deviceId];
                const lastValidDate = !!tokenObj.lastValidDate
                  ? tokenObj.lastValidDate.toDate().getTime()
                  : null;

                if (!!lastValidDate && lastValidDate > Date.now()) {
                  tokens.push(tokenObj.token);
                }
              }
            }
          }
        }

        sendMulticastMessage(
          [...tokens],
          "New Review",
          body,
          undefined,
          product.mainInfo.imagePath
        );
        lastLikedUserId = likedUserIds[likedUserIds.length - 1];
        tokens = [];
      }
    }
  });

const sendMulticastMessage = (
  tokens: string[],
  title: string,
  body: string,
  data?: { [key: string]: string },
  imageUrl?: string
) => {
  console.log("tokens:", tokens);
  let notificationData: any = {};

  // tokens = tokens.filter(x => !!x);
  if (tokens.length === 0) {
    return;
  }
  const options = {
    body: body,
    icon: "/assets/images/icons/app-icon-96x96.png",
    image: "https://png.pngtree.com/svg/20170227/info_960653.png",
    vibrate: [100, 50, 200],
    badge: "/assets/images/icons/app-icon-96x96.png",
    tag: "review-notification",
    renotify: true,
    actions: [
      { action: "confirm", title: "Okay", icon: "/assets/images/icons/app-icon-96x96.png" },
      { action: "cancel", title: "Cancel", icon: "/assets/images/icons/app-icon-96x96.png" }
    ]
  };

  if (!data) {
    // eslint-disable-next-line no-param-reassign
    notificationData["options"] = JSON.stringify(options);
  } else {
    notificationData = { ...data, options: JSON.stringify(options) };
  }

  const message: admin.messaging.MulticastMessage = {
    tokens,
    data: notificationData,
    notification: { title, body, imageUrl }
  };
  messaging
    .sendMulticast(message)
    .then(res => console.log("sendMulticast:", JSON.stringify(res)))
    .catch(err => console.error(err));
};
