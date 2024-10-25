import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, updateProduct, deleteProduct } from "../store";

const ProductManager = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [editingProduct, setEditingProduct] = useState(null); // New State
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    if (editingProduct) {
      setProductName(editingProduct.productName);
      setProductCategory(editingProduct.productCategory);
      setProductFreshness(editingProduct.productFreshness);
      setProductPrice(editingProduct.productPrice);
      setProductImage(editingProduct.image);
    }
  }, [editingProduct]);

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[a-zA-Z0-9\s]{3,}$/;
    const pricePattern = /^[1-9]\d*(\.\d{1,2})?$/;

    if (!namePattern.test(productName)) {
      newErrors.productName = "Nama harus lebih dari 3 karakter.";
    } else if (productName.length > 25) {
      newErrors.productName = "Nama tidak boleh lebih dari 25 karakter.";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newProduct = {
      id: editingProduct ? editingProduct.id : Date.now().toString(),
      productName,
      productCategory,
      productFreshness,
      productPrice,
      image: productImage ? URL.createObjectURL(productImage) : "",
    };

    if (editingProduct) {
      dispatch(updateProduct(newProduct));
    } else {
      dispatch(addProduct(newProduct));
    }

    clearForm();
  };

  const clearForm = () => {
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
    setProductImage(null);
    setErrors({});
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
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
            <label
              htmlFor="product-category"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Product Category
            </label>
            <select
              id="product-category"
              className="shadow appearance-none border rounded w-full py-2 px-3"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Choose...</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
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
            <label
              htmlFor="product-price"
              className="block text-gray-800 text-sm font-bold mb-2"
            >
              Product Price
            </label>
            <input
              id="product-price"
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
            Submit Product
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
