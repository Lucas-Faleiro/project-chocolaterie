import { useState } from "react";
import Button from "../custom/Button";
import ShippingFee from "./ShippingFee";
import ShippingConsult from "./ShippingConsult";

const ShopCartSummary = () => {
  const [showShippingCost, setShowShippingCost] = useState(false);

  return (
    <div className="sticky top-4 border-2 border-pink-200 rounded-lg p-4 h-fit col-start-2 flex flex-col gap-4 shadow-md">
      <span className="font-bold text-2xl">Resumo das Compras</span>
      <div>
        <span>Subtotal:</span>
        <span className="font-bold text-pink-400 text-lg ml-2">R$ 250,00</span>
      </div>
      <h3 className="font-bold text-lg">
        Consulte seu frete e prazo de entrega:
      </h3>
      <ShippingConsult setShowShippingCost={setShowShippingCost} />
      {showShippingCost && <ShippingFee />}
      <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mt-4">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default ShopCartSummary;
