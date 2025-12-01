import { ProductCard, Header, Button, Icon } from "../components";
import { useContext, useEffect, useState } from "react";
import Database from "../services/database";
import ToastContext from "../context/ToastContext";
import Input from "../components/custom/input";

export default function Home() {
  const [chocolateList, setChocolateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    try {
      setLoading(true);
      fetchProducts();
    } catch (error) {
      showToast.notify("Erro ao carregar produtos.", "error");
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProducts = async () => {
    const products = await Database();
    setChocolateList(products);
  };

  return (
    <div>
      <Header />
      <Input
        id="search"
        placeholder="Search..."
        type="text"
        containerclass="flex justify-center items-center mt-10 relative"
        inputclass="border-2 border-pink-200 rounded-full px-4 py-2 w-1/2 focus:outline-none focus:border-pink-400 shadow-md "
      >
        <Button className="right-10 bottom-2 cursor-pointer relative">
          <Icon className="fa-solid fa-magnifying-glass text-pink-400 absolute" />
        </Button>
      </Input>
      <div className="md:grid-cols-2 md:gap-8 lg:grid-cols-3 grid-cols-1 mt-10 grid justify-items-center container mx-auto">
        {loading ? (
          <p>Carregando Produtos...</p>
        ) : (
          chocolateList.map((chocolate) => {
            return (
              <ProductCard
                key={chocolate.id}
                className="lg:h-125 lg:w-80 md:h-full md:w-full h-[486px] w-[330px] rounded-lg m-4 shadow-xl font-[roboto] text-center flex flex-col "
                id={chocolate.id}
                chocolateName={chocolate.item}
                chocolatePrice={chocolate.price}
                chocolateImg={chocolate.image}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
