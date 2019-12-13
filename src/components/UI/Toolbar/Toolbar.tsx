import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Toolbar = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>{props.children}</Grid>
    </div>
  );
};

export default Toolbar;
