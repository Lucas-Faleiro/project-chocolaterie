import { useState } from "react";
import Button from "../custom/Button";
import maskCep from "../../utils/maskCep";

const ShippingConsult = (props) => {
  const [cepValue, setCepValue] = useState("");

  const handleShippingConsult = (e) => {
    e.preventDefault();
    if (cepValue.length > 0) {
      props.setShowShippingCost(true);
    }
  };

  const handleCepInput = (e) => {
    const maskedCep = maskCep(e.target.value);
    setCepValue(maskedCep);
  };

  return (
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
      <Button
        onClick={handleShippingConsult}
        className="cursor-pointer bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Consultar
      </Button>
    </form>
  );
};

export default ShippingConsult;
