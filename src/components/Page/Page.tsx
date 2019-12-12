import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: any;
  title?: string;
};

const Page = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};

export default Page;
