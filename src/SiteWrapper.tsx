import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "./assets/logo-text.svg";
import userAvatar from "./assets/user.svg";

import { Site, Nav, Grid, List, Button, RouterContextProvider } from "tabler-react";

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

type accountDropdownProps = {
  avatarURL: string;
  name: string;
  description: string;
  options: {
    icon: string;
    value: string;
    badge?: undefined;
    isDivider?: undefined;
  };
};

const withRouterNavLink = (to: string) =>
  withRouter((props: any) => <NavLink {...props} to={to} />);

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

const accountDropdownProps = {
  avatarURL: userAvatar,
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile", to: "/profile" },
    { icon: "log-out", value: "Sign out", to: "/logout" }
  ]
};

class SiteWrapper extends React.Component<Props, State> {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          alt: "Would You Rather?",
          imageURL: logo,
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://github.com/cangir/udacity-reactnd-would-you-rather"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="dark"
              >
                Source code
              </Button>
              {/* {loginLink} */}
            </Nav.Item>
          ),
          accountDropdown: accountDropdownProps
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          copyright: <React.Fragment>Copyright © 2019. All rights reserved.</React.Fragment>,
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="#">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="#">Issues</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button href="#" size="sm" outline color="primary" RootComponent="a">
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          )
        }}
      >
        <div className="my-3 my-md-5">
          <div className="container">
            <Grid.Row>
              <Grid.Col md={12}>{this.props.children}</Grid.Col>
            </Grid.Row>
          </div>
        </div>
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
