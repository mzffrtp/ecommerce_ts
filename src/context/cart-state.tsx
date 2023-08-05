import {
  CartItem,
  StateContextValue,
  Product,
} from "@/shared/cart-types/cart-types";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

interface StateContextProps {
  children: ReactNode;
}

const Context = createContext<StateContextValue | null>(null);

export const StateContext: React.FC<StateContextProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
  };

  const onAdd = (product: CartItem, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems as CartItem[]);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    toast.success(`${product.quantity} ${product.name} added to the cart`);
  };
  let foundProduct: CartItem | undefined;
  let index: number;

  const toggleCartItemQuantity = (id: number, value: "inc" | "dec"): void => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);

    if (!foundProduct) {
      console.error("Error occurred in cart with product quantity!");
      return; // Exit the function if foundProduct is not valid
    }

    const updatedCartItems = [...cartItems]; // Create a copy of cartItems
    if (value === "inc") {
      updatedCartItems[index] = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      };
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + (foundProduct?.price || 0)
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        updatedCartItems[index] = {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        };
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice - (foundProduct?.price || 0)
        );
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }

    setCartItems(updatedCartItems); // Update cartItems with the updated array
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    );
  }
  return context;
};
