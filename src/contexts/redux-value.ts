import { initialUserState, UserReducer } from "../store/user-store";
import { UserService } from "../services/user-service";
import { UserStateType } from "../store/user-store";

export type ReduxValueType = {
  store: {
    userState: UserStateType;
  };
  services: {
    userService: UserService;
  };
};
