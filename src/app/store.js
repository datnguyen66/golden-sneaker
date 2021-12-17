import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../component/cart/CartSlice"

const rootReducer = {
    cart : cartReducer
}
const store = configureStore({
    reducer : rootReducer,
})
export default store;