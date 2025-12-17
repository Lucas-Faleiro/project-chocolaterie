import { Link } from "react-router";
import Button from "../custom/Button";
import { useContext } from "react";
import ShopCartContext from "../../context/ShopCartContext";
import realConverter from "../../utils/realConverter.js";

export default function ProductCard(props) {
  const { addToCart } = useContext(ShopCartContext);

  const { chocolate, ...domProps } = props;

  return (
    <div {...domProps}>
      <Link to={`/product-details/${chocolate.id}`}>
        <img
          className="rounded-lg max-h-[350px] object-cover w-full"
          src={`/images/${chocolate.images[0]}`}
          alt={chocolate.item}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-2 gap-1 grow">
        <Link to={`/product-details/${chocolate.id}`}>
          <div className="font-bold">{chocolate.item} </div>
        </Link>
        <div>{realConverter(chocolate.price)}</div>
        <Button
          type="button"
          colors="secondary"
          onClick={() => addToCart(chocolate, 1)}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
