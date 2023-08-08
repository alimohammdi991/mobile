import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchAllProduct } from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

store.dispatch(fetchAllProduct());
