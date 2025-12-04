import { useContext, useMemo } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router";
import { Header } from "../components";

function ProductDetails() {
  const { productsList } = useContext(ProductsContext);
  const params = useParams();

  const product = useMemo(() => {
    return productsList.find(
      (productItem) => productItem.id === Number(params.id)
    );
  }, [productsList, params.id]);

  return (
    <div>
      <Header />
      <p>{product ? product.item : "No product data available."}</p>
    </div>
  );
}

export default ProductDetails;
