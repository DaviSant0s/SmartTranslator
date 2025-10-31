interface CardImageProps {
  img: string,
  phrase: string
}

export default function CardImage({img, phrase}: CardImageProps) {
  return (
    <div className="bg-slate-50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
      {/* imagem */}
      <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl text-slate-300">
        <img
          src={img} // <-- USA A PROP 'img'
          alt={phrase} // <-- USA A PROP 'phrase' como texto alternativo
          className="w-full h-full object-cover" // object-cover garante que a imagem preencha o espaço sem distorcer
        />
      </div>
      <div className="p-4">
        {/* frase que descreve a imagem */}
        <div className="text-xs text-slate-600 leading-relaxed">
          {phrase}
        </div>
      </div>
    </div>
  );
}
