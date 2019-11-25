import { SnackbarInfo } from "./../models/snackbar";
import { AppActionType } from "./../store/app-store";
import { Dispatch } from "react";

export class AppService {
  constructor(private dispatch: Dispatch<AppActionType>) {}

  showSnackbarMessage(snackbarInfo: SnackbarInfo) {
    this.dispatch({ type: "SetSnackbarMessage", payload: { snackbarInfo: snackbarInfo } });
  }

  closeSnackbarMessage() {
    this.dispatch({
      type: "SetSnackbarMessage",
      payload: {
        snackbarInfo: {
          message: "",
          show: false,
          variant: "info"
        }
      }
    });
  }
}
