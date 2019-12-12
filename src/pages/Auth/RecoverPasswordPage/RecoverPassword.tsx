import React, { FC, useState } from "react";
import { useReduxContextValue } from "contexts/redux-context";
import { Redirect, useHistory } from "react-router";
import { Avatar, Button, Link, Box, Grid, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Copyright } from "components";
import { useStyles } from "../styles";
import MailInput from "components/UI/MailInput/MailInput";

const RecoverPassword: FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const { store, services } = useReduxContextValue();
  const [email, setEmail] = useState({ value: "", isValid: false });

  const onSubmitRecoverFormHandle = async () => {
    if (email.isValid) {
      const result = await services.userService.sendPasswordResetEmail(email.value);
      if (!!result) {
        services.appService.showSnackbarMessage(String(result), "error");
      } else {
        const message = "Recover mail have been send. Please check your mail-box.";
        services.appService.showSnackbarMessage(message, "info");
        history.goBack();
      }
    }
  };

  return store.userState.isAuth ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid className={classes.paper} item xs={10} sm={8} md={6} lg={4}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h2">
          Get recovery code
        </Typography>
        <Typography component="h2" variant="body1">
          We will send you an email to recover your password.
        </Typography>

        <div className={classes.form}>
          <MailInput
            onChange={data => {
              setEmail({ ...data });
            }}
          ></MailInput>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!email.isValid}
            className={classes.submit}
            onClick={onSubmitRecoverFormHandle}
          >
            Send Password Recovery Code
          </Button>
          <Grid container justify="flex-start">
            <Link component="button" variant="body2" onClick={() => history.goBack()}>
              {"Go Back"}
            </Link>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default RecoverPassword;
