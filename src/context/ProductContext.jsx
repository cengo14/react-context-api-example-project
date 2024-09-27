import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data))
      .catch((err) => setErr(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ProductContext.Provider value={{ data, isLoading, err }}>
      {children}
    </ProductContext.Provider>
  );
};
