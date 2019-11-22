import React, { FC, useState } from "react";
import { Button, Form, Grid, Page, Text } from "tabler-react";
import "../../styles.scss";

import { useReduxContextValue } from "../../contexts/redux-context";
import { Redirect } from "react-router";

const LoginPage: FC = () => {
  const { services, store } = useReduxContextValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const unSubmitLoginFormHandle = async () => {
    console.log("loging....");
    const result = await services.userService.signInWithEmailAndPassword(email, password);
    console.log("loginButtonHandle:", result);
  };

  return store.userState.isAuth ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Page className="page-single middle">
      <div className="container">
        <div className="row">
          <Grid.Col className="col-login mx-auto">
            <div className="card">
              <div className="card-body p-6">
                <Button block social="google" className="text-left mb-6">
                  Sign in with Google
                </Button>
                <div className="or-seperator">
                  <i className="text-muted">or</i>
                </div>
                <Form.Group label="User Name">
                  <Form.Input
                    icon="user"
                    placeholder="E-mail address..."
                    onChange={event => {
                      setEmail(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group label="Password">
                  <Form.Input
                    type="password"
                    icon="lock"
                    placeholder="Password..."
                    onChange={event => {
                      setPassword(event.target.value);
                    }}
                  />
                </Form.Group>
                <Button block color="primary" onClick={unSubmitLoginFormHandle}>
                  Login
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Text className="text-center text-muted">
                Not a member? <a href="/">Sign up now</a>
              </Text>
            </div>
          </Grid.Col>
        </div>
      </div>
    </Page>
  );
};

export default LoginPage;
