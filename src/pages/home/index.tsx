import Products from "./components/products";

export default function Home() {
  return (
    <section>
      <div className="products-heading">
        <h2> Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        <Products />
      </div>
    </section>
  );
}
