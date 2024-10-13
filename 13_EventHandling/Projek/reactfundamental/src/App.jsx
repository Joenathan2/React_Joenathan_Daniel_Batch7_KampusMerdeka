import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateProduct from "./Pages/CreateProduct";
import { article } from "./Components/articel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container mx-auto mt-10 p-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                  {article.title.en}
                </h1>
                <p className="text-lg text-gray-600">
                  {article.description.en}
                </p>
              </div>
            </>
          }
        />

        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
