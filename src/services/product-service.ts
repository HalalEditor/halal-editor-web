import { OpenFoodProduct } from "./../models/open-food";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { Dispatch } from "react";
import { ProductActionType } from "../store/product-store";
import { ReduxStoreValueType } from "./../contexts/redux-value";
import { Product } from "../models/product";
import { isArray } from "util";
import { delay, getIdFromBarcode } from "./helper";
import { User } from "../models/user";
import { ProductDTO } from "../dto/product-dto";

export class ProductService {
  constructor(private dispatch: Dispatch<ProductActionType>, private store: ReduxStoreValueType) {}

  clearProductList() {
    this.dispatch({
      type: "ClearProductList",
      payload: {}
    });
  }

  async loadProductList(data: { limit: number }) {
    const { productList } = this.store.productState;
    const { currentUser } = this.store.userState;

    return new Promise(async (resolve, reject) => {
      try {
        const lastProduct =
          Object.values(productList).length > 0 ? Object.values(productList).pop() : undefined;

        const query = await firebase
          .firestore()
          .collection("products")
          .orderBy("mainInfo.createdTimeStamp", "desc")
          .startAfter(!!lastProduct ? lastProduct.mainInfo.createdTimeStamp : "")
          .limit(data.limit)
          .get();

        console.log(query.size);

        const queryResult = query.docs
          .filter(p => p.exists)
          .map(product => {
            const data = product.data() as Product;
            const isCurrentUserOwner = !!currentUser && data.mainInfo._id === currentUser._id;
            const isFavProduct = this.isFavProduct(data.mainInfo._id);
            return { ...data, isCurrentUserOwner, isFavProduct } as ProductDTO;
          });

        console.log(queryResult.map(p => p.mainInfo.createdTimeStamp));

        this.dispatch({
          type: "AddProductList",
          payload: { productList: queryResult }
        });

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private isFavProduct(productId: string): boolean {
    return !!this.store.productState.favoriteProductList[productId];
  }

  async getProductListCount() {
    const query = await firebase
      .firestore()
      .collection("products")
      .get();
    return query.size;
  }

  async loadAllFavoriteProduct() {
    const { userState } = this.store;
    return new Promise(async (resolve, reject) => {
      try {
        if (!userState.currentUser || !userState.isCurrentUserFromFirebase) {
          return;
        }
        const { currentUser } = userState;

        this.clearFavoriteProductList();

        const query = await firebase
          .firestore()
          .collection(`/users/${currentUser._id}/fav-products`)
          .get();

        const queryResult = query.docs
          .filter(p => p.exists)
          .map(product => {
            const data = product.data() as Product;
            const isCurrentUserOwner = !!currentUser && data.mainInfo._id === currentUser._id;
            return { ...data, isFavProduct: true, isCurrentUserOwner } as ProductDTO;
          });

        this.dispatch({
          type: "SetFavoriteProductList",
          payload: { favoriteProductList: queryResult }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async clearFavoriteProductList() {
    this.dispatch({
      type: "ClearFavoriteProductList",
      payload: {}
    });
  }

  async createDummyDataFromOpenFood() {
    await this.createDummyData("coke");
    await this.createDummyData("banana");
    await this.createDummyData("chocolate");
    await this.createDummyData("chips");
    await this.createDummyData("ice cream");
  }

  async toggleFavoriteStatus(product: ProductDTO) {}

  private async createDummyData(key: string) {
    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${key}&search_simple=1&json=1`;
      const response = await fetch(url).then(res => res.json());

      if (!!response.products && isArray(response.products)) {
        console.log(response.products.length);
        const foodProducts = response.products as OpenFoodProduct[];

        for (const product of foodProducts.filter(x => x.complete === 1)) {
          console.log(product._id, product.product_name);

          const isVegan = !product.ingredients_analysis_tags
            ? null
            : product.ingredients_analysis_tags.findIndex(x => "en:non-vegan") !== -1
            ? false
            : product.ingredients_analysis_tags.findIndex(x => "en:vegan") !== -1
            ? true
            : null;

          const isVegetarian = !product.ingredients_analysis_tags
            ? null
            : product.ingredients_analysis_tags.findIndex(x => "en:non-vegetarian") !== -1
            ? false
            : product.ingredients_analysis_tags.findIndex(x => "en:vegetarian") !== -1
            ? true
            : null;

          const newProduct: Product = {
            mainInfo: {
              _id: getIdFromBarcode(product.code),
              barcode: product.code,
              name: product.product_name,
              createdAt: new Date(),
              updatedAt: new Date(),
              createdTimeStamp: new Date().getTime(),
              imagePath: product.image_front_url
            },
            commentCount: 0,
            ingredientInfo: {
              ingredientsImagePath: product.image_ingredients_url,
              isAlcoholFree: null,
              isHaveFlavor: null,
              isVegan: isVegan,
              isVegetarian: isVegetarian
            },
            last3comments: [],
            reviews: [],
            isReviewed: false,
            createdBy: (this.store.userState.currentUser as User)._id
          };
          console.log("product", newProduct.mainInfo._id, newProduct.mainInfo.name);

          await firebase
            .firestore()
            .doc(`/products/${newProduct.mainInfo._id}`)
            .set(newProduct);

          await delay(1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
