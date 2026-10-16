import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './features/homeSlice';
import watchlistCollectionReducer from "./features/watchlistCollectionSlice";
import cartCollectionReducer from "./features/cartCollectionSlice";

export const store = configureStore({
    reducer:{
        homeSlice: homeReducer,
        watchlistCollection: watchlistCollectionReducer,
        cartCollection: cartCollectionReducer
    }
})