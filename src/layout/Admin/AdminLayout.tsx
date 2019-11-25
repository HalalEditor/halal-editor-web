import React from "react";
import { useHistory } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { AppBar } from "../../components";
import { useStyles } from "./styles";

type Props = {
  children: React.ReactNode;
};

const DrawerItemsData = [
  { label: "Dashboard", path: "/dashboard", icon: <MenuIcon />, key: 0 },
  { label: "Product List", path: "/products", icon: <MenuIcon />, key: 1 },
  { label: "Add Product", path: "/product/add", icon: <MenuIcon />, key: 2 },
  { label: "Edit Product", path: "/product/edit", icon: <MenuIcon />, key: 3 },
  { label: "Profile", path: "/profile", icon: <MenuIcon />, key: 4 }
];

const AdminLayout = (props: Props) => {
  let history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {DrawerItemsData.map((item, index) => (
            <ListItem button key={item.key} onClick={() => history.push(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
export default AdminLayout;
