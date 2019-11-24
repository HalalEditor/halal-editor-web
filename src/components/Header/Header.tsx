import React, { FC } from "react";
import {
  AppBar,
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

const Header: FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const { services, store } = useReduxContextValue();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuLink = (to: string) => {
    history.push(to);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
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
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={isMenuOpen}
              getContentAnchorEl={null}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleProfileMenuLink("/profile")}>Profile</MenuItem>
              <MenuItem onClick={() => handleProfileMenuLink("/dashboard")}>Dashboard</MenuItem>
              <MenuItem onClick={() => services.userService.logout()}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
