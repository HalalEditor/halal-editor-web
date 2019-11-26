import React from "react";
import { AppBar } from "../../components";
import { useStyles } from "./styles";
import Navigator from "./components/Navigator";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <Navigator />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default AdminLayout;
