import React from "react";
import { Container, Box } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

const EmptyLayout = (props: Props) => {
  return (
    <React.Fragment>
      <Container>
        <Box my={4}>{props.children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default EmptyLayout;
