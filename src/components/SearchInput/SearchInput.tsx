import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
  className: string;
  onChange: () => void;
  placeholder: string;
}

const SearchInput = ({ className, onChange, placeholder }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input
        className={classes.input}
        disableUnderline
        onChange={onChange}
        placeholder={placeholder}
      />
    </Paper>
  );
};

export default SearchInput;
