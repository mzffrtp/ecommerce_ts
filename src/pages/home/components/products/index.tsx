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
          <img
            src={product.image}
            width={350}
            height={350}
            className="product-image"
          />{" "}
          <p className="product-name">{product.title}</p>
          <p className="product-price">{product.price}</p>
        </div>
      </Link>
    </section>
  );
}
