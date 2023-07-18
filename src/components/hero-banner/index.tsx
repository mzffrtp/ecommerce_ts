import { FSProductType } from "@/shared/types/types";
import { Link } from "react-router-dom";

export type HeroBannerType = {
  product: FSProductType;
};

export default function HeroBanner({ product }: HeroBannerType) {
  return (
    <section className="hero-banner-container">
      <div>
        <p className="beats-solo">{product.id}</p>
        <h3>midtext</h3>
        <h1>largetext</h1>
        <img src="#" alt="headphones" />
        <div>
          <Link to="/">
            <button type="button">button text</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </section>
  );
}
