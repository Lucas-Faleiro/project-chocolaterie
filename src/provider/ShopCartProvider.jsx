import { useReducer } from "react";
import ShopCartContext from "../context/ShopCartContext";

const shopCartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            return [...state, payload];
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== payload.id);
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
        addToCart: (item) => dispatch({ type: "ADD_TO_CART", payload: item }),
        removeFromCart: (item) => dispatch({ type: "REMOVE_FROM_CART", payload: item }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
    };

    return (
        <ShopCartContext.Provider value={contextValue}>
            {children}
        </ShopCartContext.Provider>
    )
}

export default ShopCartProvider;