import clsx from 'clsx';

export default function LanguageSelector({selected=false, language='auto'}) {
  return (
    <div
      className={clsx(
        'px-4',
        'py-2',
        selected ? 'bg-primary text-white border-primary' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50',
        'border',
        'rounded-full',
        'text-sm',
        'font-medium',
        'cursor-pointer',
        'transition-all'
      )}
      data-lang="auto"
    >
      {language == 'auto' && <>🌐 Detectar</>}
      {language == 'portugues' && <>🇧🇷 Português</>}
      {language == 'ingles' && <>🇺🇸 English</>}
      {language == 'espanhol' && <>🇪🇸 Espanhol</>}
      {language == 'frances' && <>🇫🇷 Françês</>}
      {language == 'alemao' && <>🇩🇪 Alemão</>}
    </div>
  );
}
