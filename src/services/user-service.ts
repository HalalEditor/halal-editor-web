import { UserActionType } from "./../store/user-store";
import { Dispatch } from "react";

export class UserService {
  constructor(private dispatch: Dispatch<UserActionType>) {}
}
