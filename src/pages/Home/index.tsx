import { useState } from 'react';
import CardImage from '../../components/ui/CardImage';
import Input from '../../components/ui/Input';
import UsageExampleCards from '../../components/ui/UsageExampleCards';
import { geminiApi } from '../../api/ai/geminiTranslate.service';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaVolumeUp } from 'react-icons/fa';
import SelectMenu from '../../components/ui/SelectMenu';
import { useSelectLanguage } from '../../context/Language/context';
import { geminiExamples } from '../../api/ai/geminiExamples.service';
import {
  getImagesForSearch,
  type Image,
} from '../../api/images/unsplash.service';

export default function Home() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [translatedSentence, setTranslatedSentence] = useState<string>('');
  const [untranslatedSentence, setUntranslatedSentence] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [examples, setExamples] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [exampleLanguage, setExampleLanguage] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);

  const {
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
  } = useSelectLanguage();

  const handleClickLanguageSwitch = () => {
    const source = sourceLanguage;
    const target = targetLanguage;

    setSourceLanguage(target);
    setTargetLanguage(source);
  };

  const handleSpeak = (text: string, lang: string) => {
    // Verifica se o navegador suporta a API
    if ('speechSynthesis' in window) {
      // Cancela qualquer fala anterior para evitar sobreposição
      window.speechSynthesis.cancel();

      // Cria a "enunciação" (o que será falado)
      const utterance = new SpeechSynthesisUtterance(text);

      // Define o idioma da fala.
      utterance.lang = lang;

      // Manda o navegador falar
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback para navegadores que não suportam a API
      alert('Desculpe, seu navegador não suporta a funcionalidade de fala.');
    }
  };

  const getLanguageCodeForSpeech = (langName: string): string => {
    const languageMap: { [key: string]: string } = {
      Português: 'pt-BR',
      Inglês: 'en-US',
      Espanhol: 'es-ES',
      Francês: 'fr-FR',
      Alemão: 'de-DE',
      Russo: 'ru-RU',
    };

    // Se o idioma não for encontrado no mapa, ele usará 'en-US' como padrão
    // para evitar erros.
    return languageMap[langName] || 'en-US';
  };

  const handleSubmit = async () => {
    if (!inputSearch) return;

    setIsLoading(true);
    setHasSearched(true);

    // Verificamos se a entrada é uma palavra única ou uma frase.
    // Usamos trim() para limpar espaços e split(/\s+/) para dividir 
    // por um ou mais espaços em branco (robusto para "palavra  dupla").
    const isSingleWord = inputSearch.trim().split(/\s+/).length === 1;

    const res_sentence = await geminiApi(
      inputSearch,
      sourceLanguage.language,
      targetLanguage.language
    );

    setUntranslatedSentence(inputSearch);
    setTranslatedSentence(res_sentence);

    const res_examples = await geminiExamples(
      res_sentence,
      targetLanguage.language
    );

    // Preparamos os tópicos e a query do Unsplash
    const topics = res_examples.topics || [];
    let unsplashQuery = '';

    if (isSingleWord) {
      // Se for palavra única, usamos a própria palavra (limpa de espaços)
      unsplashQuery = res_sentence.trim();
    } else if (topics.length > 0) {
      // Se for uma FRASE e a IA retornou tópicos, usamos os tópicos.
      unsplashQuery = topics.slice(0, 3).join(', ');
    } else {
      // Usamos a frase original.
      unsplashQuery = res_sentence;
    }

    const res_images = await getImagesForSearch(unsplashQuery);

    setExampleLanguage(targetLanguage.language);
    setExamples(res_examples.examples);
    setTopics(res_examples.topics);
    setImages(res_images);

    setIsLoading(false);
  };

  return (
    <div>
      <div className="text-center mb-15">
        <h1 className="text-[37px] sm:text-[48px] font-bold leading-11 sm:leading-none text-slate-900 mb-10">
          Tradutor Inteligente
        </h1>
        <p className="text-[18px] md:text-[20px] text-slate-500 mb-10 max-w-xl mx-auto">
          Aprenda idiomas com traduções contextuais e exemplos visuais gerados
          por inteligência artificial
        </p>
      </div>

      <div className="w-full md:w-[696px] mx-auto mb-12 relative">
        <div className="w-full h-15 mb-2 flex justify-center items-center">
          <div className="w-full h-full flex justify-end items-center pl-30">
            <SelectMenu type="source" />
          </div>
          <div className="w-40 h-15 flex justify-center items-center">
            <button
              onClick={handleClickLanguageSwitch}
              className="px-1 py-1 hover:bg-slate-100 cursor-pointer transition"
            >
              <FaArrowRightArrowLeft size={20} color="#79929d" />
            </button>
          </div>
          <div className="w-full h-full flex justify-start items-center pr-30">
            <SelectMenu type="target" />
          </div>
        </div>

        <Input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          id="searchInput"
          placeholder="Digite qualquer palavra..."
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-20">
          <div className="w-12 h-12 border-3 border-slate-100 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>

          <div className="text-base text-slate-500 mb-2">
            Processando com IA...
          </div>
          <div className="text-sm text-slate-400">
            Buscando e analisando imagens relevantes
          </div>
        </div>
      )}

      {/* Results */}
      {!isLoading && hasSearched && (
        <div className="animate-slideUp" id="resultsContainer">
          {/* Word Header */}
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm text-center border border-slate-100">

            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="text-4xl font-bold text-slate-800 tracking-tight word-main">
                {untranslatedSentence}
              </div>
              {/* Botão para falar */}
              <button
                onClick={() => {
                  const langCode = getLanguageCodeForSpeech(
                    sourceLanguage.language
                  );
                  handleSpeak(untranslatedSentence, langCode);
                }}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Ouvir tradução"
                title="Ouvir tradução"
              >
                <FaVolumeUp size={20} className="text-slate-500" />
              </button>
            </div>

            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="text-2xl text-primary font-semibold word-translation">
                {translatedSentence}
              </div>
              {/* Botão para falar */}
              <button
                onClick={() => {
                  const langCode = getLanguageCodeForSpeech(
                    targetLanguage.language
                  );
                  handleSpeak(translatedSentence, langCode);
                }}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Ouvir tradução"
                title="Ouvir tradução"
              >
                <FaVolumeUp size={20} className="text-slate-500" />
              </button>
            </div>
            <div className="text-base text-slate-500 font-mono word-phonetic">
              {/* /ˈbʌtərˌflaɪ/ */}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Images Section */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Imagens Selecionadas
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.length > 0 ? (
                  images.map((image) => (
                    <div key={image.id}>
                      <CardImage img={image.imageUrl} phrase={image.phrase} />
                    </div>
                  ))
                ) : (
                  // Feedback caso não venham imagens
                  <p className="text-slate-500 col-span-2 text-center py-4">
                    Nenhuma imagem encontrada para "{untranslatedSentence}".
                  </p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Examples */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  💬 Exemplos de Uso
                </h4>
                <div className="space-y-3">
                  {examples.map((example, idx) => {
                    return (
                      <div key={idx}>
                        <UsageExampleCards
                          phrase={example}
                          language={exampleLanguage}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  🔗 Palavras Relacionadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic, idx) => {
                    return (
                      <div key={idx}>
                        <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                          {topic}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
