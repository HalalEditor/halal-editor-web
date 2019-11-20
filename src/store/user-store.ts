import { ActionType } from "./action-type";
import { User } from "../models/user";
import { Reducer } from "react";

export type UserStateType = {
  currentUser?: User;
};

export type UserActionType = {
  type: ActionType;
  payload: UserPayloadType;
};

type UserPayloadType = { user?: User };

export const initialUserState: UserStateType = { currentUser: undefined };

export const UserReducer: Reducer<UserStateType, UserActionType> = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case "SetCurrentUser":
      const user = action.payload.user;
      return { ...state, currentUser: user };

    default:
      return { ...state };
  }
};
