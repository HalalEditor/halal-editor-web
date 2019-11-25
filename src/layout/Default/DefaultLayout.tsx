import React from "react";
import { AppBar } from "../../components";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default DefaultLayout;
