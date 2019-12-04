import React from "react";
import { Redirect, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Router as BrowserRouter } from "react-router-dom";
import { Route, PrivateRoute } from "./components";
import { AdminLayout as Admin, DefaultLayout as Default, EmptyLayout as Empty } from "./layout";
import * as p from "./pages";
const browserHistory = createBrowserHistory();

const Router = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" component={p.Home} exact layout={Default} />
        <Route path="/login" component={p.Login} exact layout={Empty} />
        <Route path="/signup" component={p.Signup} exact layout={Empty} />
        <Route path="/recover-password" component={p.RecoverPassword} exact layout={Empty} />
        <PrivateRoute path="/dashboard" component={p.Dashboard} exact layout={Admin} />
        <PrivateRoute path="/profile" component={p.Profile} exact layout={Admin} />
        <PrivateRoute path="/user/:id" component={p.User} exact layout={Admin} />
        <PrivateRoute
          path="/users"
          component={p.UserList}
          exact
          layout={Admin}
          group={["root", "admin", "editor"]}
        />
        <PrivateRoute path="/products" component={p.ProductList} exact layout={Admin} />
        <Route path="/404" component={p.Error404} exact layout={Default} />
        <PrivateRoute path="/admin404" component={p.Error404} exact layout={Admin} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
