import ProductsContext from "../context/ProductsContext";
import normalizeString from "../utils/normalizeStrings";

const ProductsProvider = ({ children }) => {
  const fetchProducts = async (filter) => {
    if (filter) {
      const { data } = await Database.fetch("products", "*");

      const filteredProducts = data.filter((product) =>
        normalizeString(product.item).includes(normalizeString(filter))
      );
      return filteredProducts;
    }
    const { data } = await Database.fetch("products", "*");
    return data;
  };

  return (
    <ProductsContext.Provider value={fetchProducts}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
