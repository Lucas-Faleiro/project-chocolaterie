import { useContext } from "react";
import { Header, Icon } from "../components";
import ShopCartContext from "../context/ShopCartContext";

function ShopCart() {
  const { cartItems } = useContext(ShopCartContext);
  console.log(cartItems);


  return (
    <div className="min-h-dvh">
      <Header />
      {cartItems.length === 0 ? (
        <div>
          <img src="/svg/shopping-cart.svg" alt="Carrinho Vazio" className="mx-auto mt-10 w-14 h-14" />
          <p className="text-center mt-5 text-[1.4rem]">Seu carrinho está vazio.</p>
        </div>
      ) : (
      <div className="grid grid-cols-2 gap-4 mt-10 container mx-auto "> 
        {/* <p>Meu Carrinho</p> */}
        {cartItems.map((item) => (
          <div key={item.id} className="col-start-1 flex gap-2 relative border-2 border-pink-200 rounded-lg px-4 py-4 shadow-md">
            <img src={`/images/${item.img}`} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
            <div>
              <h4 className="font-bold">{item.name}</h4>
              <span className="text-pink-400">R${item.price}</span>
              <div className="flex items-center gap-2"> 
                <Icon className="fa-solid fa-circle-minus text-lg cursor-pointer hover:text-gray-400" />
                <input type="number" name="qty" id="qty" value={1} className="w-[1.4rem] h-[1.4rem] border-2 border-gray-200" />
                <Icon className="fa-solid fa-circle-plus text-lg cursor-pointer hover:text-gray-400" />
              </div>
            </div>
            <Icon className="fa-solid fa-trash text-xl mt-4 cursor-pointer hover:text-gray-400 absolute right-4 top-2 text-gray-300" />
        </div>
      ))}
        <div className="border-2 border-pink-200 rounded-lg p-4 h-fit col-start-2 row-start-1">
          <span>Resumo das Compras</span>
        </div>
      </div> 
    )}
    </div>
  );
}

export default ShopCart;
