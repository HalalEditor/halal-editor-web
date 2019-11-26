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
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      return null;
    } catch (error) {
      return error;
    }
  }

  subscribeAuth = () => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async res => {
      const currentUser = !res
        ? undefined
        : await this.getUser(res.uid, !!res.email ? res.email : "");

      this.dispatch({
        type: "SetCurrentUser",
        payload: { user: currentUser }
      });
    });
    return unSubscribe;
  };

  logout = () => {
    firebase.auth().signOut();
  };

  private async getUser(uid: string, email: string): Promise<User> {
    let defaultUser = <User>{
      _id: uid,
      email: email,
      emailVerified: false,
      userCategory: "normal"
    };
    try {
      let result = await firebase
        .firestore()
        .doc(`/users/${uid}`)
        .get();

      if (result.exists) {
        const data = result.data() as User;
        return data;
      } else {
        await firebase
          .firestore()
          .doc(`/users/${uid}`)
          .set(defaultUser);
        return defaultUser;
      }
    } catch (error) {
      console.error(error);
      return defaultUser;
    }
  }
}
