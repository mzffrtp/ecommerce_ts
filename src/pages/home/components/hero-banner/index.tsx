import { FSProductType } from "@/shared/general-types/types";
import { Link } from "react-router-dom";

export type HeroBannerType = {
  product: FSProductType;
};

export default function HeroBanner({ product }: HeroBannerType) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="hero-banner-container">
        <p className="beats-solo">{product.title}</p>
        <h3>Rating:{product.rating?.rate}</h3>
        <h1>{product.category} </h1>
        <img
          src={product.image}
          className="hero-banner-image"
          style={{
            width: "6rem",
            borderRadius: "1rem",
          }}
        />
        <div>
          <Link to={`/products/${product.id}`}>
            <button type="button">Shop Now</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
