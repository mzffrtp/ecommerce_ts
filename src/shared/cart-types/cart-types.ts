export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface StateContextValue {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  incQty: () => void;
  decQty: () => void;
}
