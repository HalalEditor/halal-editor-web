import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey, amber, red, green } from "@material-ui/core/colors";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      paddingLeft: 8,
      paddingRight: 8,
      "&:hover": {
        backgroundColor: grey[50]
      }
    },
    new: {
      position: "relative",
      "&:before": {
        content: '" "',
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        width: 4,
        backgroundColor: theme.palette.error.main
      },
      "& $name, & $subject": {
        fontWeight: theme.typography.fontWeightBold
      }
    },
    selected: {
      backgroundColor: grey[50]
    },
    checkbox: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    favoriteButton: {
      position: "absolute",
      right: 0,
      top: -5
      // marginRight: theme.spacing(1),
      // [theme.breakpoints.down("sm")]: {
      //   marginRight: theme.spacing(1)
      // }
    },
    starIcon: {
      cursor: "pointer"
    },
    starFilledIcon: {
      color: amber[400]
    },
    details: {
      minWidth: 1,
      display: "flex",
      flexGrow: 1
    },
    thumbnail: {
      width: 100,
      minWidth: 100,
      height: 60,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 5,
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(1)
      }
    },
    name: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      flexGrow: 1,
      display: "flex"
      // [theme.breakpoints.up("md")]: {
      //   minWidth: 180,
      //   flexBasis: 180
      // }
    },
    content: {
      display: "block",
      minWidth: 1,
      [theme.breakpoints.up("md")]: {
        // alignItems: "center",
        flexGrow: 1
      }
    },
    subject: {
      maxWidth: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    separator: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        // display: "none"
      }
    },
    message: {
      maxWidth: 800,
      flexGrow: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginRight: "auto",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    labels: {
      display: "flex",
      flexGrow: 1,
      // marginRight: theme.spacing(2),
      "& > * + *": {},
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(0)
      }
    },
    label: {
      fontSize: 11,
      fontWeight: 500,
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(0.5),
      height: 16
    },
    labelIcon: {
      width: 16,
      height: 16,
      border: 1,
      borderRadius: "50%",
      padding: theme.spacing(0.1),
      background: "#fff",
      marginLeft: 0
    },

    labelDanger: {
      backgroundColor: red[300],
      color: grey[50],
      "& > $labelIcon": {
        color: red[300]
      }
    },
    labelSuccess: {
      backgroundColor: green[300],
      color: grey[50],
      "& > $labelIcon": {
        color: green[300]
      }
    }
  })
);
