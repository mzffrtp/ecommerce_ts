import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  const FSCategory = useSelector((state: RootState) => state.categoryState);
  return (
    <>
      <h2 style={{ display: "grid", placeItems: "center" }}>
        {" "}
        See other categories
      </h2>
      <div className={styles.catBtnsWrapper}>
        {FSCategory.categories.map((category, index) => (
          <Link to={`products/category/${category}`} key={index}>
            <button type="button" className={styles.catBtns}>
              {category.toUpperCase()}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
