import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Page, SearchInput, Toolbar } from "components";
import { useReduxContextValue } from "contexts/redux-context";
import ProductListItem from "./components/ProductListItem/ProductListItem";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import { ProductDTO } from "dto/product-dto";
import { useStyles } from "./styles";

const LOAD_LIMIT = 20;

const ProductListPage = () => {
  const classes = useStyles();
  const { services, store } = useReduxContextValue();
  const { productList } = store.productState;
  const { productService } = services;

  const { isFetching, setIsFetching } = useInfiniteScroll(loadMoreProduct);
  const [listCount, setListCount] = useState(0);

  // const [loadListConfig, setLoadListConfig] = useState<{ limit: number }>({ limit: LOAD_LIMIT });

  const [loadPage, setLoadPage] = useState<{
    limit: number;
    searchKey: string;
  }>({
    limit: LOAD_LIMIT,
    searchKey: ""
  });

  useEffect(
    () => {
      productService.getProductListCount().then(count => {
        setListCount(count);
      });

      return () => {
        productService.clearFavoriteProductList();
      };
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      productService
        .loadProductList({
          limit: loadPage.limit,
          searchingProductByID: loadPage.searchKey
        })
        .then(_ => {
          setIsFetching(false);
        });
    },
    // eslint-disable-next-line
    [loadPage]
  );

  function loadMoreProduct() {
    if (listCount > Object.keys(productList).length) {
      setLoadPage({ ...loadPage });
    } else {
      setIsFetching(false);
    }
  }

  const handleToggleFavorite = (product: ProductDTO) => {
    productService.toggleFavoriteStatus(product);
  };

  const handleSearchEvent = (searchKey: string) => {
    productService.clearProductList();
    setLoadPage({
      searchKey: searchKey,
      limit: LOAD_LIMIT
    });
  };

  const products = Object.values(productList).map(product => {
    return (
      <ProductListItem
        key={product._id}
        product={product}
        onToggleFavorite={() => handleToggleFavorite(product)}
      ></ProductListItem>
    );
  });

  return (
    <Page>
      <Toolbar>
        <Typography variant="h3">Product List</Typography>
        <span className={classes.spacer} />
        <SearchInput
          onChange={value => {
            handleSearchEvent(value);
          }}
          placeholder="Search product"
        />
      </Toolbar>
      <Grid className={classes.itemContainer} container spacing={3}>
        {products}
      </Grid>
    </Page>
  );
};

export default ProductListPage;
