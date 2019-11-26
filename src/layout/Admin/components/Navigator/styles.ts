import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const drawerWidth = 240;
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      },
      zIndex: theme.zIndex.appBar - 1
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#18202c"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    categoryHeader: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0)
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover,&:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.08)"
      },
      cursor: "pointer"
    },
    itemCategory: {
      backgroundColor: "#232f3e",
      boxShadow: "0 -1px 0 #404854 inset",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white
    },
    itemActiveItem: {
      color: "#4fc3f7"
    },
    itemPrimary: {
      fontSize: "inherit",
      fontWeight: "bold",
      marginBottom: 0
    },
    itemIcon: {
      minWidth: "auto",
      marginRight: theme.spacing(2),
      color: "rgba(255, 255, 255, 0.7)",
      "&:hover,&:focus": {
        backgroundColor: "rgba(255, 255, 255, 0.08)"
      },
      fontSize: 12
    },
    divider: {
      marginTop: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar
  })
);
