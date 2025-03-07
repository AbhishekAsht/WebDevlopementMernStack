import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./slice2"

const stores = configureStore({
    reducer: {
        slice2:CartReducer
    }
})

export default stores