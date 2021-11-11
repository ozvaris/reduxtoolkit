import { logout } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  logout(dispatch);
  return (<Redirect to='/' />)
  
};

export default Logout;
