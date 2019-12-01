import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
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
