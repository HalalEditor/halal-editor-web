import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { indigo, yellow } from "@material-ui/core/colors";
export const useStyles = makeStyles((theme: Theme) =>
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
