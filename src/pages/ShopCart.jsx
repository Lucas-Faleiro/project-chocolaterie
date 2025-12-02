import { useContext } from "react";
import { Header } from "../components";
import ShopCartContext from "../context/ShopCartContext";
import ShopCartCard from "../components/default/ShopCartCard.jsx";
import EmptyShopCart from "../components/default/EmptyShopCart.jsx";
import ShopCartSummary from "../components/default/ShopCartSummary.jsx";

function ShopCart() {
  const { cartItems, reductFromCart, addToCart, removeFromCart } =
    useContext(ShopCartContext);
  console.log(cartItems);

  return (
    <div className="min-h-dvh">
      <Header />
      {cartItems.length === 0 ? (
        <EmptyShopCart />
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-10 container mx-auto max-w-7xl items-start">
          {/* <p>Meu Carrinho</p> */}
          <div className="col-start-1 flex flex-col gap-4">
            {cartItems.map((item) => (
              <ShopCartCard
                removeFromCart={removeFromCart}
                reductFromCart={reductFromCart}
                addToCart={addToCart}
                key={item.id}
                item={item}
              />
            ))}
          </div>
          <ShopCartSummary />
        </div>
      )}
    </div>
  );
}

export default ShopCart;
