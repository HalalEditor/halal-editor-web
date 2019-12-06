import React from "react";
import { Product } from "../../../../models/product";
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardActions,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { red } from "@material-ui/core/colors";

type Props = {
  product: Product;
};

const ProductListItem = ({ product }: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={product.name} />
      <CardMedia className={classes.media} image={product.imagePath} title={product.name} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export default ProductListItem;
