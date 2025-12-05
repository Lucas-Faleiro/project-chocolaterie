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
      <Link to={`/product-details/${id}`}>
        <img
          className="rounded-lg max-h-[350px] object-cover w-full"
          src={`/images/${chocolateImg}`}
          alt={chocolateName}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-2 gap-1 grow">
        <Link to="/product-details">
          <div className="font-bold">{chocolateName} </div>
        </Link>
        <div>{realConverter(chocolatePrice)}</div>
        <Button
          type="button"
          colors="secondary"
          onClick={() => addToCart(product)}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
