import React from "react";
import { Home, People, DnsRounded } from "@material-ui/icons";
const DrawerItems = [
  {
    id: "Halal Editor",
    children: [
      {
        id: "Dashboard",
        path: "/dashboard",
        icon: <Home />,
        accessibleUserCategories: ["root", "admin", "editor", "normal"]
      },
      {
        id: "My Profile",
        path: "/profile",
        icon: <People />,
        accessibleUserCategories: ["root", "admin", "editor", "normal"]
      },
      {
        id: "User List",
        path: "/users",
        icon: <People />,
        accessibleUserCategories: ["root", "admin"]
      },
      {
        id: "Products List",
        path: "/products",
        icon: <DnsRounded />,
        accessibleUserCategories: ["root", "admin", "editor", "normal"]
      }
    ]
  }
];
export default DrawerItems;
