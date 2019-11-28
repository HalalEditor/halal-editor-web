import { Product } from "./../models/product";
import { Reducer } from "react";
import { ActionType } from "./action-type";

export type ProductStateType = {
  productList: Product[];
  favoriteProductList: Product[];
  myProductList: Product[];
  scannedProduct?: Product;
  selectedProduct?: Product;
};

export type ProductActionType = {
  type: ActionType;
  payload: ActionPayloadType;
};

export const initialProductState: ProductStateType = {
  productList: [],
  favoriteProductList: [],
  myProductList: []
};
type ActionPayloadType = {};

export const ProductReducer: Reducer<ProductStateType, ProductActionType> = (
  state = initialProductState,
  action
) => {
  console.log("[ProductReducer]:", action);

  switch (action.type) {
    default:
      return { ...state };
  }
};
