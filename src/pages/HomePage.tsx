import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import { useReduxContextValue } from "../contexts/redux-context";
import { Redirect } from "react-router";

const HomePage: FC = () => {
  const { store } = useReduxContextValue();
  return store.userState.isAuth ? (
    <Redirect to="/dashboard"></Redirect>
  ) : (
    <React.Fragment>
      <Typography variant="h3">Home Page</Typography>
    </React.Fragment>
  );
};

export default HomePage;
