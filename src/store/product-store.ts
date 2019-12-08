import { Reducer } from "react";
import { ActionType } from "./action-type";
import { ProductDTO, ProductDictionary } from "../dto/product-dto";
import { arrayToDictionary } from "./../services/helper";

export type ProductStateType = {
  productList: ProductDictionary;
  favoriteProductList: ProductDictionary;
  myProductList: ProductDictionary;
  scannedProduct?: ProductDTO;
  selectedProduct?: ProductDTO;
};

export type ProductActionType = {
  type: ActionType;
  payload: ActionPayloadType;
};

export const initialProductState: ProductStateType = {
  productList: {},
  favoriteProductList: {},
  myProductList: {}
};
type ActionPayloadType = {
  productList?: ProductDTO[];
  favoriteProductList?: ProductDTO[];
  myProductList?: ProductDTO[];
  selectedProduct?: ProductDTO;
};

export const ProductReducer: Reducer<ProductStateType, ProductActionType> = (
  state = initialProductState,
  action
) => {
  console.log("[ProductReducer]:", action);

  switch (action.type) {
    case "AddProductList":
      if (!!action.payload.productList) {
        const addProductList = arrayToDictionary(action.payload.productList, "_id");
        return { ...state, productList: { ...state.productList, ...addProductList } };
      } else return { ...state };

    case "ClearProductList":
      return { ...state, productList: {} };

    case "SetFavoriteProductList":
      if (!!action.payload.favoriteProductList) {
        const favoriteProductList = arrayToDictionary(action.payload.favoriteProductList, "_id");

        return { ...state, favoriteProductList: { ...favoriteProductList } };
      } else return { ...state };

    case "ClearFavoriteProductList":
      return { ...state, favoriteProductList: {} };

    default:
      return { ...state };
  }
};
