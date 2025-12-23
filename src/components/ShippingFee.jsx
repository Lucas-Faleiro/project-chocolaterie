import realConverter from "../utils/realConverter";

const ShippingFee = ({ setShippingCost }) => {
  const shippingOptions = [
    { id: 1, type: "Entrega Expressa", cost: 1.0 },
    { id: 2, type: "Entrega Padrão", cost: 2.0 },
    { id: 3, type: "Entrega Econômica", cost: 3.0 },
  ];

  return (
    <div className="flex flex-col gap-2">
      {shippingOptions.map((option) => (
        <div
          key={option.id}
          className="flex items-center justify-between gap-1 border-2 p-2 rounded has-checked:border-checked-border "
        >
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping-fee"
              id={`option${option.id}`}
              value={option.cost}
              className="cursor-pointer appearance-none border-2 border-input-number-border w-3.5 h-3.5 rounded-full checked:bg-checked-accent"
              onChange={() => setShippingCost(Number(option.cost))}
            />
            <label
              className="text-[16px] pt-0.5 text-text"
              htmlFor={`option${option.id}`}
            >
              {option.type}
            </label>
          </div>
          <span className="">{realConverter(option.cost)}</span>
        </div>
      ))}
    </div>
  );
};

export default ShippingFee;
