import React from "react";
import clsx from "clsx";
import { Avatar, IconButton, ListItem, Tooltip, Typography, Chip } from "@material-ui/core";
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  LocalBarRounded as LocalBarIcon,
  Eco as EcoIcon,
  BugReport as BugReportIcon
} from "@material-ui/icons";
import { Spacer } from "components";
import { useStyles } from "./styles";
import { ProductDTO } from "dto/product-dto";

type Props = {
  product: ProductDTO;
  onToggleFavorite: () => void;
};

const ProductListItem = ({ product, onToggleFavorite }: Props) => {
  const classes = useStyles();
  const isAlcoholFree = product.ingredientInfo.isAlcoholFree;
  const isHaveFlavor = product.ingredientInfo.isHaveFlavor;
  const isVegan = product.ingredientInfo.isVegan;
  const isVegetarian = product.ingredientInfo.isVegetarian;

  return (
    <ListItem divider className={classes.root}>
      <Tooltip title="Add to favs">
        <IconButton className={classes.favoriteButton} onClick={onToggleFavorite}>
          {product.isFavProduct ? (
            <StarIcon className={clsx(classes.starIcon, classes.starFilledIcon)} />
          ) : (
            <StarBorderIcon className={classes.starIcon} />
          )}
        </IconButton>
      </Tooltip>
      <div className={classes.details} onClick={() => console.log("TODO: open product")}>
        <Avatar className={classes.avatar} src={product.mainInfo.imagePath} />
        <div className={classes.content}>
          <Typography className={classes.name}>{product.mainInfo.name}</Typography>
          <Spacer />
          <div className={classes.labels}>
            {isAlcoholFree != null && (
              <Chip
                size="small"
                icon={<LocalBarIcon className={classes.labelIcon} />}
                label={isAlcoholFree ? "No Alchohol" : "Alcohol"}
                className={clsx(classes.label, [
                  isAlcoholFree ? classes.labelSuccess : classes.labelDanger
                ])}
              />
            )}

            {isHaveFlavor != null && (
              <Chip
                size="small"
                icon={<BugReportIcon className={classes.labelIcon} />}
                label={isHaveFlavor ? "Flavor" : "No Flavor"}
                className={clsx(classes.label, [
                  isHaveFlavor ? classes.labelDanger : classes.labelSuccess
                ])}
              />
            )}

            {isVegan && (
              <Chip
                size="small"
                icon={<EcoIcon className={classes.labelIcon} />}
                label="Vegan"
                className={(classes.label, classes.labelSuccess)}
              />
            )}

            {isVegetarian && (
              <Chip
                size="small"
                icon={<EcoIcon className={classes.labelIcon} />}
                label="Vegetarian"
                className={(classes.label, classes.labelSuccess)}
              />
            )}
          </div>
        </div>
      </div>
    </ListItem>
  );
};

export default ProductListItem;
