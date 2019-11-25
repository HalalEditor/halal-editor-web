import React, { FC, useEffect } from "react";
import { Redirect, Route, Switch, RouteProps, RouteComponentProps } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import { DefaultLayout, EmptyLayout } from "./layout";
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

  /**
   * Renders the Layout and component, passing props as new object.
   * @param Component A React Component
   */
  const layoutDefault: any = (Component: any) => (props: any) => (
    <DefaultLayout {...props}>
      <Component {...props} />
    </DefaultLayout>
  );

  const layoutEmpty: any = (Component: any) => (props: any) => (
    <EmptyLayout {...props}>
      <Component {...props} />
    </EmptyLayout>
  );

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
      <Switch>
        <Route
          path="/"
          exact
          component={isAuth ? layoutDefault(pages.HomePage) : layoutEmpty(pages.HomePage)}
        />
        <Route path="/login" exact component={layoutEmpty(pages.LoginPage)} />
        <Route path="/signup" exact component={layoutEmpty(pages.SignupPage)} />
        <PrivateRoute path="/dashboard" exact component={layoutDefault(pages.DashboardPage)} />
        <PrivateRoute path="/profile" exact component={layoutDefault(pages.ProfilePage)} />
        <PrivateRoute path="/product" exact component={layoutDefault(pages.ProductPage)} />
        <PrivateRoute path="/product/add" exact component={layoutDefault(pages.ProductAddPage)} />
        <PrivateRoute path="/product/edit" exact component={layoutDefault(pages.ProductEditPage)} />
        <PrivateRoute path="/products" exact component={layoutDefault(pages.ProductListPage)} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
