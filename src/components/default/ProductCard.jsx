import { Link } from "react-router";
import Button from "../custom/Button";
import { useContext } from "react";
import ShopCartContext from "../../context/ShopCartContext";

export default function ProductCard(props) {
  const {cartItems, addToCart} = useContext(ShopCartContext);
  console.log(cartItems);

  const product = {
    id: props.id,
    name: props.chocolatename,
    price: props.chocolateprice,
    img: props.chocolateimg,
  };
  
  

  return (
    <div {...props}>
      <img
        className="rounded-lg max-h-[350px] object-cover"
        src={`/images/${props.chocolateimg}`}
        alt={props.chocolateName}
      />
      <div className="flex flex-col items-center justify-center p-2 gap-1 grow">
        <div className="font-bold">{props.chocolatename} </div>
        <div>R${props.chocolateprice}</div>
        <Link to="/product-details">
          <Button
            type="button"
            className="bg-bg-header text-pink-200 shadow cursor-pointer hover:bg-pink-400 hover:text-white px-4 py-2 rounded-full"
            onClick={() => addToCart(product)}
          >
            Comprar
          </Button>
        </Link>
      </div>
    </div>
  );
}
