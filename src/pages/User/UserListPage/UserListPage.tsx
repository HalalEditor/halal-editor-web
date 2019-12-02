import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, CircularProgress } from "@material-ui/core";
import { SearchInput } from "../../../components";
import UserItem from "../components/UserItem";
import { useReduxContextValue } from "../../../contexts/redux-context";
import { useStyles } from "./styles";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

const LOAD_LIMIT = 2;

const UserListPage = () => {
  const classes = useStyles();
  const { store, services } = useReduxContextValue();
  const { userList } = store.userState;
  const [userCount, setUserCount] = useState(0);
  const { isFetching, setIsFetching } = useInfiniteScroll(loadMoreUser);

  const [loadPage, setLoadPage] = useState({ limit: LOAD_LIMIT, searchKey: "" });

  const { userService } = services;
  const { userState } = store;

  useEffect(() => {
    userService.getUserCount().then(count => {
      setUserCount(count);
    });
  }, []);

  useEffect(
    () => {
      const lastLoadUserId = userList.length > 0 ? userList[userList.length - 1]._id : undefined;

      userService.loadUserList(loadPage.limit, lastLoadUserId, loadPage.searchKey).then(_ => {
        setIsFetching(false);
      });
    },
    /*
     * TODO: Remove following commented line before production
     * https://github.com/facebook/create-react-app/issues/6880
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadPage]
  );

  function loadMoreUser() {
    if (userCount > userState.userList.length) {
      setLoadPage({ ...loadPage });
    } else {
      setIsFetching(false);
    }
  }

  const handleSearchEvent = (searchKey: string) => {
    //TODO: add debounce time
    setLoadPage({ searchKey: searchKey, limit: LOAD_LIMIT });
  };

  let users = userState.userList.map(user => {
    //TODO: add property (user-category, email-verified) to user card
    //TODO: connect user image
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
      </div>
      <div>has More: {userCount > userState.userList.length ? "true" : "false"}</div>
      <div>user count: {userCount}</div>
      <div>list count: {userState.userList.length}</div>
      <div>is fetching: {isFetching ? "true" : "false"}</div>

      <Grid className={classes.itemContainer} container spacing={2}>
        {users}
      </Grid>

      <div>{isFetching && <CircularProgress color="secondary" />}</div>
    </div>
  );
};

export default UserListPage;