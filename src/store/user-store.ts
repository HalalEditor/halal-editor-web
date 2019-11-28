import { ActionType } from "./action-type";
import { User } from "../models/user";
import { Reducer } from "react";

export type UserStateType = {
  currentUser?: User;
  isAuth: boolean;
};

export type UserActionType = {
  type: ActionType;
  payload: UserPayloadType;
};

type UserPayloadType = { user?: User };

export const initialUserState: UserStateType = {
  currentUser: undefined,
  isAuth: false
};

export const UserReducer: Reducer<UserStateType, UserActionType> = (
  state = initialUserState,
  action
) => {
  console.log("[UserReducer]:", action);

  switch (action.type) {
    case "SetCurrentUser":
      const user = action.payload.user;
      return { ...state, currentUser: user, isAuth: !!user };

    default:
      return { ...state };
  }
};
