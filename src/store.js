import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./features/collection/collectionSlice"
import userReducer from "./features/user/userSlice"
import checkoutReducer from "./features/checkout/checkoutSlice"

export const store=configureStore({

    reducer:{
        collectionState:collectionReducer,
        userState: userReducer,
        checkoutState: checkoutReducer,
    }
})