export type User = {
  _id: string;
  email: string;
  emailVerified: boolean;
  userCategory: UserCategory;
};

export type UserCategory = "root" | "admin" | "editor" | "normal";
