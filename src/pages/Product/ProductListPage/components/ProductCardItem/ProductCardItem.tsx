import React from "react";
import { Card, CardHeader, IconButton, CardMedia, CardActions, Grid } from "@material-ui/core";
import { Favorite as FavoriteIcon, Share as ShareIcon } from "@material-ui/icons";
import { ProductDTO } from "dto/product-dto";
import { useStyles } from "./styles";

type Props = {
  product: ProductDTO;
  onToggleFavorite: () => void;
};

const ProductCardItem = ({ product, onToggleFavorite }: Props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.card}>
        <CardHeader
          title={product.mainInfo.name}
          onClick={() => {
            console.log(product);
          }}
        />
        <CardMedia
          className={classes.media}
          image={product.mainInfo.imagePath}
          title={product.mainInfo.name}
        />
        <CardActions disableSpacing>
          <IconButton
            onClick={onToggleFavorite}
            aria-label="add to favorites"
            color={product.isFavProduct ? "secondary" : "default"}
          >
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

export default ProductCardItem;
