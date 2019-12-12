import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { User } from "models/user";

interface Props {
  currentUser: User;
}

const Profile = ({ currentUser }: Props) => {
  const classes = useStyles();

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
        <Typography variant="body2">{currentUser.userCategory}</Typography>
        <Typography className={classes.name} variant="h4">
          {currentUser.username}
        </Typography>
        <Typography variant="body2">{currentUser.email}</Typography>
      </div>
    </React.Fragment>
  );
};

export default Profile;
