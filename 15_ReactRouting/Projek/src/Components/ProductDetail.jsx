import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ productList }) => {
  const { id } = useParams();
  const product = productList.find((product) => product.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Name:</strong> {product.name}
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
  );
};

export default ProductDetail;
