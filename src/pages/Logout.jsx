import { logout } from "../redux/userAPICalls";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

const Logout = () => {
  console.log("logout");
  const dispatch = useDispatch();
  logout(dispatch);
  return <Redirect to="/" />;
};

export default Logout;
