import { useContext } from "react";
import { Header } from "../components";
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
      <div className="grid grid-cols-2  gap-8 container mx-auto"> 
        {/* <p>Meu Carrinho</p> */}
        {cartItems.map((item) => (
          <div key={item.id} className="col-start-1">
            <img src={`/images/${item.img}`} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
            <h2 className="text-xl font-bold mt-4">{item.name}</h2>
            <p className="text-pink-400">R${item.price}</p>
        </div>
      ))}
        <div className="border-2 border-pink-200 rounded-lg p-4 h-fit mt-10 col-start-2 row-start-1">
          <p>Resumo das Compras</p>
        </div>
      </div> 
    )}
    </div>
  );
}

export default ShopCart;
