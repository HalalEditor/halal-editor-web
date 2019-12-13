import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { debounce, Cancelable } from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "4px",
    alignItems: "center",
    padding: theme.spacing(0.5),
    display: "flex",
    flexBasis: 320
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.05px"
  }
}));

interface Props {
  className?: string;
  onChange: (value: string) => void;
  placeholder: string;
  debounceTime?: number;
}

const SearchInput = ({ className, onChange, placeholder, debounceTime }: Props) => {
  const classes = useStyles();
  let fireOnChange: ((() => void) & Cancelable) | undefined;

  const onInputChangeHandler = (event: any) => {
    if (!!event) {
      const value = event.target.value;

      if (!!fireOnChange) {
        fireOnChange.cancel();
      }
      fireOnChange = debounce(
        () => {
          onChange(value);
          fireOnChange = undefined;
        },
        !!debounceTime ? debounceTime : 500
      );

      fireOnChange();
    }
  };

  return (
    <Paper className={clsx(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input
        className={classes.input}
        disableUnderline
        onChange={onInputChangeHandler}
        placeholder={placeholder}
      />
    </Paper>
  );
};

export default SearchInput;
