import { ProductCard, Header, SearchBar } from "../components";
import { useEffect, useState } from "react";

export default function Home() {
  const [chocolateList, setChocolateList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setChocolateList(data));
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <Header />
      <SearchBar
        id="search"
        placeholder="Search..."
        type="text"
        searchbarcontainer="flex justify-center items-center mt-10 relative"
        inputclass="border-2 border-pink-200 rounded-full px-4 py-2 w-1/2 focus:outline-none focus:border-pink-400 shadow-md "
      />
      <div className="md:grid-cols-2 md:gap-8 lg:grid-cols-3 grid-cols-1 mt-10 grid justify-items-center container mx-auto">
        {loading ? <p>Carregando Produtos...</p> : chocolateList.map((chocolate) => {
          return (
            <ProductCard
              key={chocolate.id}
              className="lg:h-125 lg:w-80 md:h-full md:w-full h-[486px] w-[330px] rounded-lg m-4 shadow-xl font-[roboto] text-center flex flex-col "
              id={chocolate.id}
              chocolatename={chocolate.name}
              chocolateprice={chocolate.price}
              chocolateimg={chocolate.img}
            />
          );
        })}
      </div>
    </div>
  );
}
