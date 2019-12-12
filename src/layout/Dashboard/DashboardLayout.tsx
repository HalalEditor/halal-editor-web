import React from "react";
import clsx from "clsx";
import { Drawer, LinearProgress, useMediaQuery, Toolbar, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import { AppBar } from "components";
import { Navigator, Profile } from "./components";

import { useReduxContextValue } from "contexts/redux-context";
import { User } from "models/user";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
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
        isDesktop={isDesktop}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={() => toggleDrawer(false)}
        open={shouldOpenSidebar}
        variant={chooseVariant}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        {currentUser && <Profile currentUser={currentUser} />}
        <Navigator onMenuItemClick={() => toggleDrawer(false)} currentUser={currentUser} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <React.Suspense fallback={<LinearProgress />}>{children}</React.Suspense>
      </main>
    </div>
  );
};
export default AdminLayout;
