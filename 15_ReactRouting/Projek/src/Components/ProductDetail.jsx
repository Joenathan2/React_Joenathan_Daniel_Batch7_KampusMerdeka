import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation(); // Mengambil data dari state
  const { product } = location.state || {}; // Ambil produk dari state

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Product Detail
        </h2>
        <p>
          <strong>Product ID:</strong> {product.id}
        </p>
        <p>
          <strong>Product Name:</strong> {product.name}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Freshness:</strong> {product.freshness}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
