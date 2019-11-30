import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
// import { Menu as MenuIcon } from "@material-ui/icons";
import { SearchInput } from "../../components";
import UserCard from "./components/UserCard";
import TablePagination from "@material-ui/core/TablePagination";

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
      alignItems: "center",
      marginTop: theme.spacing(1)
    },
    searchInput: {
      marginRight: theme.spacing(1)
    }
  })
);

const onChange = () => {
  console.log("UserListPage.tsx: onChange");
};

const UserListPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <SearchInput
          onChange={() => onChange}
          className={classes.searchInput}
          placeholder="Search user"
        />
        <span className={classes.spacer} />
        <Button color="primary" variant="contained">
          Add user
        </Button>
      </div>
      <div className={classes.row}>
        <div className={classes.content}>
          <Grid container spacing={2}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </Grid>
        </div>
      </div>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={20}
          rowsPerPage={10}
          page={0}
          onChangePage={() => console.log("onChangePage")}
          onChangeRowsPerPage={() => console.log("onChangeRowsPerPage")}
        />
      </div>
    </div>
  );
};

export default UserListPage;
