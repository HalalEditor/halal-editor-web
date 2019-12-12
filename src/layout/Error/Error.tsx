import React from "react";
import { LinearProgress } from "@material-ui/core";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

const Error = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <React.Suspense fallback={<LinearProgress />}>{children}</React.Suspense>
    </main>
  );
};

export default Error;
