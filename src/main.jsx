import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./features/store.js";
import { Provider } from "react-redux";
import CartContextProvider from "./CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
