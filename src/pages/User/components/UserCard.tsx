import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { indigo, yellow } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>A</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography className={classes.title}>John Doe</Typography>}
          subheader="john.doe@gmail.com"
        />
      </Card>
    </Grid>
  );
}
