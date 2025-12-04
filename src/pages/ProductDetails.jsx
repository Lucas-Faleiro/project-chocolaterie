import { useContext, useMemo } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router";
import { Header } from "../components";
import realConverter from "../utils/realConverter";

function ProductDetails() {
  const { productsList } = useContext(ProductsContext);
  const params = useParams();

  const product = useMemo(() => {
    return productsList.find(
      (productItem) => productItem.id === Number(params.id)
    );
  }, [productsList, params.id]);

  console.log(product);

  return (
    <div>
      <Header />
      <div className="max-w-[1366px] mx-auto mt-10 flex items-center justify-center font-[roboto]">
        <img
          className="w-md h-180 rounded-lg shadow-lg object-cover"
          src={`/images/${product.image}`}
          alt={product.item}
        />
        <div className="flex flex-col justify-start gap-2 h-180">
          <div className="flex flex-col ml-5 text-xl">
            <span>{product.item}</span>
            <span>{realConverter(product.price)}</span>
          </div>
          <div className="flex ml-5 gap-4 text-2xl">
            <input
              className="border-2"
              type="number"
              name="quantity"
              id="quantity"
            />
            <button className="border-2">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
