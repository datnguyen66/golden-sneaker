import { Box, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, removeFormCart } from './CartSlice';
import { cartTotalSelector } from './selectors';

const useStyle = makeStyles((theme) =>({
    root:{   
        padding: theme.spacing(0,4,0,4),
        height : '600px'
    },
    nike:{
        width: '50px',
        margin : '12px 0px 12px 0px'
    },
    content:{
        justifyContent : 'space-between',
        display : 'flex'
    },
    title:{
        fontSize: '20px',
        fontWeight: '700'
    },
    totalprice:{
        fontSize: '20px',
        fontWeight: '700'
    },
    cart:{
        height : '511px',
    },
    boxCart:{
        padding: '20px 0px 20px 0px',
        display : 'flex',

    },
    cartImg:{
        backgroundColor: 'red',
        width : '120px',
        height : '124px',
        backgroundColor: product => product.color,
        borderRadius : '30px',
    },
    cartInfo:{
        flex : '1',
        paddingTop : '17px'
    },
    pictures:{
        transform: 'rotate(-24deg)',
        marginLeft : '-16px',
        filter: 'drop-shadow(0 30px 20px rgba(0,0,0,.2))'
    },
    textname:{
        fontSize: '13px',
        fontWeight : '700'
    },
    textprice:{
        fontSize : '19px',
        fontWeight : '700'
    },
    quantity:{
        padding : '0px 8px 0px 8px',
        fontSize: '13px'
    },
    boxquantity:{
        display:'flex',
        alignItems: 'center',
    },
    iconn:{
        width : '12px',
        height : '12px',
        cursor : 'pionter',
        
    },
    buttonicon:{
        padding : '0',
        height : '28px',
        width : '28px',
        backgroundColor : '#eee',
        borderRadius : '100%',
    },
    deleteicon:{
        width : '18px',
        height : '19px',
        borderRadius : '100px'
    },
    buttonicondlt:{
        padding : '0',
        height : '28px',
        width : '28px',
        backgroundColor : '#f6c90e',
        borderRadius : '100%',
    },
    cartContent:{
        height : '511px',
    },
    empty:{
        fontSize: '13px',
        paddingTop : '25px'
    }
}))

ProductCart.propTypes = {

};

function ProductCart() {
    const classes = useStyle();
    const cart = useSelector(state => state.cart)
    const totalCart = useSelector(cartTotalSelector)
    const dispath = useDispatch();
    const handleDecreaseCart = (cartItem) =>{
        dispath(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) =>{
        dispath(addToCart(cartItem))
    }
    const handleRemoveFormCart= (cartItem) =>{
        dispath(removeFormCart(cartItem))
    }
    console.log(cart.cartItem);
    console.log(cart);
    return (
        <Box className={classes.root}>
            <img className={classes.nike} src="https://res.cloudinary.com/dnxk8kude/image/upload/v1639666993/nike_q0lriq.png" alt="" />
            <Grid container className={classes.content}>
                <Grid item >
                    <Typography className={classes.title} variant="button">Your Cart</Typography>
                </Grid>
                <Grid item>
                <Typography className={classes.totalprice} variant="button">{new Intl.NumberFormat("en-HOSSDDG",{
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2,
                            }).format(totalCart)}</Typography>
                </Grid>
            </Grid>
            {cart.cartItems.length === 0 && <Typography className={classes.empty}>Your cart is empty.</Typography>}
            <Box className={classes.cart}>
                <Box className={classes.cartContent}>
                {cart.cartItems?.map(cartItem =>( 
                    <Grid container className={classes.boxCart} key={cartItem.id}>
                        <Grid item className={classes.cartImg}>
                            <img className={classes.pictures} src={cartItem.product.image} width="100%" height="100%"/>
                        </Grid>
                        <Grid item className={classes.cartInfo}>
                            <Typography className={classes.textname}>{cartItem.product.name}</Typography>
                            <Typography variant='button' className={classes.textprice}>
                            {new Intl.NumberFormat("en-HOSSDDG",{
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2,
                            }).format(cartItem.product.price)}
                            </Typography>
                            <Box className={classes.boxquantity}>
                                    <IconButton className={classes.buttonicon} onClick={() => handleDecreaseCart(cartItem)} >
                                        <RemoveIcon className={classes.iconn} />
                                    </IconButton>
                                        <Typography className={classes.quantity}>{cartItem.quantity}</Typography>
                                    <IconButton className={classes.buttonicon} onClick={() => handleIncreaseCart(cartItem)}>    
                                        <AddIcon className={classes.iconn} />
                                    </IconButton>
                                <Box pl='60px'>
                                    <IconButton className={classes.buttonicondlt} onClick={()=> handleRemoveFormCart(cartItem)}>
                                        <DeleteIcon className={classes.deleteicon}/>
                                    </IconButton>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                ))}
                </Box>
                
            </Box>
            {/* <Box className={classes.cart}>
                <Grid container className={classes.boxCart}>
                    <Grid item className={classes.cartImg}>anh </Grid>
                    <Grid item className={classes.cartInfo}>{cart.name}</Grid>
                </Grid>
            </Box> */}
        </Box>
    );  
}

export default ProductCart;