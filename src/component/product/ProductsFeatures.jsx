import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Product from './Product';

const useStyle = makeStyles((theme) =>({
    root:{
        padding: theme.spacing(0,4,0,4),
    },
    nike:{
        width: '50px',
        margin : '12px 0px 12px 0px'
    },
    title:{
        fontSize: '20px',
        fontWeight: '700'
    },
    products:{
        height : '511px',
        width : '300px',
        overflow : 'hidden',
        
    },
    productlist:{
        overflow : 'auto',
        height : '100%',
        width : '300px',
        overflowX: 'hidden'
        
    },
}))


ProductsFeatures.propTypes = {
    data : PropTypes.array,
};
ProductsFeatures.defaultProps={
    data: [],
}
function ProductsFeatures({data}) {
    const classes = useStyle();
    return (
        <Box className={classes.root}>
            <img className={classes.nike} src="https://res.cloudinary.com/dnxk8kude/image/upload/v1639666993/nike_q0lriq.png" alt="" />
            <Box>
            <Typography className={classes.title} variant="button">Our Product</Typography>
            </Box>
            <Box className={classes.products}>
                <Grid container className={classes.productlist}>
                    {data.map((product) =>(
                        <Grid item key={product.id} >
                            <Product product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            
        </Box>
    );
}
export default ProductsFeatures;