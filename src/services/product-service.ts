import { OpenFoodProduct } from "./../models/open-food";
import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import { Dispatch } from "react";
import { ProductActionType } from "../store/product-store";
import { ReduxStoreValueType } from "./../contexts/redux-value";
import { Product } from "../models/product";
import { isArray } from "util";

export class ProductService {
  constructor(private dispatch: Dispatch<ProductActionType>, private store: ReduxStoreValueType) {}

  async createDummyDataFromOpenFood() {
    try {
      const url =
        "https://world.openfoodfacts.org/cgi/search.pl?search_terms=biscuit&search_simple=1&json=1";
      const response = await fetch(url).then(res => res.json());

      if (!!response.products && isArray(response.products)) {
        console.log(response.products.length);
        const foodProducts = response.products as OpenFoodProduct[];
        foodProducts
          .filter(x => x.complete === 1)
          .forEach(async (product: OpenFoodProduct) => {
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
              _id: product.code,
              barcode: product.code,
              name: product.product_name,
              commentCount: 0,
              imagePath: product.image_front_url,
              ingredientsImagePath: product.image_ingredients_url,
              ingredientInfo: {
                isAlcoholFree: null,
                isHaveFlavor: null,
                isVegan: isVegan,
                isVegetarian: isVegetarian
              },
              createdAt: new Date(),
              updatedAt: new Date(),
              last3comments: [],
              reviews: [],
              isReviewed: false
            };
            await firebase
              .firestore()
              .doc(`/products/${newProduct._id}`)
              .set(newProduct);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
