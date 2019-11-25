import React, { FC, useEffect } from "react";
import { Redirect, Route, Switch, RouteProps, RouteComponentProps } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useReduxContextValue } from "./contexts/redux-context";
import { AdminLayout, DefaultLayout, EmptyLayout } from "./layout";
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

  const layoutAdmin: any = (Component: any) => (props: any) => (
    <AdminLayout {...props}>
      <Component {...props} />
    </AdminLayout>
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
          component={isAuth ? layoutAdmin(pages.HomePage) : layoutDefault(pages.HomePage)}
        />
        <Route path="/login" exact component={layoutEmpty(pages.LoginPage)} />
        <Route path="/signup" exact component={layoutEmpty(pages.SignupPage)} />
        <PrivateRoute path="/dashboard" exact component={layoutAdmin(pages.DashboardPage)} />
        <PrivateRoute path="/profile" exact component={layoutAdmin(pages.ProfilePage)} />
        <PrivateRoute path="/product" exact component={layoutAdmin(pages.ProductPage)} />
        <PrivateRoute path="/product/add" exact component={layoutAdmin(pages.ProductAddPage)} />
        <PrivateRoute path="/product/edit" exact component={layoutAdmin(pages.ProductEditPage)} />
        <PrivateRoute path="/products" exact component={layoutAdmin(pages.ProductListPage)} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
