import React from "react";
import clsx from "clsx";
import { Drawer } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import { AppBar } from "../../components";
import Navigator from "./components/Sidebar/Navigator/Navigator";
import Profile from "./components/Sidebar/Profile/Profile";

import { useReduxContextValue } from "../../contexts/redux-context";
import { User } from "../../models/user";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { store } = useReduxContextValue();
  const currentUser = store.userState.currentUser as User;

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const [state, setState] = React.useState({
    isMenuOpen: false
  });

  const toggleDrawer = (isMenuOpen: boolean) => {
    setState({ ...state, isMenuOpen });
  };

  const shouldOpenSidebar = isDesktop ? true : state.isMenuOpen;
  const chooseVariant = isDesktop ? "persistent" : "temporary";
  const showMenuIcon = isDesktop ? false : true;
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <AppBar
        currentUser={currentUser}
        onDrawerOpen={() => toggleDrawer(true)}
        showMenuIcon={showMenuIcon}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={() => toggleDrawer(false)}
        open={shouldOpenSidebar}
        variant={chooseVariant}
      >
        <div className={classes.toolbar} />
        <Profile />
        <Navigator onMenuItemClick={() => toggleDrawer(false)} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default AdminLayout;
