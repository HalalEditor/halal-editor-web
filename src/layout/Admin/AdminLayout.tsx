import React from "react";
import clsx from "clsx";
import { AppBar } from "../../components";
import Navigator from "./components/Navigator";
import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  const [state, setState] = React.useState({
    isMenuOpen: false
  });

  const toggleDrawer = (isMenuOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
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
      <AppBar onDrawerOpen={toggleDrawer(true)} showMenuIcon={showMenuIcon} />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={toggleDrawer(false)}
        open={shouldOpenSidebar}
        variant={chooseVariant}
      >
        <Navigator />
        {/* <div {...rest} className={clsx(classes.root, className)}>
          {/* <Profile />
          <Divider className={classes.divider} />
          <SidebarNav className={classes.nav} pages={pages} />
        </div> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default AdminLayout;
