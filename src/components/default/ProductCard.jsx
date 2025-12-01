import { Link } from "react-router";
import Button from "../custom/Button";
import { useContext } from "react";
import ShopCartContext from "../../context/ShopCartContext";
import realConverter from "../../utils/realConverter.js";

export default function ProductCard(props) {
  const { addToCart } = useContext(ShopCartContext);

  const { id, chocolateName, chocolatePrice, chocolateImg, ...domProps } =
    props;

  const product = {
    id: id,
    name: chocolateName,
    price: chocolatePrice,
    img: chocolateImg,
  };

  return (
    <div {...domProps}>
      <img
        className="rounded-lg max-h-[350px] object-cover"
        src={`/images/${chocolateImg}`}
        alt={chocolateName}
      />
      <div className="flex flex-col items-center justify-center p-2 gap-1 grow">
        <Link to="/product-details">
          <div className="font-bold">{chocolateName} </div>
        </Link>
        <div>{realConverter(chocolatePrice)}</div>
        <Button
          type="button"
          className="bg-bg-header text-pink-200 shadow cursor-pointer hover:bg-pink-400 hover:text-white px-4 py-2 rounded-full"
          onClick={() => addToCart(product)}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
