import { useStateContext } from "@/context/cart-state";
import { Toast } from "react-hot-toast";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Cart() {
  const { setShowCart, totalQuantities, cartItems, totalPrice } =
    useStateContext();
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => {
            setShowCart(false);
          }}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 ? (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping cart is empty!</h3>
            <Link to={"/"}>
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shoppping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="product-container">
              {cartItems.map((cartProduct) => (
                <div className="product" key={cartProduct.id}>
                  <img src={cartProduct.image} className="cart-product-image" />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{cartProduct.name}</h5>
                      <h4>${cartProduct.price}</h4>
                    </div>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus">
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{cartProduct.quantity}</span>
                        <span className="plus">
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button>
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn">
                  Pay with Stripe
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
