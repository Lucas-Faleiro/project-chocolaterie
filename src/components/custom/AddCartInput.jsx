import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const AddCartInput = () => {
  return (
    // <div className="border-2 border-[#4964464D]  flex items-center rounded shadow-md py-1 px-2">
    <div className="border-2 border-pink-200  flex items-center rounded shadow-md py-1 px-2">
      <button>
        {/* <FiMinus className="text-[#4964464D]" /> */}
        <FiMinus className="text-pink-200" />
      </button>
      <input
        value="1"
        type="number"
        name="quantity"
        id="quantity"
        className="w-12 text-center outline-none mx-2 text-base
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button>
        {/* <FiPlus className="text-[#4964464D]" /> */}
        <FiPlus className="text-pink-200" />
      </button>
    </div>
  );
};

export default AddCartInput;
