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
    },
    email: {
      color: theme.palette.grey[500]
    },
    category: {
      color: theme.palette.grey[500]
    },
    content: {
      padding: theme.spacing(1)
    },
    itemGroup: {
      padding: theme.spacing(1),
      borderRadius: theme.spacing(0.2)
    },
    itemGroupIcon: {
      margin: theme.spacing(1)
    }
  })
);
