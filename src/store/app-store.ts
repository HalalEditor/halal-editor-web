import { Reducer } from "react";
import { ActionType } from "./action-type";
import { SnackbarInfo } from "../models/snackbar";

export type AppStateType = {
  snackbarInfo?: SnackbarInfo;
};

export type AppActionType = {
  type: ActionType;
  payload: ActionPayloadType;
};

export const initialAppState: AppStateType = {
  snackbarInfo: {
    message: "",
    variant: "info",
    show: false
  }
};
type ActionPayloadType = { snackbarInfo?: SnackbarInfo };

export const AppReducer: Reducer<AppStateType, AppActionType> = (
  state = initialAppState,
  action
) => {
  console.log("[AppReducer]:", action);

  switch (action.type) {
    case "SetSnackbarMessage":
      const snackbarInfo = action.payload.snackbarInfo;
      return { ...state, snackbarInfo: snackbarInfo };

    default:
      return { ...state };
  }
};
