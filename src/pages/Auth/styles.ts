import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 64
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    textAlign: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  },
  googleButton: {
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.grey[600],
    textTransform: "none",
    // justifyContent: "left",
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.grey[700]
    }
  },
  googleButtonIcon: {
    width: 24,
    height: 24,
    marginRight: 16
  }
}));
