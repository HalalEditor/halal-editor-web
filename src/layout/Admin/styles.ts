import { createStyles, fade, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    shiftContent: {
      paddingLeft: 240
    },
    content: {
      height: "100%",
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    drawer: {
      width: 240
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
    nav: {
      marginBottom: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar
  })
);
