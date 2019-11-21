import React, { FC, useState } from "react";

import { useReduxContextValue } from "../contexts/redux-context";
import { useHistory } from "react-router";

const LoginPage: FC = () => {
  const { userService } = useReduxContextValue().services;
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonHandle = async () => {
    const result = await userService.signInWithEmailAndPassword(email, password);
    console.log(result);
    if (result == undefined) {
      history.replace("/");
    }
  };

  return <div>Login</div>;
};

export default LoginPage;
