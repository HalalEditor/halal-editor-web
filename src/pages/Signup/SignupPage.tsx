import React, { FC, useState } from "react";
import Typography from "@material-ui/core/Typography";

import { useReduxContextValue } from "../../contexts/redux-context";
import { useHistory } from "react-router";

const SignupPage: FC = () => {
  const { userService } = useReduxContextValue().services;
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupButtonHandle = async () => {
    const result = await userService.createUserWithEmailAndPassword(email, password);
    console.log(result);
    if (result === undefined) {
      history.replace("/");
    }
  };

  return (
    <Typography variant="h1" component="h2" gutterBottom>
      Login Page
    </Typography>
    // <Page className="page-single middle">
    //   <div className="container">
    //     <div className="row">
    //       <Grid.Col className="col-login mx-auto">
    //         <div className="card">
    //           <div className="card-body p-6">
    //             <Button block social="google" className="text-left mb-6">
    //               Sign up with Google
    //             </Button>
    //             <div className="or-seperator">
    //               <i className="text-muted">or</i>
    //             </div>
    //             <Form.Group label="User Name">
    //               <Form.Input
    //                 icon="user"
    //                 placeholder="E-mail address..."
    //                 onChange={event => {
    //                   setEmail(event.target.value);
    //                 }}
    //               />
    //             </Form.Group>
    //             <Form.Group label="Password">
    //               <Form.Input
    //                 type="password"
    //                 icon="lock"
    //                 placeholder="Password..."
    //                 onChange={event => {
    //                   setPassword(event.target.value);
    //                 }}
    //               />
    //             </Form.Group>
    //             <Button block color="primary" onClick={signupButtonHandle}>
    //               Sign up
    //             </Button>
    //           </div>
    //         </div>
    //         <div className="text-center">
    //           <Text className="text-center text-muted">
    //             Have an account? <a href="/">Log in</a>
    //           </Text>
    //         </div>
    //       </Grid.Col>
    //     </div>
    //   </div>
    // </Page>
  );
};

export default SignupPage;
