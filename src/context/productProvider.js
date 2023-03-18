import { createContext, useContext, useReducer, useState } from "react";
import * as data from "../data";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();

const ProductProvider = ({ children }) => {
  const [filterProduct, setFilterProduct] = useState([]);

  return (
    <ProductContext.Provider value={filterProduct}>
      <ProductContextDispatcher.Provider value={setFilterProduct}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export const useFiltreProducts = () => useContext(ProductContext);
export const useFilterProductActions = () => useContext(ProductContextDispatcher);

export default ProductProvider;
