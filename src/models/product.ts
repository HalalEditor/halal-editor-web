export type Product = {
  _id: string;
  barcode: string;
  name?: string;
  imagePath: string;
  ingredientsImagePath: string;
  ingredientInfo: ProductIngredientInfo;
  isReviewed?: boolean;
  reviews: ProductReview[];
  last3comments: ProductComment[];
  commentCount: number;
  createdAt: Date;
  createdTimeStamp: number;
  updatedAt: Date;
};

export type ProductIngredientInfo = {
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
