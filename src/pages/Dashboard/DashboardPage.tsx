import React from "react";
import { Typography } from "@material-ui/core";
import { Page, Toolbar } from "components";

const DashboardPage = () => {
  return (
    <Page>
      <Toolbar>
        <Typography variant="h3">Dashboard Page</Typography>
      </Toolbar>
    </Page>
  );
};

export default DashboardPage;
