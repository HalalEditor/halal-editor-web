import "firebase/firebase-firestore";
import { Dispatch } from "react";
import { ProductActionType } from "../store/product-store";
import { ReduxStoreValueType } from "./../contexts/redux-value";

export class ProductService {
  constructor(private dispatch: Dispatch<ProductActionType>, private store: ReduxStoreValueType) {}

  getProductList() {}

  getProduct(id: string) {}

  getComments() {}
}
