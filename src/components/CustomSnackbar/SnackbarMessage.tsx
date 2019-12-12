import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, SnackbarContent, IconButton } from "@material-ui/core";
import { green, amber } from "@material-ui/core/colors";
import clsx from "clsx";

import { Close as CloseIcon } from "@material-ui/icons";
import { SnackbarMessageVariantIcon } from "models/snackbar";

type Props = {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: keyof typeof SnackbarMessageVariantIcon;
};

const SnackbarMessage = (props: Props) => {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = SnackbarMessageVariantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

export default SnackbarMessage;
