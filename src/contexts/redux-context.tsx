import React, { createContext, useContext, ReactChild, useReducer } from "react";
import { ReduxValueType } from "./redux-value";
import { UserService } from "../services/user-service";
import { UserReducer, initialUserState } from "../store/user-store";
import { AppReducer, initialAppState } from "../store/app-store";
import { AppService } from "../services/app-service";

export const ReduxContext = createContext<ReduxValueType>({} as ReduxValueType);
export const useReduxContextValue = () => useContext(ReduxContext);

type Props = {
  children: ReactChild;
};

const ReduxContextProvider = (props: Props) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const [appState, appDispatch] = useReducer(AppReducer, initialAppState);

  const userService = new UserService(userDispatch);
  const appService = new AppService(appDispatch);

  const appReduxValue: ReduxValueType = {
    store: { userState, appState },
    services: { userService, appService }
  };

  return <ReduxContext.Provider value={appReduxValue}>{props.children}</ReduxContext.Provider>;
};

export default ReduxContextProvider;
