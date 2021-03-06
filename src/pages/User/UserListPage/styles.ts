import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      marginTop: 20,
      marginBottom: 20
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
      // marginRight: theme.spacing(1)
    },
    toggleContainer: {
      margin: theme.spacing(0, 2),
      padding: theme.spacing(0)
    },
    toggleButtonText: {
      textTransform: "none"
    }
  })
);
