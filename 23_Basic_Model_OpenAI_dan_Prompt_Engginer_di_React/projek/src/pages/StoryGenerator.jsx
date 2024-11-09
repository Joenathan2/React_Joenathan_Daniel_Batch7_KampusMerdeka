import { useState } from "react";
import InputForm from "../components/InputForm";
import StoryDisplay from "../components/StoryDisplay";
import { fetchStory } from "../api/googleGenerative";

function StoryGenerator() {
  const [story, setStory] = useState("");
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "Saya adalah raja iblis hahahaha." }],
    },
    {
      role: "model",
      parts: [{ text: "Saya seorang yang akan melayani raja iblis." }],
    },
  ]);

  async function handleGenerate(theme, genre) {
    const prompt = `Buat cerita dengan tema "${theme}" dan genre "${genre}".`;
    const storyText = await fetchStory(prompt, history);

    setStory(storyText);
    setHistory((prev) => [
      ...prev,
      { role: "user", parts: [{ text: prompt }] },
      { role: "model", parts: [{ text: storyText }] },
    ]);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Cerita Pendek Generator
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <InputForm onGenerate={handleGenerate} />
        <StoryDisplay story={story} />
      </div>
    </div>
  );
}

export default StoryGenerator;
