import React, { FC } from "react";
import {
  AppBar as MaterialAppBar,
  Hidden,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  InputBase
} from "@material-ui/core";
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";
import { useReduxContextValue } from "../../contexts/redux-context";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import AccountMenu from "./AccountMenu";

interface Props {
  onDrawerOpen?: (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void;
  showMenuIcon?: boolean;
}

const AppBar = ({ onDrawerOpen, showMenuIcon }: Props) => {
  let history = useHistory();
  const classes = useStyles();

  const { store } = useReduxContextValue();

  console.log(onDrawerOpen);

  return (
    <MaterialAppBar position="fixed">
      <Toolbar>
        <Hidden smUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h3" className={classes.title} onClick={() => history.push("/")}>
          Halal Editor
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        {showMenuIcon ? (
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        ) : store.userState.isAuth ? (
          <AccountMenu />
        ) : (
          <div>
            <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>
          </div>
        )}
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
