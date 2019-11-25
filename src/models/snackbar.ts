import {
  Info as InfoIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon
} from "@material-ui/icons";

export const SnackbarMessageVariantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

export type SnackbarInfo = {
  message: string;
  variant: keyof typeof SnackbarMessageVariantIcon;
  show: boolean;
};
