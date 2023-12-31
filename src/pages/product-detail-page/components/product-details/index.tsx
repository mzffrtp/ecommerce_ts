import { FSProductType, convertToCartItem } from "@/shared/general-types/types";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import styles from "./product-details.module.css";
import { useStateContext } from "@/context/cart-state";
import { CartItem } from "@/shared/cart-types/cart-types";

export type ProductDetailsType = {
  product: FSProductType | null;
};
export default function ProductDetails({ product }: ProductDetailsType) {
  const { qty, incQty, decQty, onAdd, setShowCart } = useStateContext();

  return (
    <div className="product-detail-container">
      <div className={styles.proDetWrapper}>
        <div>
          <div className="image-container">
            <img className="product-detail-image" src={product?.image} />
          </div>
        </div>
        <div className="product-detail-desc">
          <h1 style={{ textAlign: "center" }}>{product?.title}</h1>
          <div className="reviews">
            <div className="reviews-star">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>20</p>
            </div>
            <div className="product-detail-desc-detail">
              <h4>Details</h4>
              <p>{product?.description}</p>
              <h4>
                Price:{" "}
                <span style={{ color: "black" }}>{product?.price} &euro; </span>
              </h4>
              <div className="quantity">
                <h4>Quantity:</h4>
                <p className="quantity-desc">
                  <span className="minus" onClick={decQty}>
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{qty}</span>
                  <span className="plus" onClick={incQty}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="add-to-cart"
                  onClick={() => {
                    if (product) {
                      const cartItem = convertToCartItem(product);
                      onAdd(cartItem, qty);
                    }
                  }}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="buy-now"
                  onClick={() => {
                    if (product) {
                      const cartItem = convertToCartItem(product);
                      onAdd(cartItem, qty);
                      setShowCart(true);
                    }
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
