import { useContext, useState } from "react";
import Button from "../custom/Button";
import maskCep from "../../utils/maskCep";
import ToastContext from "../../context/ToastContext";

const ShippingConsult = (props) => {
  const [cepValue, setCepValue] = useState("");
  const { showToast } = useContext(ToastContext);

  const handleShippingConsult = (e) => {
    e.preventDefault();
    if (cepValue.length === 9) {
      props.setShowShippingCost(true);
    }
    if (cepValue.length < 9) {
      showToast("Por favor, insira um CEP válido.", "error");
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
        minLength={9}
      />
      <Button onClick={handleShippingConsult}>Consultar</Button>
    </form>
  );
};

export default ShippingConsult;
