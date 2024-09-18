/*
  1. Let's create a context using createContext()
  2. the context can be used to make a provider component 
  3. create a provider component 
  4. supply the context data to the provider component -- in App.tsx
  5. access the context data in any component using useContext -- Header
*/

import { createContext, useState } from "react";
import { IProduct } from "../models/IProduct";

// what data will we supply thru the context?
interface ICartContext {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
}

// Step 1: create a context
export const CartContext = createContext<ICartContext | undefined>(undefined);

// Step 2: create a new component -- CartProvider -- use it in App.tsx
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

