import { useContext } from "react";
import Database from "../../services/Database";
import Button from "../custom/Button";
import Input from "../custom/Input";
import ToastContext from "../../context/ToastContext";

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
      <h3 className="font-bold text-lg">Cupom de Desconto</h3>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Digite seu cupom"
          colors="secondary"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
        />
        <Button
          onClick={handleApplyCoupon}
          className="cursor-pointer bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Adicionar
        </Button>
      </div>
    </form>
  );
};

export default CouponField;
