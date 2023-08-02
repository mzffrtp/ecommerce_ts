import { CartItem } from "../cart-types/cart-types";

export type FSProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export type FSCategoryType = string[];

export const convertToCartItem = (product: FSProductType): CartItem => {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    quantity: 1,
    image: product.image,
  };
};
