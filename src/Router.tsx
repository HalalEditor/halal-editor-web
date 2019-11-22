import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";

const Router: FC = () => {
  const { isAuth } = useReduxContextValue().store.userState;

  let pages = null;

  if (isAuth) {
    pages = (
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  } else {
    pages = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/profile" exact component={ProfilePage} />
        {isAuth ? <Redirect to="/" /> : <Route path="/login" exact component={LoginPage} />}
      </Switch>
    );
  }
  return <BrowserRouter>{pages}</BrowserRouter>;
};

export default Router;
