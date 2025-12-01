import Button from "../custom/Button";
import Input from "../custom/input";

const CouponField = () => {
  return (
    <form className="flex flex-col gap-2">
      <h3 className="font-bold text-lg">Cupom de Desconto</h3>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Digite seu cupom"
          inputclass="border-2 rounded border-gray-400 px-4 py-2 focus:outline-none focus:border-pink-400 shadow-md"
        />
        <Button className="cursor-pointer bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mx-2">
          Adicionar
        </Button>
      </div>
    </form>
  );
};

export default CouponField;
