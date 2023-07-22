import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
