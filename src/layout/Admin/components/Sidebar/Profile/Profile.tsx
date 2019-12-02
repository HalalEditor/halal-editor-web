import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useReduxContextValue } from "../../../../../contexts/redux-context";
import { User } from "../../../../../models/user";

const Profile = () => {
  const classes = useStyles();
  const { store } = useReduxContextValue();
  const currentUser = store.userState.currentUser as User;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={currentUser.photoURL}
          to="/profile"
        />
        <Typography className={classes.name} variant="h4">
          {currentUser.username}
        </Typography>
        <Typography variant="body2">{currentUser.email}</Typography>
      </div>
    </React.Fragment>
  );
};

export default Profile;
