import React, { FC, useEffect } from "react";
import { Redirect, Route, Switch, RouteProps, RouteComponentProps } from "react-router";
import { BrowserRouter } from "react-router-dom";
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

  const PrivateRoute = ({ component, ...rest }: RouteProps) => {
    if (!component) {
      throw Error("component is undefined");
    }
    const Component = component; // JSX Elements have to be uppercase.
    const render = (props: RouteComponentProps<any>): React.ReactNode => {
      if (isAuth) {
        return <Component {...props} />;
      }
      return <Redirect to={{ pathname: "/login" }} />;
    };
    return <Route {...rest} render={render} />;
  };

  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact component={pages.HomePage} />
          <Route path="/login" exact component={pages.LoginPage} />
          <Route path="/signup" exact component={pages.SignupPage} />
          <PrivateRoute path="/dashboard" exact component={pages.DashboardPage} />
          <PrivateRoute path="/profile" exact component={pages.ProfilePage} />
          <PrivateRoute path="/product" exact component={pages.ProductPage} />
          <PrivateRoute path="/product/add" exact component={pages.ProductAddPage} />
          <PrivateRoute path="/product/edit" exact component={pages.ProductEditPage} />
          <PrivateRoute path="/products" exact component={pages.ProductListPage} />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default Router;
