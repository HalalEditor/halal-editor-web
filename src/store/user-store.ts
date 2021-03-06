import { ActionType } from "./action-type";
import { User } from "../models/user";
import { Reducer } from "react";

export type UserStateType = {
  currentUser?: User;
  editUser?: User;
  isCurrentUserFromFirebase: boolean;
  isAuth: boolean;
  userList: User[];
};

export type UserActionType = {
  type: ActionType;
  payload: UserPayloadType;
};

type UserPayloadType = {
  user?: User;
  userList?: User[];
  editUser?: User;
  isCurrentUserFromFirebase?: boolean;
};

export const initialUserState: UserStateType = {
  currentUser: undefined,
  isAuth: false,
  isCurrentUserFromFirebase: false,
  userList: []
};

export const UserReducer: Reducer<UserStateType, UserActionType> = (
  state = initialUserState,
  action
) => {
  console.log("[UserReducer]:", action);

  switch (action.type) {
    case "SetCurrentUser":
      const user = action.payload.user;
      const isCurrentUserFromFirebase = action.payload.isCurrentUserFromFirebase;
      return {
        ...state,
        currentUser: user,
        isAuth: !!user,
        isCurrentUserFromFirebase: !!isCurrentUserFromFirebase
      };
    case "AddUserList":
      return action.payload.userList
        ? { ...state, userList: [...state.userList, ...action.payload.userList] }
        : { ...state };
    case "ClearUserList":
      return { ...state, userList: [] };
    case "EditUser":
      let userList = state.userList;
      const editUser = action.payload.editUser;
      if (!!editUser) {
        const index = userList.findIndex(u => u._id === editUser._id);
        if (index !== -1) {
          userList[index] = { ...editUser };
        }
      }

      return { ...state, userList: userList };

    default:
      return { ...state };
  }
};
