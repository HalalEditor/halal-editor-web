import React, { useState, useEffect } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import { SearchInput } from "../../../components";
import UserItem from "../components/UserItem";
import { useReduxContextValue } from "../../../contexts/redux-context";
import { useStyles } from "./styles";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { UserCategory } from "../../../models/user";

const LOAD_LIMIT = 20;

const UserListPage = () => {
  type SelectedUserCategoryType = UserCategory | "all";
  const classes = useStyles();
  const { store, services } = useReduxContextValue();
  const { userList } = store.userState;
  const [userCount, setUserCount] = useState({ all: 0, admin: 0, editor: 0 });
  const { isFetching, setIsFetching } = useInfiniteScroll(loadMoreUser);

  const [loadPage, setLoadPage] = useState<{
    limit: number;
    searchKey: string;
    selectedUserCategory: SelectedUserCategoryType;
  }>({
    limit: LOAD_LIMIT,
    searchKey: "",
    selectedUserCategory: "all"
  });

  const { userService } = services;
  const { userState } = store;

  useEffect(
    () => {
      Promise.all([
        userService.getUserCount(),
        userService.getUserCount("admin"),
        userService.getUserCount("editor")
      ]).then(res => {
        setUserCount({ all: res[0], admin: res[1], editor: res[2] });
      });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      const lastLoadUserId = userList.length > 0 ? userList[userList.length - 1]._id : undefined;

      userService
        .loadUserList({
          limit: loadPage.limit,
          lastUserId: lastLoadUserId,
          searchingMail: loadPage.searchKey,
          selectedUserCategory:
            loadPage.selectedUserCategory === "all" ? undefined : loadPage.selectedUserCategory
        })
        .then(_ => {
          setIsFetching(false);
        });
    },
    // eslint-disable-next-line
    [loadPage]
  );

  function loadMoreUser() {
    if (loadPage.selectedUserCategory !== "root" && loadPage.selectedUserCategory !== "normal") {
      let selectedGroupUserCount = userCount[loadPage.selectedUserCategory];
      if (selectedGroupUserCount > userState.userList.length) {
        setLoadPage({ ...loadPage });
      } else {
        setIsFetching(false);
      }
    }
  }

  const handleSearchEvent = (searchKey: string) => {
    userService.clearUserList();
    setLoadPage({
      searchKey: searchKey,
      limit: LOAD_LIMIT,
      selectedUserCategory: loadPage.selectedUserCategory
    });
  };

  let users = userState.userList.map(user => {
    // TODO: add property (user-category, email-verified) to user card
    return <UserItem key={user._id} user={user} onClick={() => console.log(user._id)} />;
  });
  for (let i = 0; i < 10; i++) {
    users.push();
  }

  const handleSelectedUserCategory = (
    event: React.MouseEvent<HTMLElement>,
    selectedUserCategory: SelectedUserCategoryType
  ) => {
    console.log(selectedUserCategory);
    userService.clearUserList();
    setLoadPage({ ...loadPage, selectedUserCategory: selectedUserCategory });
  };

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Typography variant="h3">User List</Typography>
        <span className={classes.spacer} />
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            size="small"
            value={loadPage.selectedUserCategory}
            exclusive
            onChange={handleSelectedUserCategory}
          >
            <ToggleButton value="all" aria-label="All Users">
              <span className={classes.toggleButtonText}>All ({userCount.all})</span>
            </ToggleButton>
            <ToggleButton value="admin" aria-label="Admins">
              <span className={classes.toggleButtonText}>Admins ({userCount.admin})</span>
            </ToggleButton>
            <ToggleButton value="editor" aria-label="Editors">
              <span className={classes.toggleButtonText}>Editors ({userCount.editor})</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <SearchInput
          onChange={value => {
            handleSearchEvent(value);
          }}
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>

      <Grid className={classes.itemContainer} container spacing={2}>
        {users}
      </Grid>

      {isFetching && <CircularProgress color="secondary" />}
    </div>
  );
};

export default UserListPage;
