import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { indigo, yellow } from "@material-ui/core/colors";
import { User } from "../../../models/user";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      "&:hover": {
        backgroundColor: yellow[50],
        cursor: "pointer"
      }
    },
    avatar: {
      backgroundColor: indigo[300]
    },
    title: {
      fontWeight: 500
    }
  })
);

interface Props {
  user: User;
  onClick: () => void;
}

const UserCard = ({ user, onClick }: Props) => {
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

export default UserCard;
