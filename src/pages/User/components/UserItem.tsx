import React from "react";
import {
  Avatar,
  Card,
  Chip,
  IconButton,
  CardHeader,
  Grid,
  Typography,
  CardContent
} from "@material-ui/core";
import { Group as GroupIcon, MoreVert as MoreVertIcon } from "@material-ui/icons";
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
          avatar={
            user.photoURL ? (
              <Avatar className={classes.avatar} src={user.photoURL} />
            ) : (
              <Avatar className={classes.avatar}>{user.username.charAt(0).toUpperCase()}</Avatar>
            )
          }
          title={<Typography className={classes.title}>{user.username}</Typography>}
          subheader={
            <div>
              <Typography className={classes.email}>{user.email}</Typography>
              <Typography className={classes.category}>{user.userCategory}</Typography>
            </div>
          }
        />
      </Card>
    </Grid>
  );
};

export default UserItem;
