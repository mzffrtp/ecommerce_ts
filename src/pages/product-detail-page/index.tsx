import useFSApi from "@/hooks/useApi/useFSApi";
import { RootState } from "@/redux/store";
import { FSCategoryType, FSProductType } from "@/shared/types/types";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetails from "./components/product-details";
import Categories from "../home/components/categories";

type ProductDetailParamType = {
  productId: string | undefined;
};

export default function ProductDetailPage() {
  const FSProduct = useSelector((state: RootState) => state.productState);
  const FSCategory = useSelector((state: RootState) => state.categoryState);

  const params: Readonly<Partial<ProductDetailParamType>> =
    useParams<ProductDetailParamType>();
  const [product, setProduct] = useState<FSProductType | null>(null);
  const [categories, setCategories] = useState<FSCategoryType[]>([]);
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
        promises.push(api.categories());
        const FSResults = await Promise.all(promises);
        setProduct(FSResults[0] as FSProductType);
        setCategories(FSResults[1] as FSCategoryType[]);

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
      <ProductDetails product={product} />
      <div className="small-image-container">
        small image container categorilerden gelecek
      </div>
    </>
  );
}
