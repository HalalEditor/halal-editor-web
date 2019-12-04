import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { User, UserCategory } from "../../../models/user";
import ModalDialog from "../../../hocs/ModalDialog";
import { useReduxContextValue } from "../../../contexts/redux-context";

export type UserEditRefType = {
  showDialog: (user: User) => void;
  closeDialog: () => void;
};

const UserEdit = React.forwardRef((prop, ref) => {
  const classes = useStyles();
  const { store, services } = useReduxContextValue();
  const { currentUser } = store.userState;

  const [editUser, setEditUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [newUserCategory, setNewUserCategory] = useState<UserCategory | null>(null);

  React.useImperativeHandle(ref, () => ({
    showDialog: (editUser: User) => {
      if (!!editUser && !!currentUser) {
        let canAccessible = true;
        canAccessible = canAccessible && editUser.userCategory !== "root";
        canAccessible =
          canAccessible &&
          (currentUser.userCategory === "admin" || currentUser.userCategory === "root");

        if (editUser.userCategory === "admin") {
          canAccessible = canAccessible && currentUser.userCategory === "root";
        }

        if (canAccessible) {
          setEditUser(editUser);
          setNewUserCategory(editUser.userCategory);
          setOpen(!!editUser);
        } else {
          services.appService.showSnackbarMessage(
            `you haven't any permission for this user`,
            "warning"
          );
        }
      }
    }
  }));

  const handleApply = () => {
    if (!!editUser && newUserCategory) {
      services.userService.changeUserCategory(editUser, newUserCategory);
      handleCancel();
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setEditUser(null);
  };

  const handleChange = (event: any) => {
    if (!!event.target.value) {
      setNewUserCategory(event.target.value);
    }
  };

  const dialogBox = (user: User) => {
    return (
      <ModalDialog
        title="Change User Category"
        dialogDescription={user.username}
        show={open}
        onApply={handleApply}
        onCancel={handleCancel}
      >
        <FormControl className={classes.formControl}>
          <InputLabel>User Category</InputLabel>
          <Select value={newUserCategory} onChange={handleChange}>
            {!!currentUser && currentUser.userCategory === "root" && (
              <MenuItem value="admin">admin</MenuItem>
            )}
            <MenuItem value="editor">editor</MenuItem>
            <MenuItem value="normal">normal</MenuItem>
          </Select>
        </FormControl>
      </ModalDialog>
    );
  };

  return !editUser ? null : dialogBox(editUser);
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default UserEdit;
