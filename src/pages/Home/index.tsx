import { useState } from 'react';
import CardImage from '../../components/ui/CardImage';
import Input from '../../components/ui/Input';
import LanguageSelector from '../../components/ui/LanguageSelector';
import UsageExampleCards from '../../components/ui/UsageExampleCards';
import { geminiApi } from '../../api/ai/gemini.service';

export default function Home() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [language, setLanguage] = useState('ingles');

  
  const handleSubmit = async () => {
    
    await geminiApi(inputSearch)

  }

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
        <Input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          id="searchInput"
          placeholder="Digite qualquer palavra..."
          handleSubmit={handleSubmit}
        />

        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          <LanguageSelector selected={true} language="auto" />
          <LanguageSelector selected={false} language="portugues" />
          <LanguageSelector selected={false} language="ingles" />
          <LanguageSelector selected={false} language="espanhol" />
          <LanguageSelector selected={false} language="frances" />
          <LanguageSelector selected={false} language="alemao" />
        </div>
      </div>

      {/* Loading State */}
      <div className="text-center py-20 hidden">
        <div className="w-12 h-12 border-3 border-slate-100 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>

        <div className="text-base text-slate-500 mb-2">
          Processando com IA...
        </div>
        <div className="text-sm text-slate-400">
          Buscando e analisando imagens relevantes
        </div>
      </div>

      {/* Results */}
      <div className="animate-slideUp" id="resultsContainer">
        {/* Word Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm text-center border border-slate-100">
          <div className="text-4xl font-bold text-slate-900 mb-3 tracking-tight word-main">
            Borboleta
          </div>
          <div className="text-2xl text-primary font-semibold mb-2 word-translation">
            Butterfly
          </div>
          <div className="text-base text-slate-500 font-mono word-phonetic">
            /ˈbʌtərˌflaɪ/
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
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-xl text-xs font-semibold uppercase tracking-wider">
                IA
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CardImage img="" phrase="" />
              <CardImage img="" phrase="" />
              <CardImage img="" phrase="" />
              <CardImage img="" phrase="" />
              <CardImage img="" phrase="" />
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
                <UsageExampleCards
                  phrase="A borboleta pousou delicadamente na flor."
                  language="Português"
                />
                <UsageExampleCards
                  phrase="The butterfly migrates thousands of miles."
                  language="English"
                />
                <UsageExampleCards
                  phrase="Las mariposas son importantes polinizadores."
                  language="Español"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
