import { createContext, useContext, useReducer } from "react";
import Reducer from "./CartReducer";
const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
  cart: [],
  favorite: [],
  total: 0,
};
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(Reducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);

export default CartProvider;
