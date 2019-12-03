import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: 24,
      height: 24,
      borderWidth: 3
    }
  })
);
