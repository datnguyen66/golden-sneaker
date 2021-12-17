import { createSelector} from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;


export const cartTotalSelector = createSelector((cartItemsSelector),
    (cartItems) => cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, 0)
)