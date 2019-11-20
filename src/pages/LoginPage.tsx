import React, { FC, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { useReduxContextValue } from "../contexts/redux-context";

const LoginPage: FC = () => {
  const { userService } = useReduxContextValue().services;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonHandle = () => {
    userService.signInWithEmailAndPassword(email, password);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />

            <Button color="teal" fluid size="large" onClick={loginButtonHandle}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
