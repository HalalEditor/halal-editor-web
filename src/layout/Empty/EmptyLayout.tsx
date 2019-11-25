import React from "react";
import { Container, Box } from "@material-ui/core";
import { AppBar } from "../../components";
// import { useReduxContextValue } from "../../contexts/redux-context";

type Props = {
  children: React.ReactNode;
};

const EmptyLayout = (props: Props) => {
  // const { services, store } = useReduxContextValue();
  return (
    <React.Fragment>
      <Container>
        <Box my={4}>{props.children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default EmptyLayout;
