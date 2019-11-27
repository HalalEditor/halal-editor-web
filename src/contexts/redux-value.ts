import { ProductService } from "./../services/product-service";
import { ProductStateType } from "./../store/product-store";
import { AppStateType } from "./../store/app-store";
import { AppService } from "./../services/app-service";
import { UserService } from "../services/user-service";
import { UserStateType } from "../store/user-store";

export type ReduxValueType = {
  store: {
    userState: UserStateType;
    appState: AppStateType;
    productState: ProductStateType;
  };
  services: {
    userService: UserService;
    appService: AppService;
    productService: ProductService;
  };
};
