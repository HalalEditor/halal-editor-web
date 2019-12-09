import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

exports.updateProductLikes = functions.firestore
  .document("/users/{userId}/fav-products/{productId}")
  .onWrite(async (change, context) => {
    const { productId, userId } = context.params;
    const productRef = db.collection("products").doc(productId);
    const likesRef = productRef.collection("likes");
    const user = await db.doc(`/users/${userId}`).get();

    if (user.exists) {
      if (!change.before.exists && change.after.exists) {
        await likesRef.doc(userId).set({ email: (user.data() as any).email });
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
