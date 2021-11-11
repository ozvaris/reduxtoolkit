import { cartClear} from "../redux/cartRedux";

export const clearCart = async (dispatch) => {
  dispatch(cartClear());
};


