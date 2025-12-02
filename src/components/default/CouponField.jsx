import Button from "../custom/Button";
import Input from "../custom/input";

const CouponField = ({ couponCode, setCouponCode, setValidCoupon }) => {
  const validateCoupon = (coupon) => {
    if (coupon === "CHOCO10") {
      return true;
    }
    return false;
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setValidCoupon(validateCoupon(couponCode));
  };

  return (
    <form className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Cupom de Desconto</h3>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Digite seu cupom"
          inputclass="border-2 rounded border-gray-400 px-4 py-2 focus:outline-none focus:border-pink-400 shadow-md"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
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
