import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useReduxContextValue } from "../../../../../contexts/redux-context";

const Profile = () => {
  const classes = useStyles();
  const { store } = useReduxContextValue();

  const currentUser = store.userState.currentUser;
  const user = {
    name: !!currentUser ? currentUser.username : "",
    avatar: !!currentUser ? currentUser.photoURL : "",
    email: !!currentUser ? currentUser.email : ""
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Profile;
