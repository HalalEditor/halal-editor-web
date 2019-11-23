import { User } from "./../models/user";
import { UserActionType } from "./../store/user-store";
import { Dispatch } from "react";

import app from "firebase";

export class UserService {
  constructor(private dispatch: Dispatch<UserActionType>) {}

  signInWithEmailAndPassword(email: string, password: string) {
    console.log("signInWithEmailAndPassword", app);

    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        const fireUser = res.user;
        let currentUser;

        if (!!fireUser) {
          currentUser = {
            _id: fireUser.uid,
            email: !!fireUser.email ? fireUser.email : "",
            emailVerified: fireUser.emailVerified,
            userCategory: "normal"
          } as User;
        }
        this.dispatch({
          type: "SetCurrentUser",
          payload: { user: currentUser }
        });
      })
      .catch(err => {
        return err.message;
      });
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(`createUserWithEmailAndPassword result ${res}`);
      });
  }

  subscribeAuth = () => {
    const unSubscribe = app.auth().onAuthStateChanged(async res => {
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
    app.auth().signOut();
  };
}
