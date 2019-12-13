import React from "react";
import { Redirect } from "react-router";
import { Page, Toolbar } from "components";
import { Typography } from "@material-ui/core";
import { useReduxContextValue } from "contexts/redux-context";

const HomePage = () => {
  const { store } = useReduxContextValue();
  return store.userState.isAuth ? (
    <Redirect to="/dashboard"></Redirect>
  ) : (
    <Page>
      <Toolbar>
        <Typography variant="h3">Home Page</Typography>
      </Toolbar>
    </Page>
  );
};

export default HomePage;
