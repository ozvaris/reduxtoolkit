import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route path="/register">
          {isAuthenticated ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
