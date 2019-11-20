import React, {
  createContext,
  useContext,
  ReactChild,
  useReducer
} from "react";
import { ReduxValueType } from "./redux-value";
import { UserService } from "../services/user-service";
import { UserReducer, initialUserState } from "../store/user-store";

export const ReduxContext = createContext<ReduxValueType>({} as ReduxValueType);
export const useReduxContextValue = () => useContext(ReduxContext);

type Props = {
  children: ReactChild;
};

const ReduxContextProvider = (props: Props) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const userService = new UserService(userDispatch);

  console.log("[redux-context.ts]: userService", userService);

  const appReduxValue: ReduxValueType = {
    store: { userState },
    services: { userService }
  };

  return (
    <ReduxContext.Provider value={appReduxValue}>
      {props.children}
    </ReduxContext.Provider>
  );
};

export default ReduxContextProvider;
