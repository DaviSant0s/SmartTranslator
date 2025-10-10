import OpenAI from 'openai';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const openaiApi = async (word: string) => {
  try {
    const response = await client.responses.create({
      model: 'gpt-3.4',
      input: `Traduza para o português: ${word}`,
    });

    console.log(response.output_text);
    return response.output_text;
  } catch (error) {
    console.log(error);
  }
};
