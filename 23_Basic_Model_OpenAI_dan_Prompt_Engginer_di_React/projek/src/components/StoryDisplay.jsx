function StoryDisplay({ story }) {
  return (
    <div className="p-4 mt-6 bg-gray-100 rounded-md border border-gray-300">
      <h2 className="text-xl font-semibold text-gray-700">Hasil Generator</h2>
      <p className="mt-2 text-gray-600 whitespace-pre-wrap">{story}</p>
    </div>
  );
}

export default StoryDisplay;
