import { useState, useRef, useEffect } from 'react';
import { useSelectLanguage } from '../../../context/Language/context';

export type Language = {
  id: number;
  language: string;
  flag: string;
};

type SelectMenuProps = {
  type: 'source' | 'target';
};

const languages: Language[] = [
  { id: 1, language: 'Português', flag: '🇧🇷' },
  { id: 2, language: 'Inglês', flag: '🇺🇸' },
  { id: 3, language: 'Espanhol', flag: '🇪🇸' },
  { id: 4, language: 'Francês', flag: '🇫🇷' },
  { id: 5, language: 'Alemão', flag: '🇩🇪' },
  { id: 6, language: 'Russo', flag: '🇷🇺' },
];

export default function SelectMenu({ type }: SelectMenuProps) {

  const {sourceLanguage, setSourceLanguage, 
           targetLanguage, setTargetLanguage} = useSelectLanguage();

  const selected = type === 'source' ? sourceLanguage : targetLanguage;
  const setSelected = type === 'source' ? setSourceLanguage : setTargetLanguage;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (language: Language) => {
    setSelected(language);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-cente">
      <div className="w-full max-w-xs">
        <div className="relative w-50" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between rounded-2xl bg-white py-3 px-3 text-left text-gray-900 border border-gray-300 hover:border-gray-400 focus:border-[#ff7167aa] cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex justify-center items-center overflow-hidden rounded-full bg-gray-200">
                {selected.flag}
              </div>
              <span className="block truncate text-sm">
                {selected.language}
              </span>
            </div>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-56 overflow-auto border border-gray-200">
              {languages.map((person) => (
                <div
                  key={person.id}
                  onClick={() => handleSelect(person)}
                  className={`relative cursor-pointer pl-7 py-2 px-3 hover:bg-gray-100 ${
                    selected.id === person.id ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex justify-center items-center overflow-hidden rounded-full bg-gray-200">
                      {person.flag}
                    </div>
                    <span
                      className={`ml-3 block truncate text-sm ${
                        selected.id === person.id
                          ? 'font-semibold'
                          : 'font-normal'
                      }`}
                    >
                      {person.language}
                    </span>
                  </div>
                  {selected.id === person.id && (
                    <span className="absolute inset-y-0 left-1 flex items-center pr-4 text-primary">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
