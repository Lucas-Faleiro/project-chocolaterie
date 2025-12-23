import { useContext } from "react";

import ToastContext from "../context/ToastContext";
import Database from "../services/Database";
import Input from "./Input";
import Button from "./Button";

const CouponField = ({ couponInput, setCouponInput, setValidCoupon }) => {
  const { showToast } = useContext(ToastContext);

  const validateCoupon = (coupons) => {
    const validCoupon = coupons.find((coupon) => coupon.code === couponInput);

    if (!validCoupon) {
      showToast("Cupom inválido. Tente Novamente.", "error");
      setValidCoupon((prev) => ({
        ...prev,
      }));
      return;
    }

    return setValidCoupon({
      coupon: couponInput,
      isValid: true,
      percentage: validCoupon.percentage,
      discountMultiplier: validCoupon.multiplier,
    });
  };

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    const { data } = await Database.fetch("coupons", "*");
    validateCoupon(data);
    setCouponInput("");
  };

  return (
    <form className="flex flex-col gap-2">
      <h3 className="font-bold text-lg text-text">Cupom de Desconto</h3>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Digite seu cupom"
          colors="secondary"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          width="third"
        />
        <Button
          onClick={handleApplyCoupon}
          className="cursor-pointer bg-buttons hover:bg-buttons-hover text-white font-bold py-2 px-4 rounded mx-2"
        >
          Adicionar
        </Button>
      </div>
    </form>
  );
};

export default CouponField;
