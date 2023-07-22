import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./styles/globals.css";
import ProductDetailPage from "./pages/product-detail-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products/:productId">
            <Route index element={<ProductDetailPage />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
