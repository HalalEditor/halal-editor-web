import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const OrDivider = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider className={classes.divider} variant="middle" />
      <Typography className={classes.text}>or</Typography>
    </div>
  );
};

export default OrDivider;
