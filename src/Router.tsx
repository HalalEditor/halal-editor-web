import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const Router: FC = () => {
  const { isAuth } = useReduxContextValue().store.userState;

  let pages = null;

  if (isAuth) {
    pages = (
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={DashboardPage} />
        </Switch>
      </div>
    );
  } else {
    pages = (
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          {isAuth ? (
            <Redirect to="/" />
          ) : (
            <Route path="/login" exact component={LoginPage} />
          )}
        </Switch>
      </div>
    );
  }
  return <BrowserRouter>{pages}</BrowserRouter>;
};

export default Router;
