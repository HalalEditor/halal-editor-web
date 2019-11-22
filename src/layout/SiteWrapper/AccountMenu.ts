import userAvatar from "../../assets/user.svg";
import { UserService } from "../../services/user-service";
import { User } from "../../models/user";

export const getAccountDropDownMenu = (userService: UserService, currentUser?: User) => {
  if (!currentUser) return undefined;

  return {
    avatarURL: userAvatar,
    name: "Jane Pearson",
    description: currentUser.email,
    options: [
      { icon: "user", value: "Profile", to: "/profile" },
      {
        icon: "log-out",
        value: "Sign out",
        onClick: () => {
          userService.logout();
        }
      }
    ]
  };
};
