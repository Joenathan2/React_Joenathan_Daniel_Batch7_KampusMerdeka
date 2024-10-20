import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "Meja",
      productCategory: "Furnitur",
      productFreshness: "Brand New",
      productPrice: "100",
      image: "src/assets/77387487f44dd6b826f5dd87e32c7736.jpg",
      additionalDescription: "Some description",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default store;
