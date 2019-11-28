import React, { FC, useEffect } from "react";
import { Redirect, Switch } from "react-router";
import { Route, PrivateRoute } from "./components";
import { useReduxContextValue } from "./contexts/redux-context";
import { AdminLayout, DefaultLayout, EmptyLayout } from "./layout";
import * as pages from "./pages";
import * as firebase from "firebase/app";
// import CustomSnackbar from "./components/CustomSnackbar/CustomSnackbar";

const Router: FC = () => {
  const { services } = useReduxContextValue();

  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe;
    setTimeout(() => {
      unsubscribe = services.userService.subscribeAuth();
    }, 300);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Switch>
      <Route path="/" component={pages.HomePage} exact layout={DefaultLayout} />
      <Route path="/login" component={pages.LoginPage} exact layout={EmptyLayout} />
      <Route path="/signup" component={pages.SignupPage} exact layout={EmptyLayout} />
      <PrivateRoute path="/dashboard" component={pages.DashboardPage} exact layout={AdminLayout} />
      <PrivateRoute path="/profile" component={pages.ProfilePage} exact layout={AdminLayout} />
      <PrivateRoute path="/product" component={pages.ProductPage} exact layout={AdminLayout} />
      <PrivateRoute
        path="/product/add"
        component={pages.ProductAddPage}
        exact
        layout={AdminLayout}
      />
      <PrivateRoute
        path="/product/edit"
        component={pages.ProductEditPage}
        exact
        layout={AdminLayout}
      />
      <PrivateRoute path="/products" component={pages.ProductListPage} exact layout={AdminLayout} />
      <Route path="/404" component={pages.Error404Page} exact layout={DefaultLayout} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Router;
