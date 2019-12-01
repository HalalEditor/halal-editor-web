import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

type Props = {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#ededed"
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

const Toolbar = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>{props.children}</Grid>
    </div>
  );
};

export default Toolbar;
