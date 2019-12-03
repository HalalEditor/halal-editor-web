import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useReduxContextValue } from "../../../contexts/redux-context";
import { useHistory } from "react-router";
import { useStyles } from "./styles";

interface Props {
  currentUser?: any;
}

const AccountMenu = ({ currentUser }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const { services } = useReduxContextValue();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    handleClose();
    history.push(path);
  };

  return !currentUser ? null : (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {currentUser.photoURL ? (
          <Avatar
            className={classes.avatar}
            alt={currentUser.username}
            src={currentUser.photoURL}
          />
        ) : (
          <AccountCircle />
        )}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={isMenuOpen}
        getContentAnchorEl={null}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("/dashboard")}>Dashboard</MenuItem>
        <MenuItem onClick={() => services.userService.logout()}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;
