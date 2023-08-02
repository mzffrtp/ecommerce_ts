import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { Toaster } from "react-hot-toast";
import { StateContext } from "./context/cart-state.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateContext>
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </StateContext>
  </React.StrictMode>
);
