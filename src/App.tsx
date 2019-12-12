import React, { FC } from "react";
import ReduxContextProvider from "./contexts/redux-context";
import Router from "./Router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/index";
import { CustomSnackbar } from "components";

const App: FC = () => {
  return (
    <ReduxContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
        <CustomSnackbar />
      </ThemeProvider>
    </ReduxContextProvider>
  );
};

export default App;
