import * as React from "react";
import { Route as ReactRoute, Redirect } from "react-router-dom";
import { useReduxContextValue } from "contexts/redux-context";
import { UserCategory } from "models/user";
import { LinearProgress } from "@material-ui/core";

interface Props {
  component: any;
  layout: any;
  path: string;
  exact?: boolean;
  accessibleUserCategories?: UserCategory[];
}

const PrivateRoute = ({ component, layout, path, exact, accessibleUserCategories: auc }: Props) => {
  const { store, services } = useReduxContextValue();
  const localUser = services.userService.getLocalUser();
  const currentUser = store.userState.currentUser || localUser;

  const isAuth = !!currentUser;
  const canAccess = !!currentUser && !!auc && auc.indexOf(currentUser.userCategory) !== -1;

  const Layout = layout;
  const Component = component;
  return !isAuth ? (
    <Redirect to="/login" />
  ) : !canAccess ? (
    <Redirect to="/admin404" />
  ) : (
    <ReactRoute
      path={path}
      exact={exact}
      render={matchProps => (
        <React.Suspense fallback={<LinearProgress />}>
          <Layout>
            <Component {...matchProps} />
          </Layout>
        </React.Suspense>
      )}
    />
  );
};

export default PrivateRoute;
