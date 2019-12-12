import React from "react";
import { Snackbar } from "@material-ui/core";
import SnackbarMessage from "./SnackbarMessage";
import { useReduxContextValue } from "contexts/redux-context";

const CustomSnackbar = () => {
  const { services, store } = useReduxContextValue();
  const { snackbarInfo } = store.appState;
  return !snackbarInfo ? null : (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={snackbarInfo.show}
      autoHideDuration={6000}
      onClose={() => services.appService.closeSnackbarMessage()}
    >
      <SnackbarMessage
        onClose={() => services.appService.closeSnackbarMessage()}
        variant={snackbarInfo.variant}
        message={snackbarInfo.message}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
