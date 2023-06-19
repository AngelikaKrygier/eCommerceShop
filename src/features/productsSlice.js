import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    state: "loading",
  },
  reducers: {
    productsLoading: () => ({
      state: "loading",
    }),
    productsSuccess: (_, { payload: products }) => ({
      state: "success",
      products,
    }),
    productsError: () => ({
      state: "error",
    }),
  },
});

export const { productsLoading, productsSuccess, productsError } =
  productsSlice.actions;
export const selectProductsSliceState = (state) => state.products;
export const selectProducts = (state) =>
  selectProductsSliceState(state).products;

export const selectDresses = selectProducts.dresses;

export default productsSlice.reducer;
