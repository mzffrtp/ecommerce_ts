import { Link } from "react-router-dom";
import { AiFillNotification, AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "@/context/cart-state";
import Cart from "../cart";
export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link
          to={"/"}
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <p>CharmPalace</p>
          <AiFillNotification />
        </Link>
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
}
