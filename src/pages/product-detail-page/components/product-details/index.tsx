import { FSProductType } from "@/shared/types/types";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";

export type ProductDetailsType = {
  product: FSProductType | null;
};
export default function ProductDetails({ product }: ProductDetailsType) {
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img className="product-detail-image" src={product?.image} />
        </div>
      </div>
      <div className="product-detail-desc">
        <h1 style={{ textAlign: "center" }}>{product?.title}</h1>
        <div className="reviews">
          <div className="reviews-star">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>20</p>
          </div>
          <div className="product-detail-desc-detail">
            <h4>Details</h4>
            <p>{product?.description}</p>
            <h4>
              Price:{" "}
              <span style={{ color: "black" }}>{product?.price} &euro; </span>
            </h4>
            <div className="quantity">
              <h4>Quantity:</h4>
              <p className="quantity-desc">
                <span className="minus">
                  <AiOutlineMinus />
                </span>
                <span className="num"> qty</span>
                <span className="plus">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart">
                Add to Cart
              </button>
              <button type="button" className="buy-now">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
