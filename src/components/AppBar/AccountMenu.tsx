import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useReduxContextValue } from "../../contexts/redux-context";
import { useHistory } from "react-router";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();
  const isMenuOpen = Boolean(anchorEl);
  const { services } = useReduxContextValue();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
        <MenuItem onClick={() => history.push("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => history.push("/dashboard")}>Dashboard</MenuItem>
        <MenuItem onClick={() => services.userService.logout()}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;
