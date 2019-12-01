import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { SearchInput } from "../../../components";
import UserItem from "../components/UserItem";
import { useReduxContextValue } from "../../../contexts/redux-context";

const LOAD_LIMIT = 10;

const UserListPage = () => {
  const classes = useStyles();
  const { store, services } = useReduxContextValue();
  const { userList } = store.userState;

  const [loadPage, setLoadPage] = useState({ limit: LOAD_LIMIT, searchKey: "" });

  const { userService } = services;
  const { userState } = store;

  useEffect(() => {
    const lastLoadUserId = userList.length > 0 ? userList[userList.length - 1]._id : undefined;
    userService.loadUserList(loadPage.limit, lastLoadUserId, loadPage.searchKey);
  }, [loadPage]);

  const loadMoreUser = () => {
    setLoadPage({ ...loadPage });
  };

  const handleSearchEvent = (searchKey: string) => {
    //TODO: add debounce time
    setLoadPage({ searchKey: searchKey, limit: LOAD_LIMIT });
  };

  let users = userState.userList.map(user => {
    //TODO add property (user-category, email-verified) to user card
    //TODO connect user image
    return <UserItem key={user._id} user={user} onClick={() => console.log(user._id)} />;
  });
  for (let i = 0; i < 10; i++) {
    users.push();
  }

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Typography variant="h3">User List</Typography>
        <span className={classes.spacer} />
        <SearchInput
          onChange={event => {
            handleSearchEvent(event.target.value);
          }}
          className={classes.searchInput}
          placeholder="Search user"
        />

        <Button color="primary" variant="contained" onClick={loadMoreUser}>
          load more user
        </Button>
      </div>
      <div className={classes.row}>
        <div className={classes.content}>
          <Grid container spacing={2}>
            {users}
          </Grid>
        </div>
      </div>
      //TODO add infinity scroll
    </div>
  );
};

export default UserListPage;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    content: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(2)
    },
    spacer: {
      flexGrow: 1
    },
    row: {
      display: "flex",
      alignItems: "center"
      // marginTop: theme.spacing(1)
    },
    searchInput: {
      marginRight: theme.spacing(1)
    }
  })
);
