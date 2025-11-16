import { Link } from "react-router";
import Icon from "../custom/Icon";

export default function Header() {
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
        </Link>
      </div>
    </div>
  );
}
