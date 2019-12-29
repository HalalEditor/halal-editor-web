import React, { createContext, useContext, ReactChild, useReducer, useEffect } from "react";
import { ReduxValueType, ReduxStoreValueType } from "./redux-value";
import { UserService } from "services/user-service";
import { UserReducer, initialUserState } from "store/user-store";
import { AppReducer, initialAppState } from "store/app-store";
import { AppService } from "services/app-service";
import { ProductReducer, initialProductState } from "store/product-store";
import { ProductService } from "services/product-service";

export const ReduxContext = createContext<ReduxValueType>({} as ReduxValueType);
export const useReduxContextValue = () => useContext(ReduxContext);

type Props = {
  children: ReactChild;
};

const ReduxContextProvider = (props: Props) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const [appState, appDispatch] = useReducer(AppReducer, initialAppState);
  const [productState, productDispatch] = useReducer(ProductReducer, initialProductState);

  const store: ReduxStoreValueType = { userState, appState, productState };
  const userService = new UserService(userDispatch, store);
  const appService = new AppService(appDispatch, store);
  const productService = new ProductService(productDispatch, store);

  useEffect(
    () => {
      userService.initCurrentUser();
      console.log("ReduxContextProvider useEffect");
      const unsubscribeAuth = userService.subscribeAuth();
      const unsubscribeFCMToken = userService.subscribeFCMToken();
      const unsubscribeMessaging = userService.subscribeCloudMessaging();
      return () => {
        console.log("unsubscribing...");
        if (unsubscribeAuth) unsubscribeAuth();
        if (unsubscribeFCMToken) unsubscribeFCMToken();
        if (unsubscribeMessaging) unsubscribeMessaging();
      };
    },
    /*
     * TODO: Remove following commented line before production
     * https://github.com/facebook/create-react-app/issues/6880
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    productService.loadAllFavoriteProduct();

    if (!userState.currentUser) {
      productService.clearProductList();
    }
  }, [userState.currentUser]);

  const appReduxValue: ReduxValueType = {
    store: store,
    services: { userService, appService, productService }
  };

  return <ReduxContext.Provider value={appReduxValue}>{props.children}</ReduxContext.Provider>;
};

export default ReduxContextProvider;
