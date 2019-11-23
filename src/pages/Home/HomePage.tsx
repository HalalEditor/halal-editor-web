import React, { FC } from "react";
import { Typography, Button } from "@material-ui/core";

const HomePage: FC = () => {
  return (
    <React.Fragment>
      <Typography variant="h1" component="h2" gutterBottom>
        Home Page
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </React.Fragment>
  );
};

export default HomePage;
