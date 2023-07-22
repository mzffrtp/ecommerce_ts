import { Link } from "react-router-dom";
import { AiFillNotification, AiOutlineShopping } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link to={"/"}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <p>CharmPalace</p>
            <AiFillNotification />
          </div>
        </Link>
      </p>
      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
}
