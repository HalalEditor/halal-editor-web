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

const LoginPage: FC = () => {
  let history = useHistory();
  const classes = useStyles();
  const { services, store } = useReduxContextValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLoginFormHandle = async () => {
    console.log("loging....");
    const result = await services.userService.signInWithEmailAndPassword(email, password);
    console.log("loginButtonHandle:", result);
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
          Sign in
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
            onClick={onSubmitLoginFormHandle}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={() => handleLink("/signup")}>{"Don't have an account? Sign Up"}</Link>
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
