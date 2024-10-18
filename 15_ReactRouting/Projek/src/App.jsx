import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductManager from "./Pages/CreateProduct";
import ProductDetail from "./Components/ProductDetail"; // Buat komponen ini untuk menampilkan detail produk

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductManager />} />
        <Route path="/product/:id" element={<ProductDetail />} />{" "}
        {/* Routing untuk detail produk */}
      </Routes>
    </Router>
  );
}

export default App;
