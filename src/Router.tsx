import React from "react";
import { Redirect, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Router as BrowserRouter } from "react-router-dom";
import { Route, PrivateRoute } from "./components";
import * as l from "./layout";
import * as p from "./pages";
const browserHistory = createBrowserHistory();

const Router = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" component={p.Home} exact layout={l.DefaultLayout} />
        <Route path="/login" component={p.Login} exact layout={l.EmptyLayout} />
        <Route path="/signup" component={p.Signup} exact layout={l.EmptyLayout} />
        <Route
          path="/recover-password"
          component={p.RecoverPassword}
          exact
          layout={l.EmptyLayout}
        />
        <PrivateRoute
          path="/dashboard"
          component={p.Dashboard}
          exact
          layout={l.AdminLayout}
          accessibleUserCategories={["root", "admin", "editor", "normal"]}
        />
        <PrivateRoute
          path="/profile"
          component={p.Profile}
          exact
          layout={l.AdminLayout}
          accessibleUserCategories={["root", "admin", "editor", "normal"]}
        />
        <PrivateRoute
          path="/user/:id"
          component={p.User}
          exact
          layout={l.AdminLayout}
          accessibleUserCategories={["root", "admin"]}
        />
        <PrivateRoute
          path="/users"
          component={p.UserList}
          exact
          layout={l.AdminLayout}
          accessibleUserCategories={["root", "admin"]}
        />
        <PrivateRoute
          path="/products"
          component={p.ProductList}
          exact
          layout={l.AdminLayout}
          accessibleUserCategories={["root", "admin", "editor", "normal"]}
        />
        <Route path="/404" component={p.Error404} exact layout={l.AdminLayout} />
        <PrivateRoute path="/admin404" component={p.Error404} exact layout={l.AdminLayout} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
