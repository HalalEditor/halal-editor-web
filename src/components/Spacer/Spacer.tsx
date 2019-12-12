import React from "react";
import { useStyles } from "./styles";

const Spacer = () => {
  const classes = useStyles();
  return <span className={classes.root} />;
};

export default Spacer;
