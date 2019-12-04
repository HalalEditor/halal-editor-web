import * as React from "react";
import { Route as ReactRoute, Redirect } from "react-router-dom";
import { useReduxContextValue } from "../../contexts/redux-context";

interface Props {
  component: any;
  layout: any;
  path: string;
  exact?: boolean;
  group?: string[];
}

const PrivateRoute = ({ component, layout, path, exact, group }: Props) => {
  const { store, services } = useReduxContextValue();
  const { currentUser } = store.userState;

  const localUser = services.userService.getLocalUser();
  const isAuth = !!currentUser || !!localUser;
  const hasPower = !!currentUser && !!group && group.indexOf(currentUser.userCategory) > -1;

  const Layout = layout;
  const Component = component;
  return !isAuth ? (
    <Redirect to="/login" />
  ) : !!group && !hasPower ? (
    <Redirect to="/admin404" />
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
