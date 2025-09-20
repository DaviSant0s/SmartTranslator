import Input from '../../components/ui/Input';
import LanguageSelector from '../../components/ui/LanguageSelector';

export default function Home() {
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
        <Input />

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
              <div className="bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
                <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl text-slate-300">
                  🦋
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Borboleta monarca com asas alaranjadas e pretas,
                    demonstrando as características visuais típicas desta
                    espécie migratória.
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
                <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl text-slate-300">
                  🌸
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Borboleta pousada em uma flor, ilustrando o comportamento
                    natural de polinização e alimentação.
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
                <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl text-slate-300">
                  🐛
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Metamorfose completa mostrando a transformação de lagarta
                    para borboleta adulta.
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
                <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl text-slate-300">
                  ✨
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Borboletas coloridas em voo livre, destacando a beleza e
                    diversidade das espécies.
                  </div>
                </div>
              </div>
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
                <div className="p-3 bg-slate-50 rounded-xl border-l-3 border-primary">
                  <div className="text-sm text-slate-600 mb-1">
                    "A borboleta pousou delicadamente na flor."
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Português
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border-l-3 border-primary">
                  <div className="text-sm text-slate-600 mb-1">
                    "The butterfly migrates thousands of miles."
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    English
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border-l-3 border-primary">
                  <div className="text-sm text-slate-600 mb-1">
                    "Las mariposas son importantes polinizadores."
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Español
                  </div>
                </div>
              </div>
            </div>

            {/* Related Words */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                🔗 Palavras Relacionadas
              </h4>
              <div className="flex flex-wrap gap-2">
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Inseto
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Asas
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Flor
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Voar
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Colorido
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Metamorfose
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Lagarta
                </div>
                <div className="related-tag px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium cursor-pointer transition-all border border-slate-200 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5">
                  Polinização
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
