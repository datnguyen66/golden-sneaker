import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        cartItems:[],
    },
    reducers:{
        addToCart(state, action){
            const newItem = action.payload;
            const index = state.cartItems.findIndex(x => x.id === newItem.id)
            if(index>=0){
                state.cartItems[index].quantity += 1;
            }else{
                state.cartItems.push(newItem)
            }
        },
        setQuantity(state, action){
            const {id, quantity} = action.payload;
            const index = state.cartItems.findIndex(x => x.id === id)
            if(index>=0){
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFormCart(state, action){
            // const removeCart= action.payload;
            // state.cartItems = state.cartItems.filters(x => x.id !== removeCart)
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].quantity >1) {
                state.cartItems[itemIndex].quantity -= 1;

            } else if(state.cartItems[itemIndex].quantity === 1){
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;
            }
        },
        // getTotalCart(state, action){
        //     let{total, quantity} = state.cartItems.reduce(
        //         (cartTotal, cartItem) =>{
        //         const {price, cartQuantity} = cartItem;
        //         const itemTotal = price * cartQuantity;

        //         cartTotal.total += itemTotal;
        //         cartTotal.quantity += cartQuantity;

        //         return cartTotal;
        //     },{
        //         total : 0,
        //         quantity : 0,

        //     })
        // }

    }
});

const {actions, reducer} = cartSlice;
export const {addToCart, setQuantity, removeFormCart, decreaseCart, getTotalCart} = actions;
export default reducer;