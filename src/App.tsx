import React, { useEffect } from "react";
import app from "firebase/app";
import { FIREBASE_CONFIG } from "./.config";
import ReduxContextProvider from "./contexts/redux-context";
import Router from "./Router";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App: React.FC = () => {
  useEffect(() => {
    console.log("[app.tsx]: useEffect");
    app.initializeApp(FIREBASE_CONFIG);
  }, []);

  return (
    <ReduxContextProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </ReduxContextProvider>
  );
};

export default App;
