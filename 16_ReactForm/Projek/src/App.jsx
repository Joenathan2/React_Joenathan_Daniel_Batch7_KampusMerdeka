import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductManager from "./Pages/CreateProduct";
import ProductDetail from "./Components/ProductDetail";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<ProductManager />} />
        <Route path="/product/:id" element={<ProductDetail />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
