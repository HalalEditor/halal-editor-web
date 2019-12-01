import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { validatePassword } from "../../../services/helper";

type PropType = {
  isMatchInput: boolean;
  matchPassword?: string;
  onChange: (data: { value: string; isDirty: boolean; isValid: boolean }) => void;
};

const PasswordInput = ({ onChange, isMatchInput, matchPassword }: PropType) => {
  const [errorMessage, setErrorMessage] = useState("");
  const label = isMatchInput ? "Re-Password" : "Password";

  const handleOnChange = (event: any) => {
    const value = event.target.value;
    const isValid = isMatchInput ? value === matchPassword : validatePassword(value);

    if (isValid) {
      setErrorMessage("");
    } else {
      setErrorMessage(isMatchInput ? "password not matched" : "must be more than six character");
    }
    onChange({ value: value, isDirty: !!value, isValid: isValid });
  };

  return !!errorMessage ? (
    <TextField
      error
      id="outlined-error-helper-text"
      label={label}
      name={isMatchInput ? "re-password" : "password"}
      autoComplete={isMatchInput ? "" : "current-password"}
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
      id={isMatchInput ? "re-password" : "password"}
      label={label}
      name={isMatchInput ? "re-password" : "password"}
      autoComplete={isMatchInput ? "" : "current-password"}
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
