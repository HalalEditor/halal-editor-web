import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";

import clsx from "clsx";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";

import { useStyles } from "./styles";

const DrawerItemsData = [
  {
    id: "Halal Editor",
    children: [
      { id: "Dashboard", path: "/dashboard", icon: <HomeIcon />, active: true },
      { id: "My Profile", path: "/profile", icon: <PeopleIcon /> },
      { id: "User List", path: "/users", icon: <PeopleIcon /> }
    ]
  },
  {
    id: "Products",
    children: [{ id: "Products List", path: "/products", icon: <DnsRoundedIcon /> }]
  }
];

const Navigator: FC = () => {
  let history = useHistory();
  const classes = useStyles();

  return (
    // <Drawer
    //   className={classes.drawer}
    //   variant="temporary"
    //   open={true}
    //   classes={{
    //     paper: classes.drawerPaper
    //   }}
    // >
    <div>
      <div className={classes.toolbar} />
      <List disablePadding>
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
              <ListItem
                key={item.id}
                onClick={() => history.push(item.path)}
                className={clsx(
                  classes.item,
                  window.location.pathname === item.path && classes.itemActiveItem
                )}
              >
                <ListItemIcon className={classes.itemIcon}>{item.icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary
                  }}
                >
                  {item.id}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </div>
    // </Drawer>
  );
};

export default Navigator;
