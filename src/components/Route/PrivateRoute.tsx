import * as React from "react";
import { Route as ReactRoute, Redirect } from "react-router-dom";
import { useReduxContextValue } from "../../contexts/redux-context";

interface Props {
  component: any;
  layout: any;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ component, layout, path, exact }: Props) => {
  const { store, services } = useReduxContextValue();
  const { currentUser } = store.userState;

  const localUser = services.userService.getLocalUser();
  const isAuth = !!currentUser || !!localUser;

  const Layout = layout;
  const Component = component;
  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <ReactRoute
      path={path}
      exact={exact}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default PrivateRoute;
