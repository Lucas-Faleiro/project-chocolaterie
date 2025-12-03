import { useLocation } from "react-router";
import { useMemo } from "react";

function ProductDetails() {
  const location = useLocation();

  const findProduct = useMemo(() => {
    return location.state;
  }, [location.state]);

  console.log(findProduct);

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>{findProduct ? findProduct.name : "No product data available."}</p>
    </div>
  );
}

export default ProductDetails;
