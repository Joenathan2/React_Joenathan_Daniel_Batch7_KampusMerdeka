import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  setProducts,
} from "../store";
import axios from "axios";

const ProductManager = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://6718b48d7fc4c5ff8f4aac7c.mockapi.io/products"
        );
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[a-zA-Z0-9\s]{3,}$/;
    const pricePattern = /^[1-9]\d*(\.\d{1,2})?$/;

    if (!namePattern.test(productName)) {
      newErrors.productName = "Nama harus lebih dari 3 karakter.";
    }
    if (productCategory === "") {
      newErrors.productCategory = "Harus pilih salah satu.";
    }
    if (productFreshness === "") {
      newErrors.productFreshness = "Harus pilih salah satu.";
    }
    if (!pricePattern.test(productPrice)) {
      newErrors.productPrice = "Harga harus positif.";
    }
    if (!productImage) {
      newErrors.productImage = "Masukkan gambar.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newProduct = {
      productName,
      productCategory,
      productFreshness,
      productPrice,
      image: productImage
        ? URL.createObjectURL(productImage)
        : editingProduct?.image,
    };

    try {
      if (editingProduct) {
        // Update product
        await axios.put(
          `https://6718b48d7fc4c5ff8f4aac7c.mockapi.io/products/${editingProduct.id}`,
          newProduct
        );
        dispatch(updateProduct({ ...newProduct, id: editingProduct.id }));
        alert("Product updated successfully.");
      } else {
        // Create new product
        const response = await axios.post(
          "https://6718b48d7fc4c5ff8f4aac7c.mockapi.io/products",
          newProduct
        );
        dispatch(addProduct(response.data));
        alert("Product saved successfully.");
      }
    } catch (error) {
      console.error("Error saving/updating product:", error);
    }

    clearForm();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setProductName(product.productName);
    setProductCategory(product.productCategory);
    setProductFreshness(product.productFreshness);
    setProductPrice(product.productPrice);
    setProductImage(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://6718b48d7fc4c5ff8f4aac7c.mockapi.io/products/${id}`
      );
      dispatch(deleteProduct(id));
      alert("Product dimusnakan.");
    } catch (error) {
      console.error("Gagal memusnakan product:", error);
    }
  };

  const handleView = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          {editingProduct ? "Edit Product" : "Create Product"}
        </h2>

        {message && (
          <p className="text-green-500 text-center mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
            />
            {errors.productName && (
              <p className="text-red-500 text-sm mt-1">{errors.productName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">
              Product Category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Choose...</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
            {errors.productCategory && (
              <p className="text-red-500 text-sm mt-1">
                {errors.productCategory}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">
              Product Freshness
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                value="brand_new"
                name="product_freshness"
                checked={productFreshness === "brand_new"}
                onChange={(e) => setProductFreshness(e.target.value)}
              />
              <label className="ml-2">Brand New</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                value="second_hand"
                name="product_freshness"
                checked={productFreshness === "second_hand"}
                onChange={(e) => setProductFreshness(e.target.value)}
              />
              <label className="ml-2">Second Hand</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                value="refurbished"
                name="product_freshness"
                checked={productFreshness === "refurbished"}
                onChange={(e) => setProductFreshness(e.target.value)}
              />
              <label className="ml-2">Refurbished</label>
            </div>
            {errors.productFreshness && (
              <p className="text-red-500 text-sm mt-1">
                {errors.productFreshness}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">
              Product Image
            </label>
            <input
              type="file"
              onChange={(e) => setProductImage(e.target.files[0])}
            />
            {errors.productImage && (
              <p className="text-red-500 text-sm mt-1">{errors.productImage}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2">
              Product Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3"
              type="number"
              min="0"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            {errors.productPrice && (
              <p className="text-red-500 text-sm mt-1">{errors.productPrice}</p>
            )}
          </div>

          <button className="bg-blue-500 text-white p-2 rounded" type="submit">
            {editingProduct ? "Update Product" : "Submit Product"}
          </button>
        </form>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-center text-blue-600">
          Product List
        </h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 border-b">No</th>
              <th className="py-2 border-b">Name</th>
              <th className="py-2 border-b">Category</th>
              <th className="py-2 border-b">Freshness</th>
              <th className="py-2 border-b">Price</th>
              <th className="py-2 border-b">Image</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="py-2 border-b text-center">{index + 1}</td>
                <td className="py-2 border-b">{product.productName}</td>
                <td className="py-2 border-b">{product.productCategory}</td>
                <td className="py-2 border-b">{product.productFreshness}</td>
                <td className="py-2 border-b">${product.productPrice}</td>
                <td className="py-2 border-b">
                  <img
                    src={product.image}
                    alt={product.productName}
                    width="50"
                  />
                </td>
                <td className="py-2 border-b text-center">
                  <button
                    className="bg-green-500 text-white p-2 rounded"
                    onClick={() => handleView(product)}
                  >
                    View
                  </button>
                  <button
                    className="bg-yellow-500 text-white p-2 rounded ml-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded ml-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;
