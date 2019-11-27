import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import { AccountProfile, AccountDetails } from "./components";

type Props = {
  className: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: 4
  }
}));

const ProfilePage = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <AccountProfile />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <AccountDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
