import React, { ReactChild, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

type Props = {
  children: ReactChild;
  dialogDescription?: string;
  cancelButtonName?: string;
  applyButtonName?: string;
  title?: string;
  show: boolean;
  onCancel?: () => void;
  onApply?: () => void;
};

const ModalDialog = ({
  children,
  dialogDescription,
  show,
  onCancel,
  onApply,
  cancelButtonName,
  applyButtonName,
  title
}: Props) => {
  const [open, setOpen] = React.useState(show);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <div>
      <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
        {!!title && <DialogTitle id="form-dialog-title">{title}</DialogTitle>}
        <DialogContent>
          {!!dialogDescription && <DialogContentText>{dialogDescription}</DialogContentText>}
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            {!!cancelButtonName ? cancelButtonName : "Cancel"}
          </Button>
          <Button onClick={onApply} color="primary">
            {!!applyButtonName ? applyButtonName : "OK"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalDialog;
