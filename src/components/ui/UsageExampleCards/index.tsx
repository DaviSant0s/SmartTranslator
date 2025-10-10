interface UsageExampleCardsProps {
  language: string,
  phrase: string
}

export default function UsageExampleCards({language, phrase}: UsageExampleCardsProps) {
  return (
    <div className="p-3 bg-slate-50 rounded-xl border-l-3 border-primary">
      <div className="text-sm text-slate-600 mb-1">
        {phrase}
      </div>
      <div className="text-xs text-slate-400 font-medium">{language}</div>
    </div>
  );
}
