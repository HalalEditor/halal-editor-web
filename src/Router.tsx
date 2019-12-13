import React from "react";
import { Redirect, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Router as BrowserRouter } from "react-router-dom";
import { Route, PrivateRoute } from "./components";
import * as layout from "./layout";
import * as page from "./pages";
const browserHistory = createBrowserHistory();

const Router = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" component={page.Home} exact layout={layout.Default} />
        <Route path="/login" component={page.Login} exact layout={layout.Empty} />
        <Route path="/signup" component={page.Signup} exact layout={layout.Empty} />
        <Route
          path="/recover-password"
          component={page.RecoverPassword}
          exact
          layout={layout.Empty}
        />
        <PrivateRoute
          path="/dashboard"
          component={page.Dashboard}
          exact
          layout={layout.Dashboard}
          accessibleUserCategories={["root", "admin", "editor", "normal"]}
        />
        <PrivateRoute
          path="/profile"
          component={page.Profile}
          exact
          layout={layout.Dashboard}
          accessibleUserCategories={["root", "admin", "editor", "normal"]}
        />
        <PrivateRoute
          path="/users"
          component={page.UserList}
          exact
          layout={layout.Dashboard}
          accessibleUserCategories={["root", "admin"]}
        />
        <PrivateRoute
          path="/products"
          component={page.ProductList}
          exact
          layout={layout.Dashboard}
          accessibleUserCategories={["root", "admin", "editor", "normal"]}
        />
        <Route path="/404" component={page.Error404} exact layout={layout.Error} />
        <PrivateRoute path="/admin404" component={page.Error404} exact layout={layout.Dashboard} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
