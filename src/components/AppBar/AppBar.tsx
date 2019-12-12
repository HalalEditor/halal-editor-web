import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { Menu as MenuIcon, Input as InputIcon } from "@material-ui/icons";
import { useReduxContextValue } from "contexts/redux-context";
import { useHistory } from "react-router-dom";
import { Spacer } from "components";
import { useStyles } from "./styles";

interface Props {
  onDrawerOpen?: () => void;
  showMenuIcon?: boolean;
  currentUser?: any;
  isDesktop?: boolean;
}

const AppBar = ({ onDrawerOpen, isDesktop, showMenuIcon, currentUser }: Props) => {
  let history = useHistory();
  const classes = useStyles();
  const { services, store } = useReduxContextValue();

  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        {showMenuIcon && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h3" className={classes.title} onClick={() => history.push("/")}>
          Halal Editor
        </Typography>
        <Spacer />
        {store.userState.isAuth ? (
          isDesktop ? (
            <Button
              className={classes.logoutButton}
              color="inherit"
              onClick={() => services.userService.logout()}
            >
              <InputIcon className={classes.logoutIcon} />
              Sign Out
            </Button>
          ) : (
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => services.userService.logout()}
              color="inherit"
              edge="end"
            >
              <InputIcon />
            </IconButton>
          )
        ) : (
          <div>
            <Button
              className={classes.logoutButton}
              color="inherit"
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </div>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
