import React, { FC } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const HomePage: FC = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      <Typography variant="h1" component="h2" gutterBottom>
        Home Page
      </Typography>
      <Grid container justify="space-around">
        <Button variant="contained" color="primary" onClick={() => history.push("/login")}>
          Login
        </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/product")}>
          Single Product
        </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/products")}>
          Products List
        </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/product/add")}>
          Add Product
        </Button>
        <Button variant="contained" color="primary" onClick={() => history.push("/product/edit")}>
          Edit Product
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default HomePage;
