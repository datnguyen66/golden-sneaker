import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import ProductsFeatures from "./product/ProductsFeatures";
import ProductCart from "./cart/ProductCart";
import { CartProvider } from "react-use-cart";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 45, 0, 45),
  },
  left: {
    borderRadius: "30px",
    height: "600px",
  },
  right: {
    borderRadius: "30px",
  },
  leftContent: {},
}));
AllProducts.propTypes = {};

function AllProducts(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductList(data);
      });
  }, []);
  return (
    <Box className={classes.root}>
      <CartProvider>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                className={classes.left}
                classes={{ root: classes.cardBorderLeft }}
              >
                <ProductsFeatures data={productList} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} className={classes.right}>
                <ProductCart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </CartProvider>
    </Box>
  );
}

export default AllProducts;
