import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { useLocation } from "react-router";
import { publicRequest } from "../requestMethods";
import { useHistory } from "react-router"; 
import { clearCart } from "../store/actions/cart"; 

const Success = () => {
  //const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  //const data = location.state.stripeData;
  //const cart = location.state.cart;

  const currentUser = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const [orderId, setOrderId] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/", {});
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await publicRequest.post(
          "/orders",
          {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: cart.total,
            address: "",
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        clearCart(dispatch);
        setOrderId(res.data._id);
      } catch (err) { alert(err.message) }
    };    
    createOrder();
  }, [cart, currentUser, token, dispatch]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={handleClick}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
