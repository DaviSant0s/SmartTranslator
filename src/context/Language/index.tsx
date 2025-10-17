import { useState, type ReactNode } from 'react';
import { GlobalSelectLanguageContext } from './context';
import type { Language } from '../../components/ui/SelectMenu';

export default function SelectLanguage({ children }: {children: ReactNode}) {

  const [sourceLanguage, setSourceLanguage] = useState<Language>({ id: 1, language: 'Português', flag: '🇧🇷' });
  const [targetLanguage, setTargetLanguage] = useState<Language>({ id: 2, language: 'Inglês', flag: '🇺🇸' });

  return (
    <GlobalSelectLanguageContext.Provider
      value={{
        sourceLanguage,
        setSourceLanguage,
        targetLanguage,
        setTargetLanguage
      }}
    >
      {children}
    </GlobalSelectLanguageContext.Provider>
  );
}
