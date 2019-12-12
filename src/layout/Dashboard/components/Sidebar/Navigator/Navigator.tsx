import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { ListItemIcon, ListItemText, Divider, List, ListItem, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { User } from "models/user";
import DrawerItems from "./DrawerItems";

interface Props {
  onMenuItemClick: () => void;
  currentUser?: User;
}

const Navigator = ({ onMenuItemClick, currentUser }: Props) => {
  let history = useHistory();
  const classes = useStyles();

  const handleMenuItemClick = (path: string) => {
    onMenuItemClick();
    history.push(path);
  };

  // const canAccess = !!currentUser && !!auc && auc.indexOf(currentUser.userCategory) !== -1;

  return (
    <React.Fragment>
      <List className={classes.listContainer}>
        {DrawerItems.map((item, index) => (
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
            {item.children.map((item, index) =>
              !!currentUser &&
              item.accessibleUserCategories.indexOf(currentUser.userCategory) !== -1 ? (
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
              ) : null
            )}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Navigator;
