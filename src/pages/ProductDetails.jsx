import { useContext, useEffect } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router";

function ProductDetails() {
  const { fetchProductById, product } = useContext(ProductsContext);
  const params = useParams();

  useEffect(() => {
    try {
      fetchProductById(params.id);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }, [params.id, fetchProductById]);

  console.log(product);

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>{product ? product.item : "No product data available."}</p>
    </div>
  );
}

export default ProductDetails;
