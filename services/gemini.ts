
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o Especialista de Experiências da "Experiência Automóvel", a melhor concessionária de carros de luxo em Angola (Luanda).
Seu objetivo é ajudar os clientes a encontrar não apenas um carro, mas a experiência que eles buscam.
O slogan da empresa é: "Não vendemos carros, Vendemos experiências".
Fale com entusiasmo, sofisticação e use termos comuns em Angola quando apropriado (ex: "mambo", "brincar", "top").
Foque em marcas como Ferrari, Lamborghini, Rolls-Royce, Mercedes e Land Rover.
Seja breve, direto e muito persuasivo.
`;

export const getGeminiResponse = async (messages: Message[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: messages.map(m => ({ 
        role: m.role === 'user' ? 'user' : 'model', 
        parts: [{ text: m.content }] 
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, meu sistema de inteligência está em manutenção. Mas saiba que a experiência que você procura está aqui.";
  }
};
