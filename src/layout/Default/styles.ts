import { createStyles, fade, makeStyles, Theme } from "@material-ui/core/styles";
const drawerWidth = 240;
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: theme.zIndex.appBar - 1
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
  })
);
