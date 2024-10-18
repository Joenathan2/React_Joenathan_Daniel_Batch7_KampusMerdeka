import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/CreateProduct";
import ProductDetail from "./Components/ProductDetail";
import LandingPage from "./Pages/LandingPage";
const App = () => {
  const [productList, setProductList] = useState([
    {
      id: "1",
      name: "Product 1",
      category: "Category 1",
      freshness: "brand_new",
      price: "100",
    },
    {
      id: "2",
      name: "Product 2",
      category: "Category 2",
      freshness: "second_hand",
      price: "200",
    },
  ]);
  //agar dia tampil saat di tekan 1 kalo gak di buat gini tidak mau tampil, saya ada buat no 3 kosong nanti di coba aja dia not found seperti di productdetail.jsx
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/create-product"
          element={
            <Create productList={productList} setProductList={setProductList} />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetail productList={productList} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
