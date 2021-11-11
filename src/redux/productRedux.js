import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    productStart: (state) => {
      state.isFetching = true;
    },
    productSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload.products;
    },
    productFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { productStart, productSuccess, productFailure , logoutStart, userErrorClear} = userSlice.actions;
export default userSlice.reducer;
