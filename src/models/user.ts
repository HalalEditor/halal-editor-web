export type User = {
  _id: string;
  username: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  userCategory: UserCategory;
};

export type UserCategory = "root" | "admin" | "editor" | "normal";
