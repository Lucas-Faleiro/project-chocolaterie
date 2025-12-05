import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const AddCartInput = () => {
  return (
    <div className="border-2 border-[#49644680] border-opacity-10  flex text-green-900  rounded shadow-md py-1 px-2 font-[roboto]">
      <button className="cursor-pointer">
        <FiMinus />
      </button>
      <input
        value="1"
        type="number"
        name="quantity"
        id="quantity"
        className="w-12 text-center outline-none mx-2 text-lg font-bold
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button className="cursor-pointer">
        <FiPlus />
      </button>
    </div>
  );
};

export default AddCartInput;
