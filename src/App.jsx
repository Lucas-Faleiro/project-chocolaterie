import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import ProductDetails from "./pages/ProductDetails";
import ShopCart from "./pages/ShopCart";
import ShopCartProvider from "./provider/ShopCartProvider";
import ToastProvider from "./provider/ToastProvider";
import ProductsProvider from "./provider/ProductsProvider";

function App() {
  return (
    <ToastProvider>
      <ProductsProvider>
        <ShopCartProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/shop-cart" element={<ShopCart />} />
          </Routes>
        </ShopCartProvider>
      </ProductsProvider>
    </ToastProvider>
  );
}

export default App;
