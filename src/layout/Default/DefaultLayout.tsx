import React from "react";
import { AppBar } from "../../components";
import { useStyles } from "./styles";
import { LinearProgress } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <React.Suspense fallback={<LinearProgress />}>{children}</React.Suspense>
      </main>
    </div>
  );
};
export default DefaultLayout;
