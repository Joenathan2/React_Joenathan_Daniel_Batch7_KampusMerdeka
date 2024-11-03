import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.product.products.find((product) => product.id === id)
  );

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
            Product not found
          </h2>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => navigate("/")}
          >
            Back to Products
          </button>
        </div>
      </div>
    );
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
          <strong>Product Name:</strong> {product.productName}
        </p>
        <p>
          <strong>Category:</strong> {product.productCategory}
        </p>
        <p>
          <strong>Freshness:</strong> {product.productFreshness}
        </p>
        <p>
          <strong>Price:</strong> ${product.productPrice}
        </p>
        <img src={product.image} alt={product.productName} width="200" />
      </div>
    </div>
  );
};

export default ProductDetail;
