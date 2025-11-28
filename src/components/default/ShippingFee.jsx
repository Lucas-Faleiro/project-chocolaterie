import realConverter from "../../utils/realConverter";

const ShippingFee = () => {
  const shippingOptions = [
    { id: 1, type: "Entrega Expressa", cost: 7.99 },
    { id: 2, type: "Entrega Padrão", cost: 12.99 },
    { id: 3, type: "Entrega Econômica", cost: 19.99 },
  ];

  return (
    <div className="flex flex-col gap-2">
      {shippingOptions.map((option) => (
        <div
          key={option.id}
          className="flex items-center justify-between gap-1 border-2 p-2 rounded has-checked:border-pink-300"
        >
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping-fee"
              id={`option${option.id}`}
              value={option.cost}
              className="checked:bg-pink-400"
            />
            <label htmlFor={`option${option.id}`}>{option.type}</label>
          </div>
          <span className="">{realConverter(option.cost)}</span>
        </div>
      ))}
    </div>
  );
};

export default ShippingFee;
