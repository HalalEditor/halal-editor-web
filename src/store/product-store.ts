import { Reducer } from "react";
import { ActionType } from "./action-type";
import { ProductDTO } from "../dto/product-dto";

export type ProductStateType = {
  productList: ProductDTO[];
  favoriteProductList: ProductDTO[];
  myProductList: ProductDTO[];
  scannedProduct?: ProductDTO;
  selectedProduct?: ProductDTO;
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
type ActionPayloadType = {
  productList?: ProductDTO[];
  favoriteProductList?: ProductDTO[];
  myProductList?: ProductDTO[];
};

export const ProductReducer: Reducer<ProductStateType, ProductActionType> = (
  state = initialProductState,
  action
) => {
  console.log("[ProductReducer]:", action);

  switch (action.type) {
    case "AddProductList":
      if (!!action.payload.productList) {
        return { ...state, productList: [...state.productList, ...action.payload.productList] };
      } else return { ...state };
    case "ClearProductList":
      return { ...state, productList: [] };
    case "SetFavoriteProductList":
      if (!!action.payload.favoriteProductList) {
        return { ...state, favoriteProductList: [...action.payload.favoriteProductList] };
      } else return { ...state };
    case "ClearFavoriteProductList":
      return { ...state, favoriteProductList: [] };
    default:
      return { ...state };
  }
};
