import React, { FC } from "react";
import { Redirect, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Router as BrowserRouter } from "react-router-dom";
import { Route, PrivateRoute } from "./components";
import { AdminLayout as Admin, DefaultLayout as Default, EmptyLayout as Empty } from "./layout";
import * as p from "./pages";
const browserHistory = createBrowserHistory();

const Router: FC = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" component={p.HomePage} exact layout={Default} />
        <Route path="/login" component={p.LoginPage} exact layout={Empty} />
        <Route path="/signup" component={p.SignupPage} exact layout={Empty} />
        <Route path="/recover-password" component={p.RecoverPassword} exact layout={Empty} />
        <PrivateRoute path="/dashboard" component={p.DashboardPage} exact layout={Admin} />
        <PrivateRoute path="/profile" component={p.ProfilePage} exact layout={Admin} />
        <PrivateRoute path="/users" component={p.UserList} exact layout={Admin} />
        <PrivateRoute path="/product/add" component={p.ProductAddPage} exact layout={Admin} />
        <PrivateRoute path="/product/edit" component={p.ProductEditPage} exact layout={Admin} />
        <PrivateRoute path="/products" component={p.ProductListPage} exact layout={Admin} />
        <Route path="/404" component={p.Error404Page} exact layout={Default} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
