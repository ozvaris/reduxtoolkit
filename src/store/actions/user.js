import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  userErrorClear,
} from "../redux/userRedux";
import { publicRequest } from "../../requestMethods";

export const clearUserErrors = async (dispatch) => {
  dispatch(userErrorClear());
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("users/login", user);
    dispatch(loginSuccess({ token: res.data.token, user: res.data.data.user }));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
};



