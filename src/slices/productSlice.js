import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProduct = createAsyncThunk(
  "/products/fetchAllProduct",
  async () => {
    const response = await axios.get("http://localhost:9000/products");
    return response.data;
  }
);

const initialState = {
  products: [],
  filteredProduct: [],
  loading: true,
  error: false,
  filters: {
    colors: [],
    price: 80000000,
  },
};


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { type, payload } = action.payload;

      state.filters.colors = type === "FILTER_COLOR" ? payload : [];
      state.filters.price = type === "FILTER_PRICE_RANGE" ? Number(payload) : 80000000;

      console.log(Number(state.filters.price) !== 80000000, !!state.filters.colors.length)
      if (Number(state.filters.price) !== 80000000 || state.filters.colors.length) {
        console.log("in koni run mishe")
        const filteredProduct = state.filteredProduct.filter((product) => {
          switch (type) {
            case "FILTER_COLOR":
              console.log("log here");
              const colors = payload;
              if (colors.length === 0) {
                return true;
              } else {
                return product.colors.some((color) => colors.includes(color));
              }
            case "FILTER_PRICE_RANGE":
              const price = Number(payload);
              return product.price <= price;
          }
        });
      } else {
        const filteredProduct = state.products.filter((product) => {
          console.log("in koni dige ham run mishe");
          switch (type) {
            case "FILTER_COLOR":
              console.log("log here");
              const colors = payload;
              if (colors.length === 0) {
                return true;
              } else {
                return product.colors.some((color) => colors.includes(color));
              }
            case "FILTER_PRICE_RANGE":
              const price = Number(payload);
              return product.price <= price;
          }
        });
        state.filteredProduct = filteredProduct;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state, _) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.products = action.payload;
      state.filteredProduct = action.payload;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { setFilter } = productSlice.actions;

export default productSlice.reducer;
