import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBB8adx_XgZ8WL_8ue7w_Z_hkPyCunJoIg";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

export async function fetchStory(prompt, history) {
  const chatSession = model.startChat({
    generationConfig: {
      maxOutputTokens: 1000,
      temperature: 1,
    },
    history,
  });

  const result = await chatSession.sendMessage(prompt);
  return await result.response.text();
}
