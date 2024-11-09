import { useState } from "react";

function InputForm({ onGenerate }) {
  const [theme, setTheme] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onGenerate(theme, genre);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <input
        type="text"
        placeholder="Masukan Tema-nya..."
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Masukan Genre-nya..."
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
      >
        Buat Cerita Pendek
      </button>
    </form>
  );
}

export default InputForm;
