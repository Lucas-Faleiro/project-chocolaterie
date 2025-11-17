import { createContext } from "react";

const ShopCartContext =  createContext(
    {
        cartItems: [],
        addToCart: () => {},
        removeFromCart: () => {},
        clearCart: () => {},
    }
);

export default ShopCartContext;
