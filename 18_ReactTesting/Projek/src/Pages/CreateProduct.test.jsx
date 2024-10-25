import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store";
import ProductManager from "../Pages/CreateProduct";

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("Validasi Form CreateProduct", () => {
  test("Validasi bahwa Product Name tidak boleh melebihi 25 karakter", () => {
    renderWithProviders(<ProductManager />);

    const productNameInput = screen.getByPlaceholderText(/Enter product name/i);
    const submitButton = screen.getByText(/Submit Product/i);

    fireEvent.change(productNameInput, {
      target: { value: "NamaProdukYangSangatPanjangSekali" },
    });
    fireEvent.click(submitButton);

    console.log(screen.debug());

    expect(
      screen.getByText(/Nama tidak boleh lebih dari 25 karakter/i)
    ).toBeInTheDocument();
  });

  test("Validasi bahwa Product Name tidak boleh melebihi 25 karakter", () => {
    renderWithProviders(<ProductManager />);

    const productNameInput = screen.getByPlaceholderText(/Enter product name/i);
    const submitButton = screen.getByText(/Submit Product/i);

    fireEvent.change(productNameInput, {
      target: { value: "NamaProdukYangSangatPanjangSekali" },
    });
    fireEvent.click(submitButton);

    expect(
      screen.getByText(/Nama tidak boleh lebih dari 25 karakter/i)
    ).toBeInTheDocument();
  });

  test("Validasi bahwa semua field form tidak boleh kosong", () => {
    renderWithProviders(<ProductManager />);

    const submitButton = screen.getByText(/Submit Product/i);

    fireEvent.click(submitButton);

    expect(
      screen.getByText(/Nama harus lebih dari 3 karakter/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Harus pilih salah satu/i)).toBeInTheDocument();
    expect(screen.getByText(/Harga harus positif/i)).toBeInTheDocument();
    expect(screen.getByText(/Masukkan gambar/i)).toBeInTheDocument();
  });
});
