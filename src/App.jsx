import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import ProductDetails from "./pages/ProductDetails";
import ShopCart from "./pages/ShopCart";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/shop-cart" element={<ShopCart />} />
    </Routes>
  );
}

export default App;
