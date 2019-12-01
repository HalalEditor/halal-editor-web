import React from "react";
import { Avatar, Card, CardHeader, Grid, Typography } from "@material-ui/core";
import { User } from "../../../models/user";
import { useStyles } from "./styles";

interface Props {
  user: User;
  onClick: () => void;
}

const UserItem = ({ user, onClick }: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.card} onClick={() => onClick()}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>A</Avatar>}
          title={<Typography className={classes.title}>{user.username}</Typography>}
          subheader={user.email}
        />
      </Card>
    </Grid>
  );
};

export default UserItem;
