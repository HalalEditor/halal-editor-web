import { User } from "./../models/user";
import { UserActionType } from "./../store/user-store";
import { Dispatch } from "react";

import * as firebase from "firebase/app";
import "firebase/auth";

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
      const currentUser: User | undefined = !res
        ? undefined
        : {
            _id: res.uid,
            email: !!res.email ? res.email : "",
            emailVerified: res.emailVerified,
            userCategory: "normal"
          };
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
}
