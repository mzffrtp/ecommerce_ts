import useFSApi from "@/hooks/useApi/useFSApi";
import { RootState } from "@/redux/store";
import { FSProductType } from "@/shared/types/types";
import { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type ProductDetailParamType = {
  productId: string | undefined;
};

export default function ProductDetailPage() {
  const FSProduct = useSelector((state: RootState) => state.productState);
  const params: Readonly<Partial<ProductDetailParamType>> =
    useParams<ProductDetailParamType>();
  const [product, setProduct] = useState<FSProductType | null>(null);
  const api = useFSApi();
  const [init, setInit] = useState<boolean>(false);

  // validation params and products, fetching necessarry data
  useEffect(() => {
    void (async () => {
      {
        const promises = [];

        const exitsProductInState: FSProductType | undefined =
          FSProduct.products
            ? FSProduct.products.find((product) => {
                return product.id === parseInt(params.productId as string);
              })
            : undefined;

        promises.push(
          exitsProductInState
            ? exitsProductInState
            : api.getProduct(parseInt(params.productId as string))
        );

        const FSResults = await Promise.all(promises);
        setProduct(FSResults[0]);
        setInit(true);
      }
    })();
  }, []);

  // validation --> params + product id
  if (!params.productId) {
    return <p>Product information could´t be found. please contact us</p>;
  }
  return (
    <>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img className="product-detail-image" src={product?.image} />
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{product?.title}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>20</p>
            <h4>Details</h4>
            <p>{product?.description}</p>
            <p className="price">{product?.price} </p>
            <div className="quantity">
              <h3>Quantity:</h3>
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
      <div className="small-image-container">
        small image container categorilerden gelecek
      </div>
    </>
  );
}
