import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = false;
      state.currentUser = false;
    },
    userErrorClear: (state) => {
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure , logoutStart, userErrorClear} = userSlice.actions;
export default userSlice.reducer;
