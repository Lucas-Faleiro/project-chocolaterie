import { createContext } from "react";

const ProductsContext = createContext({
  products: [],
  fetchProducts: () => {},
});
export default ProductsContext;
