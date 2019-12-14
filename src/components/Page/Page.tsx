import React from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

type Props = {
  children?: React.ReactNode;
  className?: any;
  title?: string;
};

const Page = ({ children, className, ...rest }: Props) => {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <div className={classes.toolbar} />
      <Grid>{children}</Grid>
    </div>
  );
};

export default Page;
