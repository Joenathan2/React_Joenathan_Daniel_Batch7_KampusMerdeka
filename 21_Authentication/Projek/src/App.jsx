import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductManager from "./Pages/CreateProduct";
import ProductDetail from "./Components/ProductDetail";
import LandingPage from "./Pages/LandingPage";
import CreateEditProduct from "./Pages/CreateEditProduct";
import Authentication from "./Pages/Authentication";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/create-product" element={<ProductManager />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/create" element={<CreateEditProduct />} />
          <Route path="/edit/:id" element={<CreateEditProduct />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
