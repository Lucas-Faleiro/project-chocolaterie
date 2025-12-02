import { Link } from "react-router";
import Icon from "../custom/Icon";
import ShopCartContext from "../../context/ShopCartContext";
import { useContext, useEffect, useState } from "react";
import Authentication from "../../services/Authentication";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const { cartItems } = useContext(ShopCartContext);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await Authentication.isAuthenticated();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(totalItems);
    document.title =
      totalItems > 0 ? `(${totalItems}) Chocolaterie` : "Chocolaterie";
  }, [cartItems]);

  const handleLogout = async () => {
    await Authentication.logout();
    setIsAuthenticated(false);
  };

  return (
    <div className="flex justify-between items-center py-4 px-14 border-b-2 border-pink-200 bg-bg-header text-pink-200">
      <Link to="/">
        <h1 className="font-[Emilys_Candy] text-4xl italic">Chocolaterie</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/login" className="hover:text-pink-400">
          <Icon className="fa-regular fa-user text-2xl mr-4 cursor-pointer" />
        </Link>
        <Link to="/shop-cart" className="hover:text-pink-400">
          <Icon className="fa-solid fa-cart-shopping text-2xl cursor-pointer" />
          {totalItems > 0 && (
            <span className="absolute top-2 right-10 bg-pink-400 text-white text-[10px] font-bold px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
        {isAuthenticated && (
          <Icon
            onClick={handleLogout}
            className="fa-solid fa-arrow-right-from-bracket text-2xl ml-4 cursor-pointer hover:text-pink-400"
          />
        )}
      </div>
    </div>
  );
}
