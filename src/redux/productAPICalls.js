import {
  productFailure,
  productStart,
  productSuccess,
  logoutStart,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const product = async (dispatch, token, cat) => {
  dispatch(productStart());
  try {
    const res = await publicRequest.get(
      cat
        ? `/products?category=${cat}&val=${new Date().getTime()}`
        : `/products?val=${new Date().getTime()}`,
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
        },
      });
    dispatch(productSuccess({ token: res.data.token, user: res.data.data.user }));

  } catch (err) {
    dispatch(productFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
};
