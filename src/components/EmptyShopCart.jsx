const EmptyShopCart = () => {
  return (
    <div>
      <img
        src="/svg/shopping-cart.svg"
        alt="Carrinho Vazio"
        className="mx-auto mt-10 w-14 h-14"
      />
      <p className="text-center mt-5 text-[1.4rem]">Seu carrinho está vazio.</p>
    </div>
  );
};

export default EmptyShopCart;
