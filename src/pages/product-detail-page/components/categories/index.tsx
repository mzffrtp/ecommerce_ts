import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import styles from "./categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  const FSCategory = useSelector((state: RootState) => state.categoryState);
  return (
    <>
      <p
        className="quantity-desc"
        style={{ display: "grid", placeItems: "center" }}
      >
        {" "}
        See other categories
      </p>
      <div className={styles.catBtnsWrapper}>
        {FSCategory.categories.map((category, index) => (
          <Link to={`categorie/${category}`}>
            <button key={index} type="button" className={styles.catBtns}>
              {category.toUpperCase()}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
