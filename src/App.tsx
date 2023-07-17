import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
