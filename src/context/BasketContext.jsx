import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);
  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.id === newProduct.id);
    if (!found) {
      setBasket([...basket, { ...newProduct, amount: 1 }]);
      toast.success("Ürün sepete eklendi");
    } else {
      const updated = { ...found, amount: found.amount + 1 };
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      setBasket(newBasket);
      toast.info("Ürün miktarı güncellendi");
    }
  };
  const removeBasket = (deleteId) => {
    const found = basket.find((i) => i.id === deleteId);
    if (found.amount === 1) {
      const filtered = basket.filter((i) => i.id !== deleteId);
      setBasket(filtered);
      toast.error("Ürün sepetten kaldırıldı");
    } else {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
      toast.info("Ürün miktarı güncellendi");
    }
  };
  const removeAllBasket = () => {
    setBasket([]);
  };
  const clearProduct = (deleteId) => {
    const clear = basket.filter((i) => i.id !== deleteId);
    setBasket(clear);
    toast.error("Ürün sepetten kaldırıldı");
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeBasket,
        removeAllBasket,
        clearProduct,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
