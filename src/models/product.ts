export type Product = {
  barcode: string;
  name?: string;
  imagePath: string;
  ingredientsImagePath: string;
  isAlcoholFree?: boolean;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isHaveFlavor?: boolean;
  isReviewed?: boolean;
};
