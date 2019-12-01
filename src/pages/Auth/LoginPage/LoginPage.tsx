import React, { FC, useState } from "react";
import { useReduxContextValue } from "../../../contexts/redux-context";
import { Redirect, useHistory } from "react-router";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Copyright } from "../../../components";
import { MailInput, PasswordInput } from "../../../components/UI";
import { useStyles } from "../styles";

const LoginPage: FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const { services, store } = useReduxContextValue();
  const [email, setEmail] = useState({ value: "", isValid: false });
  const [password, setPassword] = useState({ value: "", isValid: false });

  const onSubmitLoginFormHandle = async () => {
    if (email.isValid && password.isValid) {
      const result = await services.userService.signInWithEmailAndPassword(
        email.value,
        password.value
      );
      if (!!result) {
        services.appService.showSnackbarMessage({
          message: String(result),
          show: true,
          variant: "error"
        });
      }
    }
  };

  const onLoginWithGoogle = async () => {
    const result = await services.userService.signInWithGoogle();
    if (!!result) {
      services.appService.showSnackbarMessage({
        message: String(result),
        show: true,
        variant: "error"
      });
    }
  };

  const handleLink = (to: string) => {
    history.push(to);
  };

  return store.userState.isAuth ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid className={classes.paper} item xs={10} sm={8} md={6} lg={4}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onLoginWithGoogle}
        >
          Sign In With Google
        </Button>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <div className={classes.form}>
          <MailInput
            onChange={data => {
              setEmail({ ...data });
            }}
          ></MailInput>

          <PasswordInput
            isMatchInput={false}
            onChange={data => {
              setPassword({ ...data });
            }}
          ></PasswordInput>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!email.isValid || !password.isValid}
            className={classes.submit}
            onClick={onSubmitLoginFormHandle}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleLink("/recover-password")}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component="button" variant="body2" onClick={() => handleLink("/signup")}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
