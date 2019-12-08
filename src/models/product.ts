export type Product = {
  mainInfo: ProductMainInfo;
  ingredientInfo: ProductIngredientInfo;

  isReviewed: boolean;
  reviews: ProductReview[];
  last3comments: ProductComment[];
  commentCount: number;
  createdBy: string;
};

type ProductMainInfo = {
  _id: string;
  barcode: string;
  name?: string;
  imagePath: string;
  createdAt: Date;
  createdTimeStamp: number;
  updatedAt: Date;
};

export type ProductIngredientInfo = {
  ingredientsImagePath: string;
  isAlcoholFree: boolean | null;
  isVegan: boolean | null;
  isVegetarian: boolean | null;
  isHaveFlavor: boolean | null;
};

export type ProductReview = {
  owner: string;
  content: string;
  createdAt: Date;
};

export type ProductComment = {
  owner: string;
  content: string;
  createdAt: Date;
};
