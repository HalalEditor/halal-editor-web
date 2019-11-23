import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import { DashboardPage, HomePage, LoginPage, ProfilePage, SignupPage } from "./pages";
import { DefaultLayout } from "./layout";
import * as firebase from "firebase/app";

const Router: FC = () => {
  const { services, store } = useReduxContextValue();
  const { isAuth } = store.userState;

  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe;
    setTimeout(() => {
      unsubscribe = services.userService.subscribeAuth();
    }, 300);
    return () => {
      unsubscribe();
    };
  }, []);

  let pages = null;

  if (!isAuth) {
    pages = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
      </Switch>
    );
  } else {
    pages = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <DefaultLayout>{pages}</DefaultLayout>
    </BrowserRouter>
  );
};

export default Router;
