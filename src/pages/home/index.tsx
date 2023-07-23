import HeroBanner from "@/pages/home/components/hero-banner";
import Products from "./components/products";
import FooterBanner from "@/pages/home/components/footer-banner";
import useFSApi, { FSApi } from "@/hooks/useApi/useFSApi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { FSCategoryType, FSProductType } from "@/shared/types/types";
import { FSProductStateType, setProducts } from "@/redux/productSlice";
import { setCategories } from "@/redux/categorySlice";

export default function Home() {
  const api: FSApi = useFSApi();

  const dispatch = useDispatch();
  const productState: FSProductStateType = useSelector(
    (state: RootState) => state.productState
  );

  useEffect(() => {
    const fetchData = async () => {
      if (productState.products === null) {
        try {
          const prores: AxiosResponse<FSProductType[]> = await api.products(5);
          const catRes: AxiosResponse<FSCategoryType> = await api.categories();

          dispatch(setProducts(prores.data));
          dispatch(setCategories(catRes));
        } catch (error) {
          console.log("error", error);
        }
      }
    };
    fetchData();
  }, []);

  if (productState.products === null) {
    return (
      // TODO: error component ?
      <>
        <p>Loading ...</p>
      </>
    );
  }

  return (
    <section>
      <section>
        {" "}
        {productState.products.length > 0 && (
          <HeroBanner
            key={productState.products[0].id}
            product={productState.products[0]}
          />
        )}
      </section>
      <div className="products-heading">
        <h2> Best Selling Products</h2>
        <p>Products of many variations</p>
      </div>
      <div className="products-container">
        {productState.products.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
      <footer>
        <FooterBanner
          key={productState.products[0].id}
          product={productState.products[0]}
        />
      </footer>
    </section>
  );
}
