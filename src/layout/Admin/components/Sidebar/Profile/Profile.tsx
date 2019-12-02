import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useReduxContextValue } from "../../../../../contexts/redux-context";

const Profile = () => {
  const classes = useStyles();
  const { store } = useReduxContextValue();

  const user = {
    name: "Ahmet Cangir",
    avatar: "http://localhost:3000/assets/user.svg",
    email: "ahmetcangir07@gmail.com"
  };

  return (
    <div className={classes.root}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/profile"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.email}</Typography>
    </div>
  );
};

export default Profile;
