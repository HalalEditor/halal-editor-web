import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import { ListItemIcon, ListItemText, Divider, List, ListItem, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const DrawerItemsData = [
  {
    id: "Halal Editor",
    children: [
      { id: "Dashboard", path: "/dashboard", icon: <HomeIcon />, active: true },
      { id: "My Profile", path: "/profile", icon: <PeopleIcon /> },
      { id: "User List", path: "/users", icon: <PeopleIcon /> },
      { id: "Products List", path: "/products", icon: <DnsRoundedIcon /> }
    ]
  }
];

interface Props {
  onMenuItemClick: () => void;
}

const Navigator = ({ onMenuItemClick }: Props) => {
  let history = useHistory();
  const classes = useStyles();

  const handleMenuItemClick = (path: string) => {
    onMenuItemClick();
    history.push(path);
  };

  return (
    <React.Fragment>
      <List className={classes.listContainer}>
        {DrawerItemsData.map((item, index) => (
          <React.Fragment key={item.id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {item.id}
              </ListItemText>
            </ListItem>
            {item.children.map((item, index) => (
              <ListItem className={classes.item} disableGutters key={item.id}>
                <Button
                  className={clsx(
                    classes.button,
                    window.location.pathname === item.path && classes.active
                  )}
                  onClick={() => handleMenuItemClick(item.path)}
                >
                  <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                  {item.id}
                </Button>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Navigator;
