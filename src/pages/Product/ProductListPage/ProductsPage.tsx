import React, { useEffect, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import { Page, SearchInput, Toolbar } from "components";
import { useReduxContextValue } from "contexts/redux-context";
import ProductCardItem from "./components/ProductCardItem/ProductCardItem";
import ProductListItem from "./components/ProductListItem/ProductListItem";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import { ProductDTO } from "dto/product-dto";
import { useStyles } from "./styles";

import { ViewList as ViewListIcon, ViewModule as ViewModuleIcon } from "@material-ui/icons";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const LOAD_LIMIT = 20;

const ProductsPage = () => {
  const classes = useStyles();
  const { services, store } = useReduxContextValue();
  const { productList } = store.productState;
  const { productService } = services;

  const { isFetching, setIsFetching } = useInfiniteScroll(loadMoreProduct);
  const [listCount, setListCount] = useState(0);

  const [viewType, setViewType] = useState("list");

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
    return viewType === "list" ? (
      <ProductListItem
        key={product._id}
        product={product}
        onToggleFavorite={() => handleToggleFavorite(product)}
      ></ProductListItem>
    ) : (
      <ProductCardItem
        key={product._id}
        product={product}
        onToggleFavorite={() => handleToggleFavorite(product)}
      ></ProductCardItem>
    );
  });

  return (
    <Page>
      <Toolbar>
        <Typography variant="h3">Product List</Typography>
        <span className={classes.spacer} />
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            size="small"
            value={viewType}
            exclusive
            onChange={() => setViewType(viewType === "list" ? "card" : "list")}
          >
            <ToggleButton value="list" aria-label="View List">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="card" aria-label="View Module">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
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
      {isFetching && <CircularProgress color="secondary" />}
    </Page>
  );
};

export default ProductsPage;
