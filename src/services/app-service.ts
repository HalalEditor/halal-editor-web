import { ReduxStoreValueType } from "contexts/redux-value";
import { SnackbarMessageVariantIcon } from "models/snackbar";
import { AppActionType } from "store/app-store";
import { Dispatch } from "react";

export class AppService {
  constructor(private dispatch: Dispatch<AppActionType>, private store: ReduxStoreValueType) {}

  showSnackbarMessage(message: string, messageType: keyof typeof SnackbarMessageVariantIcon) {
    this.dispatch({
      type: "SetSnackbarMessage",
      payload: {
        snackbarInfo: {
          message,
          variant: messageType,
          show: true
        }
      }
    });
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
