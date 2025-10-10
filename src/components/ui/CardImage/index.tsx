interface CardImageProps {
  img: string,
  phrase: string
}

export default function CardImage({img, phrase}: CardImageProps) {
  return (
    <div className="bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
      {/* imagem */}
      <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl text-slate-300">
        🦋
      </div>
      <div className="p-4">
        {/* frase que descreve a imagem */}
        <div className="text-xs text-slate-600 leading-relaxed">
          Borboleta monarca com asas alaranjadas e pretas, demonstrando as
          características visuais típicas desta espécie migratória.
        </div>
      </div>
    </div>
  );
}
