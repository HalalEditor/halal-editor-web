import React, { FC } from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  InputBase
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle, Search as SearchIcon } from "@material-ui/icons";
import { useReduxContextValue } from "../../contexts/redux-context";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import AccountMenu from "./AccountMenu";

const AppBar: FC = () => {
  let history = useHistory();
  const classes = useStyles();

  const { store } = useReduxContextValue();

  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
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
        {store.userState.isAuth ? (
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
