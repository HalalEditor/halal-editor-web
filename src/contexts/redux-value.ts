import { ProductService } from "./../services/product-service";
import { ProductStateType } from "./../store/product-store";
import { AppStateType } from "./../store/app-store";
import { AppService } from "./../services/app-service";
import { UserService } from "../services/user-service";
import { UserStateType } from "../store/user-store";

export type ReduxStoreValueType = {
  userState: UserStateType;
  appState: AppStateType;
  productState: ProductStateType;
};

export type ReduxServiceValueType = {
  userService: UserService;
  appService: AppService;
  productService: ProductService;
};
export type ReduxValueType = {
  store: ReduxStoreValueType;
  services: ReduxServiceValueType;
};
