import React from "react";
import { Container, Box, LinearProgress } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

const EmptyLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Container>
        <Box my={4}>{children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default EmptyLayout;
