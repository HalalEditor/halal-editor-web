import React, { FC, useEffect } from "react";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as firebase from "firebase/app";

import { FIREBASE_CONFIG } from "./.config";
import ReduxContextProvider from "./contexts/redux-context";
import Router from "./Router";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/index";

const browserHistory = createBrowserHistory();

const App: FC = () => {
  useEffect(() => {
    console.log("[app.tsx]: useEffect");
    firebase.initializeApp(FIREBASE_CONFIG);
  }, []);

  return (
    <ReduxContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter history={browserHistory}>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxContextProvider>
  );
};

export default App;
