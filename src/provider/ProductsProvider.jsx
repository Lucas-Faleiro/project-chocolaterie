import { useCallback, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import Database from "../services/Database";
import normalizeString from "../utils/normalizeStrings";

const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [product, setProduct] = useState(null);

  const fetchProducts = useCallback(async (filter) => {
    if (filter) {
      const { data } = await Database.fetch("products", "*");

      const filteredProducts = data.filter((product) =>
        normalizeString(product.item).includes(normalizeString(filter))
      );
      setProductsList(filteredProducts);
      return;
    }

    const { data } = await Database.fetch("products", "*");
    setProductsList(data);
  }, []);

  const fetchProductById = useCallback(async (id) => {
    const { data } = await Database.findById("products", "*", id);
    setProduct(data[0]);
    return;
  }, []);

  const contextValue = {
    productsList,
    product,
    fetchProducts,
    fetchProductById,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
