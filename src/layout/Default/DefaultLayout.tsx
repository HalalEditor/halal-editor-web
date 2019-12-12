import React from "react";
import { AppBar } from "../../components";
import { useStyles } from "./styles";

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
        {children}
      </main>
    </div>
  );
};
export default DefaultLayout;
