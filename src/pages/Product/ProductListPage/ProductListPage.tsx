import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles, Grid } from "@material-ui/core";
import { useReduxContextValue } from "../../../contexts/redux-context";
import ProductListItem from "./components/ProductListItem";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

const LOAD_LIMIT = 20;

const ProductListPage = () => {
  const classes = useStyles();
  const { services, store } = useReduxContextValue();
  const { productList } = store.productState;
  const { productService } = services;

  const { isFetching, setIsFetching } = useInfiniteScroll(loadMoreProduct);
  const [listCount, setListCount] = useState(0);

  const [loadListConfig, setLoadListConfig] = useState<{ limit: number }>({ limit: LOAD_LIMIT });

  useEffect(
    () => {
      productService.getProductListCount().then(count => {
        setListCount(count);
      });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      productService
        .loadProductList({
          limit: loadListConfig.limit
        })
        .then(_ => {
          setIsFetching(false);
        });
    },
    // eslint-disable-next-line
    [loadListConfig]
  );

  function loadMoreProduct() {
    setLoadListConfig({ ...loadListConfig });
  }

  const products = productList.map(product => {
    return <ProductListItem key={product._id} product={product}></ProductListItem>;
  });

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Grid className={classes.itemContainer} container spacing={2}>
          {products}
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    itemContainer: {
      marginTop: 20,
      marginBottom: 20
    },
    spacer: {
      flexGrow: 1
    },
    row: {
      display: "flex",
      alignItems: "center"
    },

    toggleContainer: {
      margin: theme.spacing(0, 2),
      padding: theme.spacing(0)
    },
    toggleButtonText: {
      textTransform: "none"
    }
  })
);

export default ProductListPage;
