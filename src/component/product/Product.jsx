import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/CartSlice';


const useStyle = makeStyles((theme) =>({
    root:{
      paddingBottom : '40px',
      paddingTop : '40px'
    },
    pic:{

    },
    footerProduct:{
        justifyContent: 'space-between',
        display: 'flex',
        
    },
    text:{
        fontSize : '16px',
        fontWeight: '700',
    },
    price:{
        fontSize : '16px',
        fontWeight: '700',
        display : 'flex',
        alignItems: 'center',
    },
    textName:{
        margin : '26px 0px 20px 0px',
        
        fontSize: '16x'
    },
    textDescription:{
        marginBottom : '20px',
    },
    textAddtocart:{
        height : '46px',
        fontSize : '16px',
        cursor: 'pointer',
        fontWeight: '700',
        backgroundColor : '#f6c90e',
        padding : '16px 20px 16px 20px',
        boxSizing : 'border-box',
        display : 'flex',
        borderRadius : '100px',
        alignItems: 'center',        
    },
    backgroundBox:{
        backgroundColor: product => product.color,
        borderRadius : '30px',
    },
    pictures:{
        transform: 'rotate(-24deg)',
        marginLeft : '-16px',
        filter: 'drop-shadow(0 30px 20px rgba(0,0,0,.2))'
    }
}))


Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const classes = useStyle(product);
    const dispatch = useDispatch();
    const handleAddToCart = () =>{        
        const action = addToCart({
            id: product.id,
            product,
            quantity : 1,
        })
        
        dispatch(action)
    }
    return (
        <Box className={classes.root} >
            <Box minHeight="215px" className={classes.backgroundBox}>
                <img className={classes.pictures} src={product.image} alt="" width="100%"/>
            </Box>
            <Box className={classes.textName}>
                <Typography className={classes.text} variant='button'>{product.name}</Typography>
            </Box>
            <Box className={classes.textDescription}>
                <Typography variant='caption'>{product.description}</Typography>
            </Box>
            <Box className={classes.footerProduct}>
                <Typography className={classes.price} variant='button'>
                    {new Intl.NumberFormat("en-HOSSDDG",{
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                    }).format(product.price)}
                </Typography>
                <Button className={classes.textAddtocart}
                onClick={() =>handleAddToCart(product)}
                >ADD TO CART</Button>
            </Box>
        </Box>
    );
}

export default Product;