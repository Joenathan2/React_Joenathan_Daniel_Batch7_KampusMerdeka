import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (loginStatus) {
      navigate("/landing");
    }
  }, [navigate]);

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: "admin", password: "password123" };
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      (storedUser &&
        storedUser.username === username &&
        storedUser.password === password) ||
      (username === dummyUser.username && password === dummyUser.password)
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      navigate("/landing");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-500 to-white">
      <div className="bg-white bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Login
          </button>
        </form>
        {errorMessage && (
          <p className="mt-4 text-center text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
