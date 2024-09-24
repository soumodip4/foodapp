import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import {productSlice} from"./CrudSlice"

export const store = configureStore({
    reducer:{
        contents:authSlice.reducer,
        product:productSlice.reducer
    }
})