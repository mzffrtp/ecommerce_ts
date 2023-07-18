import { FSProductType } from "@/shared/types/types";
import { Link } from "react-router-dom";

export type HeroBannerType = {
  product: FSProductType;
};

export default function HeroBanner({ product }: HeroBannerType) {
  return (
    <section className="hero-banner-container">
      <div>
        <p className="beats-solo">{product.title}</p>
        <h3>Rating:{product.rating?.rate}</h3>
        <h1>{product.category} </h1>
        <img
          src={product.image}
          alt="headphones"
          style={{
            width: "7rem",
            borderRadius: "2rem",
          }}
        />
        <div>
          <Link to={`/product/${product.id}`}>
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
