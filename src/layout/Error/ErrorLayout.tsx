import React from "react";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Error = ({ children }: Props) => {
  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
};

export default Error;
