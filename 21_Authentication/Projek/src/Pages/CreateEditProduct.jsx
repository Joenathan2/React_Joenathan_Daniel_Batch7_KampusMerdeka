import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const CreateEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === id)
  );

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setProductCategory(product.productCategory);
      setProductFreshness(product.productFreshness);
      setProductPrice(product.productPrice);
      setProductImage(product.image);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product ? product.id : Date.now().toString(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
      image: productImage || "",
    };

    if (product) {
      dispatch(updateProduct(newProduct));
    } else {
      dispatch(addProduct(newProduct));
    }

    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input
          type="radio"
          value="Brand New"
          name="freshness"
          checked={productFreshness === "Brand New"}
          onChange={(e) => setProductFreshness(e.target.value)}
        />
        <label>Brand New</label>
        <input
          type="radio"
          value="Second Hand"
          name="freshness"
          checked={productFreshness === "Second Hand"}
          onChange={(e) => setProductFreshness(e.target.value)}
        />
        <label>Second Hand</label>
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit">{product ? "Update" : "Create"} Product</button>
      </form>
    </div>
  );
};

export default CreateEditProduct;
