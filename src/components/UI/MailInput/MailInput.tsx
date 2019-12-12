import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { validateEmail } from "services/helper";

type PropType = {
  defaultValue?: string;
  onChange: (data: { value: string; isDirty: boolean; isValid: boolean }) => void;
};

const MailInput = ({ onChange, defaultValue }: PropType) => {
  const [errorMessage, setErrorMessage] = useState(
    !!defaultValue && !validateEmail(defaultValue) ? "invalid mail" : ""
  );

  const handleOnChange = (event: any) => {
    const value = event.target.value;
    const isValid = validateEmail(value);

    if (isValid) {
      setErrorMessage("");
    } else {
      setErrorMessage("invalid email");
    }
    onChange({ value: value, isDirty: !!value, isValid: isValid });
  };

  return !!errorMessage ? (
    <TextField
      error
      id="outlined-error-helper-text"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      required
      fullWidth
      defaultValue={defaultValue}
      helperText={errorMessage}
      margin="normal"
      variant="outlined"
      onChange={handleOnChange}
    />
  ) : (
    <TextField
      id="outlined"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      required
      fullWidth
      defaultValue={defaultValue}
      margin="normal"
      variant="outlined"
      onChange={handleOnChange}
    />
  );
};

export default MailInput;
