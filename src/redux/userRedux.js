import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    token:null,
    role:null,
    isAuthenticated: false,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.user.role;
      state.isAuthenticated = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.currentUser = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.isFetching = false;
      state.error = false;


    },
    userErrorClear: (state) => {
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure , logoutStart, userErrorClear} = userSlice.actions;
export default userSlice.reducer;
