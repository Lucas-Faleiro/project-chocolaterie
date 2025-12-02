import { useEffect, useState } from "react";
import Button from "../custom/Button";
import ShippingFee from "./ShippingFee";
import ShippingConsult from "./ShippingConsult";
import CouponField from "./CouponField";
import realConverter from "../../utils/realConverter";

const ShopCartSummary = ({ cartItems }) => {
  const [showShippingCost, setShowShippingCost] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const newSubTotal = cartItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    const subTotalWithDiscount = validCoupon ? newSubTotal * 0.9 : newSubTotal;
    const totalWithShipping = subTotalWithDiscount + (shippingCost || 0);
    setSubTotal(totalWithShipping);
  }, [cartItems, validCoupon, shippingCost]);

  console.log(subTotal);

  return (
    <div className="sticky top-4 border-2 border-pink-200 rounded-lg p-4 h-fit col-start-2 flex flex-col gap-4 shadow-md">
      <span className="font-bold text-2xl">Resumo das Compras</span>
      <div>
        <span>Subtotal:</span>
        <span className="font-bold text-pink-400 text-lg ml-2">
          {realConverter(subTotal)}
        </span>
      </div>
      <h3 className="font-bold text-lg">
        Consulte seu frete e prazo de entrega
      </h3>
      <ShippingConsult setShowShippingCost={setShowShippingCost} />
      {showShippingCost && (
        <ShippingFee
          shippingCost={shippingCost}
          setShippingCost={setShippingCost}
        />
      )}
      <CouponField
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        setValidCoupon={setValidCoupon}
      />
      <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mt-4">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default ShopCartSummary;
