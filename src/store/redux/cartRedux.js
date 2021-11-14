import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  products: [],
  quantity: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    cartClear: (state) => state = initialCart,
  },
});


export const { addProduct, cartClear } = cartSlice.actions;
export default cartSlice.reducer;
