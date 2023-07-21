import { FSProductType } from "@/shared/types/types";
import { Link } from "react-router-dom";

export type FooterBannerType = {
  product: FSProductType;
};

export default function FooterBanner({ product }: FooterBannerType) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>%20 discount</p>
            <h3>Summer Sale</h3>
            <p>11 June to 23 July</p>
          </div>
          <div className="right">
            <p className="product-name">{product.title}</p>
            <p className="product-price">
              {product.price} <span>&#8364;</span>{" "}
            </p>
            <Link to={`/product/${product.id}`}>
              <button type="button">Shop Now</button>
            </Link>
          </div>
          <img src={product.image} className="footer-banner-image" />
        </div>
      </div>
    </section>
  );
}
