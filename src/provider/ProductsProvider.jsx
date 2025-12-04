import { useCallback, useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import Database from "../services/Database";
import normalizeString from "../utils/normalizeStrings";
import ToastContext from "../context/ToastContext";

const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const { showToast } = useContext(ToastContext);

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

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {
      showToast("Erro ao carregar produtos.", "error");
      console.error("Erro ao buscar produtos:", error);
    }
  }, [fetchProducts, showToast]);

  const contextValue = {
    productsList,
    setProductsList,
    fetchProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
