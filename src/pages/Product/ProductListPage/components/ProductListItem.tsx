import React from "react";
import { Product } from "../../../../models/product";
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardActions,
  Grid,
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
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card
        className={classes.card}
        onClick={() => {
          console.log(product);
        }}
      >
        <CardHeader title={product.mainInfo.name} />
        <CardMedia
          className={classes.media}
          image={product.mainInfo.imagePath}
          title={product.mainInfo.name}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {},
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
      backgroundSize: "auto"
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
