
import { createContext, useState } from "react";
import { IProduct } from "../models/IProduct";

interface ICartContext {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [myCartItems, setMyCartItems] =  useState<IProduct[]>([]);

  const myAddToCart = (newProduct: IProduct) => { // newProduct is coming from ProductsPage.tsx
    setMyCartItems([...myCartItems, newProduct]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems: myCartItems, addToCart: myAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

