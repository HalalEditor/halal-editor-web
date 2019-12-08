import { Product } from "../models/product";

export type ProductDTO = Product & {
  isFavProduct: boolean;
  isCurrentUserOwner: boolean;
};
