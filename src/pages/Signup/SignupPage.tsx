import React, { FC, useState } from "react";
import { useReduxContextValue } from "../../contexts/redux-context";
import { Redirect, useHistory } from "react-router";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Copyright } from "../../components";
import { useStyles } from "./styles";

const SignupPage: FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const { userService } = useReduxContextValue().services;
  const { store } = useReduxContextValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSignupButtonHandle = async () => {
    const result = await userService.createUserWithEmailAndPassword(email, password);
    console.log(result);
    if (result === undefined) {
      history.replace("/");
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmitSignupButtonHandle}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Link onClick={() => handleLink("/login")}>Already have an account? Sign in</Link>
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
