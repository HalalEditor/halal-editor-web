import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { validatePassword } from "../../services/helper";

type PropType = {
  onChange: (data: { value: string; isDirty: boolean; isValid: boolean }) => void;
};

const PasswordInput = ({ onChange }: PropType) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (event: any) => {
    const value = event.target.value;

    const isValid = validatePassword(value);
    console.log(isValid);

    if (isValid) {
      setErrorMessage("");
    } else {
      setErrorMessage("must be more than six character");
    }
    onChange({ value: value, isDirty: !!value, isValid: isValid });
  };

  return !!errorMessage ? (
    <TextField
      error
      id="outlined-error-helper-text"
      label="Password"
      name="password"
      autoComplete="current-password"
      type="password"
      required
      fullWidth
      helperText={errorMessage}
      margin="normal"
      variant="outlined"
      onChange={handleOnChange}
    />
  ) : (
    <TextField
      id="password"
      label="Password"
      name="password"
      autoComplete="current-password"
      type="password"
      required
      fullWidth
      margin="normal"
      variant="outlined"
      onChange={handleOnChange}
    />
  );
};

export default PasswordInput;
