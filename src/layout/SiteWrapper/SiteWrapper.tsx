import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../assets/logo-text.svg";

import { Site, Nav, Grid } from "tabler-react";
import { getAccountDropDownMenu } from "./AccountMenu";
import { useReduxContextValue } from "../../contexts/redux-context";

type Props = {
  children: React.ReactNode;
};

type State = {
  notificationsObjects: any[];
};

type subNavItem = {
  value: string;
  to?: string;
  icon?: string;
  LinkComponent?: React.ElementType;
  useExact?: boolean;
};

type navItem = {
  value: string;
  to?: string;
  icon?: string;
  active?: boolean;
  LinkComponent?: React.ElementType;
  subItems?: Array<subNavItem>;
  useExact?: boolean;
};

const withRouterNavLink = (to: string) =>
  withRouter((props: any) => <Nav.Link {...props} to={to} />);

const navBarItems: Array<navItem> = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouterNavLink("/"),
    useExact: true
  },
  {
    value: "Dashboard",
    to: "/dashboard",
    icon: "settings",
    LinkComponent: withRouterNavLink("/dashboard"),
    useExact: true
  },
  {
    value: "Login",
    to: "/login",
    icon: "lock",
    LinkComponent: withRouterNavLink("/login"),
    useExact: true
  }
];

const SiteWrapper = (props: Props) => {
  const { services, store } = useReduxContextValue();
  return (
    <Site.Wrapper
      headerProps={{
        alt: "Would You Rather?",
        imageURL: logo,
        navItems: (
          <Nav.Item type="div" className="d-none d-md-flex">
            {/* {loginLink} */}
          </Nav.Item>
        ),
        accountDropdown: getAccountDropDownMenu(services.userService, store.userState.currentUser)
      }}
      navProps={{ itemsObjects: navBarItems }}
      footerProps={{
        copyright: <React.Fragment>Copyright © 2019. All rights reserved.</React.Fragment>
      }}
    >
      <div className="my-3 my-md-5">
        <div className="container">
          <Grid.Row>
            <Grid.Col md={12}>{props.children}</Grid.Col>
          </Grid.Row>
        </div>
      </div>
    </Site.Wrapper>
  );
};

export default SiteWrapper;
