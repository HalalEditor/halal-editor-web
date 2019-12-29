export type User = {
  _id: string;
  username: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  userCategory: UserCategory;
  tokens: UserToken;
};

export type UserToken = {
  [id: string]: {
    deviceId: string;
    token: string;
    lastValidDate: Date;
  };
};

export type UserCategory = "root" | "admin" | "editor" | "normal";
