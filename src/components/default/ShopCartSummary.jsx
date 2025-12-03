import { useEffect, useState } from "react";
import Button from "../custom/Button";
import ShippingFee from "./ShippingFee";
import ShippingConsult from "./ShippingConsult";
import CouponField from "./CouponField";
import realConverter from "../../utils/realConverter";

const ShopCartSummary = ({ cartItems }) => {
  const [showShippingCost, setShowShippingCost] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const [validCoupon, setValidCoupon] = useState({
    coupon: "",
    percentage: "",
    isValid: false,
    discountMultiplier: 1,
  });
  const [discountAmount, setDiscountAmount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newSubTotal = cartItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    const subTotalWithDiscount = validCoupon.isValid
      ? newSubTotal * validCoupon.discountMultiplier
      : newSubTotal;
    const discountAmount = validCoupon.isValid
      ? newSubTotal - subTotalWithDiscount
      : 0;
    const totalWithShipping = subTotalWithDiscount + (shippingCost || 0);
    setSubTotal(newSubTotal);
    setDiscountAmount(discountAmount);
    setTotalPrice(totalWithShipping);
  }, [cartItems, validCoupon, shippingCost]);

  return (
    <div className="sticky top-4 border-2 border-pink-200 rounded-lg p-4 h-fit col-start-2 flex flex-col gap-4 shadow-md">
      <span className="font-bold text-2xl text-bg-header">
        Resumo das Compras
      </span>
      <div className="flex items-center">
        <span className="font-bold">Subtotal:</span>
        <span className="font-bold text-pink-400 text-lg ml-2">
          {realConverter(subTotal)}
        </span>
      </div>
      <div className="h-px bg-gradient-to-r  via-pink-400  " />
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
      <div className="h-px bg-gradient-to-r  via-pink-400 " />
      <CouponField
        couponInput={couponInput}
        setCouponInput={setCouponInput}
        setValidCoupon={setValidCoupon}
      />
      {validCoupon.isValid && (
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg">Desconto no Pedido:</span>
          <div className="flex items-center">
            <span className="font-bold">{validCoupon.coupon}:</span>
            <span className="font-bold text-pink-400 text-lg ml-2">
              {`- ${realConverter(discountAmount)} (${
                validCoupon.percentage
              }) `}
            </span>
          </div>
        </div>
      )}
      <div className="h-px bg-gradient-to-r  via-pink-400  " />
      <div className="flex items-center">
        <span className="font-bold text-xl">Total:</span>
        <span className="font-bold text-pink-400 text-2xl ml-2">
          {realConverter(totalPrice)}
        </span>
      </div>
      <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mt-4">
        Finalizar Compra
      </Button>
    </div>
  );
};

export default ShopCartSummary;
