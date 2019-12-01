import { User } from "./../models/user";
import { UserActionType } from "./../store/user-store";
import { Dispatch } from "react";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

export class UserService {
  constructor(private dispatch: Dispatch<UserActionType>) {}

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return null;
    } catch (error) {
      return error;
    }
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    try {
      const result: firebase.auth.UserCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (!!result.user) {
        await result.user.sendEmailVerification();
      }
      return null;
    } catch (error) {
      return error;
    }
  }

  async signInWithGoogle() {
    try {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");

      const result = await firebase.auth().signInWithPopup(provider);
      console.log("signInWithGoogle:", result);
    } catch (error) {
      return error.message;
    }
  }

  subscribeAuth = () => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async res => {
      console.log("subscribeAuth:", res);
      if (!!res) {
        const currentUser = await this.getUser(res);
        this.setLocalUser(currentUser);
        this.dispatch({
          type: "SetCurrentUser",
          payload: { user: currentUser }
        });
      } else {
        this.setLocalUser(undefined);
        this.dispatch({
          type: "SetCurrentUser",
          payload: { user: undefined }
        });
      }
    });
    return unSubscribe;
  };

  logout = () => {
    firebase.auth().signOut();
  };

  initCurrentUser = () => {
    this.dispatch({
      type: "SetCurrentUser",
      payload: { user: this.getLocalUser() }
    });
  };

  loadUserList = (limit: number, lastUserId?: string, searchingMail?: string) => {
    if (!lastUserId || !!searchingMail) {
      this.dispatch({ type: "ClearUserList", payload: {} });
    }

    return new Promise(async (resolve, reject) => {
      try {
        const query = !!searchingMail
          ? await firebase
              .firestore()
              .collection("users")
              .where("email", "==", searchingMail)
              .get()
          : await firebase
              .firestore()
              .collection("users")
              .orderBy("_id")
              .startAfter(!lastUserId ? 0 : lastUserId)
              .limit(limit)
              .get();

        const loadUser = query.docs.map(async user => {
          const data = await user.data();
          if (!!data) {
            return { ...data } as User;
          }
        });
        Promise.all(loadUser)
          .then(userList => {
            const undefinedValuesClear = userList.filter(user => !!user) as User[];
            this.dispatch({ type: "AddUserList", payload: { userList: undefinedValuesClear } });
          })
          .then(_ => resolve());
      } catch (error) {
        reject(error);
      }
    });
  };

  getUserCount = async (): Promise<number> => {
    const query = await firebase
      .firestore()
      .collection("users")
      .get();
    const userCount = query.size;
    console.log(userCount);

    return userCount;
  };
  async sendPasswordResetEmail(email: string) {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      return error.message;
    }
  }

  private async getUser(firebaseUser: firebase.User): Promise<User> {
    let defaultUser = this.getDefaultUser(firebaseUser);
    try {
      let result = await firebase
        .firestore()
        .doc(`/users/${firebaseUser.uid}`)
        .get();

      if (result.exists) {
        const data = result.data() as User;
        const resultChecking = this.checkUserMissingInfo(data, firebaseUser);
        if (resultChecking.isUserUpdate) {
          firebase
            .firestore()
            .doc(`/users/${firebaseUser.uid}`)
            .update(resultChecking.updatedUser);
        }
        return resultChecking.updatedUser;
      } else {
        await firebase
          .firestore()
          .doc(`/users/${firebaseUser.uid}`)
          .set(defaultUser);
        return defaultUser;
      }
    } catch (error) {
      console.error(error);
      return defaultUser;
    }
  }

  private getDefaultUser = (firebaseUser: firebase.User) => {
    return {
      _id: firebaseUser.uid,
      username: !!firebaseUser.displayName
        ? firebaseUser.displayName
        : (firebaseUser.email as string).split("@")[0],
      email: firebaseUser.email,
      emailVerified: firebaseUser.emailVerified,
      photoURL: firebaseUser.photoURL,
      userCategory: "normal"
    } as User;
  };

  private setLocalUser = (user?: User) => {
    const lastUser = !!user
      ? JSON.stringify({
          _id: user._id,
          email: user.email,
          username: user.username,
          photoURL: user.photoURL
        })
      : "";
    localStorage.setItem("lastUser", lastUser);
  };

  getLocalUser = (): User | undefined => {
    const lastUser = localStorage.getItem("lastUser");
    return !!lastUser ? (JSON.parse(lastUser) as User) : undefined;
  };

  private checkUserMissingInfo(
    dbUser: User,
    firebaseUser: firebase.User
  ): { isUserUpdate: boolean; updatedUser: User } {
    let isUserUpdate = false;

    if (dbUser.emailVerified !== firebaseUser.emailVerified) {
      dbUser.emailVerified = firebaseUser.emailVerified;
      isUserUpdate = true;
    }

    if (!dbUser.photoURL && !!firebaseUser.photoURL) {
      dbUser.photoURL = firebaseUser.photoURL;
      isUserUpdate = true;
    }

    if (!dbUser.username && !!firebaseUser.displayName) {
      dbUser.username = firebaseUser.displayName;
      isUserUpdate = true;
    }

    return {
      isUserUpdate: isUserUpdate,
      updatedUser: dbUser
    };
  }

  createTestUsers = () => {
    for (let index = 0; index < 50; index++) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(`test${index + 1}@test.com`, "123456")
        .then(res => {
          if (!!res.user) {
            this.getUser(res.user);
          }
        });
    }
  };
}
