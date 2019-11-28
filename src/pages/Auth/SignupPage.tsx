import React, { FC, useState } from "react";
import { useReduxContextValue } from "../../contexts/redux-context";
import { Redirect, useHistory } from "react-router";
import { Avatar, Button, Link, Box, Grid, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Copyright } from "../../components";
import { useStyles } from "./styles";
import MailInput from "../../components/UI/MailInput";
import PasswordInput from "../../components/UI/PasswordInput";

const SignupPage: FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const { store, services } = useReduxContextValue();
  const { userService } = services;

  const [email, setEmail] = useState({ value: "", isValid: false });
  const [password, setPassword] = useState({ value: "", isValid: false });
  const [rePassword, setRePassword] = useState({ value: "", isValid: false });

  const onSubmitSignupButtonHandle = async () => {
    const result = await userService.createUserWithEmailAndPassword(email.value, password.value);
    console.log(result);

    if (!!result) {
      services.appService.showSnackbarMessage({
        message: String(result),
        show: true,
        variant: "error"
      });
    } else {
      services.appService.showSnackbarMessage({
        message: "Account has been created",
        show: true,
        variant: "success"
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
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
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

          <PasswordInput
            isMatchInput={true}
            matchPassword={password.value}
            onChange={data => {
              setRePassword({ ...data });
            }}
          ></PasswordInput>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!email.isValid || !password.isValid || !rePassword.isValid}
            color="primary"
            className={classes.submit}
            onClick={onSubmitSignupButtonHandle}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Link component="button" variant="body2" onClick={() => handleLink("/login")}>
              Already have an account? Sign in
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

export default SignupPage;
