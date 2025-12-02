import { useReducer } from "react";
import ShopCartContext from "../context/ShopCartContext";

const shopCartReducer = (state, action) => {
  const { type, product } = action;
  const productFind = state.find((item) => item.id === product.id);
  switch (type) {
    case "ADD_TO_CART":
      if (productFind) {
        return state.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            };
          }
          return item;
        });
      }
      return [...state, product];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== product.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const ShopCartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(shopCartReducer, []);

  const contextValue = {
    cartItems,
    addToCart: (item) =>
      dispatch({
        type: "ADD_TO_CART",
        product: { ...item, quantity: 1, totalPrice: item.price },
      }),
    removeFromCart: (item) =>
      dispatch({ type: "REMOVE_FROM_CART", product: item }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
  };

  return (
    <ShopCartContext.Provider value={contextValue}>
      {children}
    </ShopCartContext.Provider>
  );
};

export default ShopCartProvider;
