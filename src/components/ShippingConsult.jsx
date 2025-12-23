import { useContext, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import maskCep from "../utils/maskCep";
import ToastContext from "../context/ToastContext";

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
      <div className="flex items-center">
        <Input
          type="tel"
          name="cep"
          id="cep"
          maxLength={9}
          placeholder="CEP"
          value={cepValue}
          onChange={handleCepInput}
          colors="secondary"
          width="third"
          minLength={9}
        />
        <Button onClick={handleShippingConsult}>Consultar</Button>
      </div>
    </form>
  );
};

export default ShippingConsult;
