import { createContext, useContext } from 'react';
import type { Language } from '../../components/ui/SelectMenu';

type LanguageContextType = {
  sourceLanguage: Language;
  setSourceLanguage: (lang: Language) => void;
  targetLanguage: Language;
  setTargetLanguage: (lang: Language) => void;
};

export const GlobalSelectLanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useSelectLanguage = () => {
  const context = useContext(GlobalSelectLanguageContext);
  if (!context) throw new Error('useSelectLanguage deve ser usado dentro de SelectLanguage');
  return context;
};