import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import preventInvalidChars from "../../utils/preventInvalidChars";

const AddCartInput = ({ quantity, setQuantity }) => {
  const handleButtons = (e) => {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "remove") {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    } else if (e.currentTarget.name === "add") {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleInput = (e) => {
    if (e.target.value === "") {
      setQuantity("");
    } else if (e.target.value < 1) {
      setQuantity(1);
    } else {
      setQuantity(e.target.value);
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === "" || e.target.value < 1) {
      setQuantity(1);
    }
  };

  return (
    <div className="border-2 border-[#49644680] border-opacity-10  flex text-green-900  rounded shadow-md py-1 px-2 font-[roboto]">
      <button className="cursor-pointer" name="remove" onClick={handleButtons}>
        <FiMinus />
      </button>
      <input
        value={quantity}
        type="number"
        name="quantity"
        id="quantity"
        className="w-12 text-center outline-none mx-2 text-lg font-bold
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        onChange={handleInput}
        onBlur={handleBlur}
        onKeyDown={preventInvalidChars}
      />
      <button className="cursor-pointer" name="add" onClick={handleButtons}>
        <FiPlus />
      </button>
    </div>
  );
};

export default AddCartInput;
