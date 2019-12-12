import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Button, useTheme, useMediaQuery } from "@material-ui/core";
import { Page } from "components";
import { useStyles } from "./styles";

const Error401 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page className={classes.root} title="Error 401">
      <Typography align="center" variant={mobileDevice ? "h4" : "h1"}>
        401: We are sorry but we are not able to authenticate you.
      </Typography>
      <Typography align="center" variant="subtitle2">
        You either tried some shady route or you came here by mistake. Whichever it is, try using
        the navigation
      </Typography>
      <div className={classes.imageContainer}>
        <img
          alt="Under development"
          className={classes.image}
          src="/assets/images/undraw_authentication.svg"
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button color="primary" component={RouterLink} to="/" variant="outlined">
          Back to home
        </Button>
      </div>
    </Page>
  );
};

export default Error401;
