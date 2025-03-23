import { createContext, ReactNode, useState } from "react";

interface CartContextProps {
  cart: CartProps[];
  cartAmount: number;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProvaiderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

function CartProvaider({ children }: CartProvaiderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvaider;
