import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pesan: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, pesan } = formData;
    setSubmittedData({
      username: username,
      email: email,
      pesan: pesan,
    });

    setFormData({ username: "", email: "", pesan: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 w-full max-w-4xl">
        <div className="text-white max-w-sm md:max-w-md">
          <h2 className="text-3xl font-bold">Weid's Website</h2>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga,
            magni inventore temporibus velit ea fugiat vero nihil numquam
            facilis ab, eveniet cum sint doloribus fugit deleniti illo quo vel.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            optio non unde magni quisquam laboriosam quam. Ea aut perspiciatis
            error sit non ipsa omnis molestias dignissimos dolores. Corporis,
            nemo aliquam!
          </p>
        </div>

        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg flex-grow w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-white text-sm font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-3 border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="pesan"
                className="block text-white text-sm font-semibold"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="4"
                className="w-full px-4 py-3 border border-gray-400 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                placeholder="Enter your message"
                value={formData.pesan}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </div>

            {submittedData && (
              <div className="mt-6 bg-white-700 p-4 rounded-md">
                <h2 className="text-xl font-bold mb-4 text-white">
                  Submitted Data:
                </h2>
                <p className="text-white">
                  <strong>Username:</strong>{" "}
                  <span>{submittedData.username}</span>
                </p>
                <p className="text-white">
                  <strong>Email:</strong> <span>{submittedData.email}</span>
                </p>
                <p className="text-white">
                  <strong>Message:</strong> <span>{submittedData.pesan}</span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
