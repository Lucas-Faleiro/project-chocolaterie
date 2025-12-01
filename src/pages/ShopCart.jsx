import { useContext, useState } from "react";
import { Header, Icon } from "../components";
import ShopCartContext from "../context/ShopCartContext";
import ShippingFee from "../components/default/ShippingFee.jsx";
import maskCep from "../utils/maskCep.js";
import ShopCartCard from "../components/default/ShopCartCard.jsx";

function ShopCart() {
  const { cartItems } = useContext(ShopCartContext);
  const [showShippingCost, setShowShippingCost] = useState(false);
  const [cepValue, setCepValue] = useState("");

  const handleShippingConsult = (e) => {
    e.preventDefault();
    if (cepValue.length > 0) {
      setShowShippingCost(true);
    }
  };

  const handleCepInput = (e) => {
    const maskedCep = maskCep(e.target.value);
    setCepValue(maskedCep);
  };

  return (
    <div className="min-h-dvh">
      <Header />
      {cartItems.length === 0 ? (
        <div>
          <img
            src="/svg/shopping-cart.svg"
            alt="Carrinho Vazio"
            className="mx-auto mt-10 w-14 h-14"
          />
          <p className="text-center mt-5 text-[1.4rem]">
            Seu carrinho está vazio.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-10 container mx-auto max-w-7xl items-start">
          {/* <p>Meu Carrinho</p> */}
          <div className="col-start-1 flex flex-col gap-4">
            {cartItems.map((item) => (
              <ShopCartCard item={item} />
            ))}
          </div>
          <div className="sticky top-4 border-2 border-pink-200 rounded-lg p-4 h-fit col-start-2 flex flex-col gap-4 shadow-md">
            <span className="font-bold text-2xl">Resumo das Compras</span>
            <div>
              <span>Subtotal:</span>
              <span className="font-bold text-pink-400 text-lg ml-2">
                R$ 250,00
              </span>
            </div>
            <h3 className="font-bold text-lg">
              Consulte seu frete e prazo de entrega:
            </h3>
            <form>
              <label htmlFor="cep"></label>
              <input
                type="tel"
                name="cep"
                id="cep"
                maxLength={9}
                placeholder="CEP"
                value={cepValue}
                onChange={handleCepInput}
                className="border-2 rounded border-gray-400 px-4 py-2 focus:outline-none focus:border-pink-400 shadow-md"
              />
              <button
                onClick={handleShippingConsult}
                className="cursor-pointer bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Consultar
              </button>
            </form>
            {showShippingCost && <ShippingFee />}
            <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mt-4">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopCart;
