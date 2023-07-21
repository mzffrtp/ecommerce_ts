import { FSProductType } from "@/shared/types/types";
import { Link } from "react-router-dom";

export type ProductType = {
  product: FSProductType;
};

export default function Products({ product }: ProductType) {
  return (
    <section>
      <Link to={"/"}>
        <div className="product-card">
          <img src={product.image} width={300} height={300} />{" "}
          <p className="product-name">{product.title}</p>
          <p className="product-price">
            {product.price} <span>&#8364;</span>{" "}
          </p>
        </div>
      </Link>
    </section>
  );
}
