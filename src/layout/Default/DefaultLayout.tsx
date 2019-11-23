import React from "react";
import { Container, Box } from "@material-ui/core";
import { Header } from "../../components";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Box my={4}>{props.children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default DefaultLayout;
