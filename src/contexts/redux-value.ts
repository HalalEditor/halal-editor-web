import { initialUserState, UserReducer } from "./../store/user-store";
import { UserService } from "./../services/user-service";
import { UserStateType } from "../store/user-store";
import { useReducer } from "react";

export type ReduxValueType = {
  store: {
    userState: UserStateType;
  };
  services: {
    userService: UserService;
  };
};

export const getReduxContextValue = (): ReduxValueType => {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const userService = new UserService(userDispatch);

  const value: ReduxValueType = {
    store: { userState },
    services: { userService }
  };

  return value;
};
