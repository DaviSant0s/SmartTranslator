import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const systemInstruction = `
  Você é um gerador de exemplos linguísticos profissional. 
  Sempre que eu enviar um texto, ele pode ser uma palavra isolada ou uma frase completa no idioma indicado. 
  Sua tarefa é criar de 4 a 7 frases naturais e contextualizadas no mesmo idioma que mostrem o uso desse texto de forma coerente e realista.

  1. Traduza o texto para o idioma indicado, mantendo significado, tom e estilo originais.
  2. Se for uma palavra isolada, crie frases que a utilizem corretamente em diferentes contextos (formal, cotidiano, etc.).
  3. Se for uma frase completa, crie variações naturais dessa frase, reescrevendo-a de formas diferentes que mantenham o mesmo sentido.
  4. Não explique nada nem adicione traduções das frases.
  5. Para cada palavra ou frase, também forneça de 2 a 4 tópicos que representem os **principais temas ou contextos** em que ela é usada (por exemplo: cotidiano, trabalho, tecnologia, sentimentos, educação).
  6. Responda **apenas** no seguinte formato JSON:
  {
    "examples": ["<frase1>", "<frase2>", ...],
    "topics": ["<topico1>", "<topico2>", ...]
  }
  Sempre respeite estritamente este formato JSON, sem adicionar texto extra.
  `;

export const geminiExamples = async (word: string, targetLanguage: string
): Promise<{ examples: string[]; topics: string[]; }> => {

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Crie exemplos e tópicos para o seguinte texto traduzido no idioma ${targetLanguage}:"${word}"`,
      config: {
        systemInstruction,
      },
    });

    const text = response.text;

    // Tenta parsear JSON retornado
    try {

      if (typeof text === "undefined"){
        throw new Error("O texto retornado não poder ser underfined");
      }

      // Encontra o início e o fim do JSON, ignorando o markdown ```json
      const jsonStart = text.indexOf('{');
      const jsonEnd = text.lastIndexOf('}');

      if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error("Resposta da IA não contém um JSON válido.");
      }

      // Extrai a string JSON pura
      const jsonString = text.substring(jsonStart, jsonEnd + 1);

      const parsed = JSON.parse(jsonString);

      return {
        examples: parsed.examples || [],
        topics: parsed.topics || [],
      };

    } catch (err) {
      console.error('Erro ao parsear JSON da IA:', err);
      return { examples: [], topics: [] };
    }

  } catch (error) {
    console.log(error);
    return { examples: [], topics: [] }
  }
};
