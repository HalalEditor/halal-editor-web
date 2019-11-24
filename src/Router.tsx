import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import { DefaultLayout } from "./layout";
import * as pages from "./pages";
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

  let routes = null;

  if (!isAuth) {
    routes = (
      <Switch>
        <Route path="/" exact component={pages.HomePage} />
        <Route path="/login" exact component={pages.LoginPage} />
        <Route path="/signup" exact component={pages.SignupPage} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={pages.HomePage} />
        <Route path="/dashboard" exact component={pages.DashboardPage} />
        <Route path="/profile" exact component={pages.ProfilePage} />
        <Route path="/product" exact component={pages.ProductPage} />
        <Route path="/product/add" exact component={pages.ProductAddPage} />
        <Route path="/product/edit" exact component={pages.ProductEditPage} />
        <Route path="/products" exact component={pages.ProductListPage} />
        <Route path="/login" exact component={pages.LoginPage} />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <DefaultLayout>{routes}</DefaultLayout>
    </BrowserRouter>
  );
};

export default Router;
