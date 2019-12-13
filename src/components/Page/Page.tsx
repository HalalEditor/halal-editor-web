import React from "react";
import clsx from "clsx";
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
        [classes.root]: true,
        [className]: className
      })}
    >
      <div className={classes.toolbar} />
      {children}
    </div>
  );
};

export default Page;
