import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});


const systemInstruction = "A partir de agora, você é um tradutor profissional. Sempre que eu enviar um texto, traduza fielmente para o idioma indicado, mantendo significado, tom, estilo e formato do texto original, sem traduzir nomes próprios, marcas ou termos técnicos, e responda apenas com a tradução, sem comentários adicionais."

export const geminiApi = async (word: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `traduza para o inglês americano:` + word,
      config: {
        systemInstruction,
      },
    });
    console.log(response.text);

    return response.text;

  } catch (error) {
    console.log(error);
  }
};
