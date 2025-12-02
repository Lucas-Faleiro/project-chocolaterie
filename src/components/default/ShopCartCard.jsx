import realConverter from "../../utils/realConverter";
import Icon from "../custom/Icon";

const ShopCartCard = ({ item, removeFromCart }) => {
  return (
    <div className="flex gap-2 relative border-2 border-pink-200 rounded-lg px-4 py-4 shadow-md">
      <img
        src={`/images/${item.img}`}
        alt={item.name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className={"flex flex-col justify-between flex-1"}>
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <span className="text-pink-400">
            {realConverter(item.totalPrice)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Icon className="fa-solid fa-circle-minus text-xl cursor-pointer text-red-400 hover:text-red-500 " />
          <input
            type="number"
            name="qty"
            id="qty"
            value={item.quantity}
            disabled={true}
            className="w-[2.4rem] h-[2.4rem] border-2 border-gray-200 text-center
                                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <Icon className="fa-solid fa-circle-plus text-xl cursor-pointer text-green-600 hover:text-green-400" />
        </div>
      </div>
      <Icon
        onClick={() => removeFromCart(item)}
        className="fa-solid fa-trash text-xl mt-4 cursor-pointer hover:text-gray-400 absolute right-4 top-2 text-gray-300"
      />
    </div>
  );
};

export default ShopCartCard;
