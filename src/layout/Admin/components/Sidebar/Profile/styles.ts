import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "fit-content",
      paddingTop: 20
    },
    avatar: {
      width: 60,
      height: 60
    },
    name: {
      marginTop: theme.spacing(1)
    }
  })
);
