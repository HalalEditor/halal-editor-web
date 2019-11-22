import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Unsubscribe } from "firebase";

const Router: FC = () => {
  const { services, store } = useReduxContextValue();
  const { isAuth } = store.userState;

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    setTimeout(() => {
      unsubscribe = services.userService.subscribeAuth();
    }, 500);
    return () => {
      unsubscribe();
    };
  }, []);

  let pages = null;

  if (isAuth) {
    pages = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    );
  } else {
    pages = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    );
  }
  return <BrowserRouter>{pages}</BrowserRouter>;
};

export default Router;
