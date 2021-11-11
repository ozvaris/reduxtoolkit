import { userErrorClear} from "../redux/userRedux";

export const clearUserErrors = async (dispatch) => {
  dispatch(userErrorClear());
};


