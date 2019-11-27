import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { Dispatch } from "react";
import { ProductActionType } from "../store/product-store";

export class ProductService {
  constructor(private dispatch: Dispatch<ProductActionType>) {}

  getProductList() {}

  getProduct(id: string) {}

  getComments() {
    // firebase.firestore().collectionGroup
  }
}
