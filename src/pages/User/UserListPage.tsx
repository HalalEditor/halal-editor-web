import React from "react";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { SearchInput } from "../../components";
import UserCard from "./components/UserCard";
import TablePagination from "@material-ui/core/TablePagination";

const onChange = () => {
  console.log("UserListPage.tsx: onChange");
};

const UserListPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleUserClick = (id: number) => {
    history.push("/user/" + id);
  };

  let users = [];
  for (let i = 0; i < 10; i++) {
    users.push(
      <UserCard name="John Doe" email="john.doe@gmail.com" onClick={() => handleUserClick(i + 1)} />
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Typography variant="h3">User List</Typography>
        <span className={classes.spacer} />
        <SearchInput
          onChange={() => onChange}
          className={classes.searchInput}
          placeholder="Search user"
        />

        <Button color="primary" variant="contained">
          Add user
        </Button>
      </div>
      <div className={classes.row}>
        <div className={classes.content}>
          <Grid container spacing={2}>
            {users}
          </Grid>
        </div>
      </div>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={20}
          rowsPerPage={5}
          page={0}
          onChangePage={() => console.log("onChangePage")}
          onChangeRowsPerPage={() => console.log("onChangeRowsPerPage")}
        />
      </div>
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
