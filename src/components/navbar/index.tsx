import { Link } from "react-router-dom";
import { AiFillNotification, AiOutlineShopping } from "react-icons/ai";

export default function Navbar() {
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
      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
}
