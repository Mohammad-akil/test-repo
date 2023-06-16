import { createContext, useState } from "react";

export const dataContext = createContext();

const CartContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  return (
    <dataContext.Provider value={{ list, setList }}>
      {children}
    </dataContext.Provider>
  );
};

export default CartContextProvider;
