import { ProductCard, Header, Button, Icon } from "../components";
import { useCallback, useContext } from "react";
import Input from "../components/custom/Input";
import ProductsContext from "../context/ProductsContext";
import { debounce } from "lodash";

export default function Home() {
  const { productsList, fetchProducts } = useContext(ProductsContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((value) => {
      fetchProducts(value);
    }, 300),
    [fetchProducts]
  );

  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <Header />
      <Input
        id="search"
        placeholder="Procure seu chocolate..."
        type="text"
        containerclass="flex justify-center items-center mt-10 relative"
        inputclass="border-2 border-pink-200 rounded px-4 py-2 w-1/3 focus:outline-none focus:border-pink-400 shadow-md"
        onChange={handleSearch}
      >
        <button className="right-10 bottom-2 cursor-pointer relative">
          <Icon className="fa-solid fa-magnifying-glass text-pink-400 absolute" />
        </button>
      </Input>
      <div className="md:grid-cols-2 md:gap-8 lg:grid-cols-3 grid-cols-1 mt-10 grid justify-items-center container mx-auto">
        {productsList.length === 0 ? (
          <p>Carregando Produtos...</p>
        ) : (
          productsList.map((chocolate) => {
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
