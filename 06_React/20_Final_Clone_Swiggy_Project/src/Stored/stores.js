import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer"

export const store = configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})