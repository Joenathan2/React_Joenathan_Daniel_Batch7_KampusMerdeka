import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [inputUser, setInputUser] = useState("");
  const [response, setResponse] = useState("default response");
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "Saya adalah raja iblis hahahaha" }],
    },
    {
      role: "model",
      parts: [{ text: "Saya seorang yang akan melayani raja iblis" }],
    },
  ]);

  function handleChange(e) {
    setInputUser(e.target.value);
  }

  const apiKey = "AIzaSyBB8adx_XgZ8WL_8ue7w_Z_hkPyCunJoIg";

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-latest",
  });

  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,
  };

  async function handlePromptSubmit() {
    console.log("input user = ", inputUser);

    try {
      let promptDefault = `Kamu harus menjawab Seperti seorang bawahan mafia.`;
      let combinedPrompt = `${promptDefault}\n${inputUser}`;

      const chatSession = model.startChat({
        generationConfig,
        history: history,
      });

      const result = await chatSession.sendMessage(combinedPrompt);
      const responseText = await result.response.text();
      console.log("Model response:", responseText);
      setResponse(responseText);

      setHistory((prevData) => [
        ...prevData,
        { role: "user", parts: [{ text: inputUser }] },
        { role: "model", parts: [{ text: responseText }] },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Weid AI</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <input
          type="text"
          value={inputUser}
          onChange={handleChange}
          placeholder="Masukkan pesan Anda..."
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePromptSubmit}
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
        <p className="mt-4 text-gray-700 font-medium bg-gray-100 p-3 rounded-md border border-gray-300">
          {response}
        </p>
      </div>
      <ul className="mt-6 w-full max-w-lg">
        {history.map((data, index) => (
          <div key={index} className="mb-3">
            <strong
              className={
                data.role === "user" ? "text-green-600" : "text-red-600"
              }
            >
              {data.role === "user" ? "User" : "AI"}
            </strong>{" "}
            <span className="block p-3 bg-gray-200 rounded-md">
              {data.parts[0].text}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
