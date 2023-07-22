import {
  AiFillInstagram,
  AiFillNotification,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>
          2023 CharmPalace <AiFillNotification /> All rights reserved
        </p>
        <p className="icons">
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </p>
      </div>
    </footer>
  );
}
