import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    categoryHeader: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0)
    },
    listContainer: {
      padding: 8
    },
    categoryHeaderPrimary: {
      color: colors.grey[500],
      fontSize: "0.875rem",
      boxSizing: "border-box",
      listStyle: "none",
      fontWeight: 500
    },
    item: {
      color: colors.blueGrey[800],
      padding: "2px 8px",
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "none",
      justifyContent: "flex-start"
    },
    button: {
      color: colors.blueGrey[800],
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
      width: "100%",
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      // color: theme.palette.icon,
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(1),
      minWidth: 20
    },
    itemText: {
      color: colors.blueGrey[800],
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "none",
      justifyContent: "flex-start"
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      "& $icon": {
        color: theme.palette.primary.main
      }
    },
    divider: {
      marginTop: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar
  })
);
