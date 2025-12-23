import { useContext, useMemo, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router";
import { Button, Header } from "../components";
import realConverter from "../utils/realConverter";
import AddCartInput from "../components/custom/AddCartInput";
import EmblaCarousel from "../components/default/EmblaCarousel";
import ShopCartContext from "../context/ShopCartContext";

function ProductDetails() {
  const { productsList } = useContext(ProductsContext);
  const { addToCart } = useContext(ShopCartContext);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const product = useMemo(() => {
    return productsList.find(
      (productItem) => productItem.id === Number(params.id)
    );
  }, [productsList, params.id]);

  return (
    <div>
      <Header />
      {product && (
        <div className="max-w-[1366px] mx-auto mt-10 flex items-center justify-center font-[roboto] text-theme">
          <EmblaCarousel images={product.images_url} />
          <div className="flex flex-col justify-start gap-2 h-180">
            <div className="flex flex-col ml-5 text-xl">
              <span className="font-[piazolla] font-bold text-3xl">
                {product.item}
              </span>
              <span className="text-2xl ml-1 text-price-text">
                {realConverter(product.price)}
              </span>
            </div>
            <div className="flex ml-5 gap-4 text-2xl">
              <AddCartInput quantity={quantity} setQuantity={setQuantity} />
              <Button
                colors="secondary"
                className="px-6 py-2 text-xl w-full "
                onClick={() => addToCart(product, Number(quantity))}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
