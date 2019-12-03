import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
const dividerWidth = 240;
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: dividerWidth,
      position: "relative",
      padding: theme.spacing(1)
    },
    divider: {
      flex: 1,
      backgroundColor: grey[300]
    },
    text: {
      color: grey[500],
      fontWeight: 500,
      position: "absolute",
      top: 0 - theme.spacing(0.2),
      left: dividerWidth / 2 - theme.spacing(2.5),
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(2),
      paddingTop: 0,
      borderRadius: theme.spacing(5)
    }
  })
);
