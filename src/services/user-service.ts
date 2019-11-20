import { UserActionType } from "./../store/user-store";
import { Dispatch } from "react";

import app from "firebase";

export class UserService {
  constructor(private dispatch: Dispatch<UserActionType>) {}

  signInWithEmailAndPassword(email: string, password: string) {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(`signInWithEmailAndPassword result ${res}`);
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
}
