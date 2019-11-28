import * as React from "react";
import { Route as ReactRoute } from "react-router-dom";

interface Props {
  component: any;
  layout: any;
  path: string;
  exact?: boolean;
}

const Route = ({ component, layout, path, exact }: Props) => {
  const Layout = layout;
  const Component = component;
  return (
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

export default Route;
