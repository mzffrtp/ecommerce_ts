import HeroBanner from "@/components/hero-banner";
import Products from "./components/products";
import FooterBanner from "@/components/footer/footer-banner";

export default function Home() {
  return (
    <section>
      <section>
        {" "}
        <HeroBanner />
      </section>
      <div className="products-heading">
        <h2> Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        <Products />
      </div>
      <footer>
        <FooterBanner />
      </footer>
    </section>
  );
}
