import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, languages } from '../../src/contexts/LanguageContext';

export function LanguagesSelector() {
  const { language: selectedLang, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="relative w-[140px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-white transition-colors shadow-lg"
          aria-label="Seletor de idiomas"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2">
            <img
              src={selectedLang.flag}
              alt={selectedLang.name}
              className="w-5 h-4 object-cover rounded-sm"
              loading="lazy"
            />
            <span
              className="font-medium text-gray-800 text-sm truncate"
              style={{ direction: selectedLang.dir }}
            >
              {selectedLang.name}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-800 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div
            className="absolute bottom-full mb-2 w-full max-h-[300px] bg-white/90 backdrop-blur-sm rounded-lg shadow-lg z-50 overflow-y-auto border border-gray-200"
            role="menu"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors w-full text-left ${selectedLang.code === lang.code ? 'bg-gray-100' : ''}`}
                  role="menuitem"
                  style={{ direction: lang.dir }}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-5 h-4 object-cover rounded-sm"
                    loading="lazy"
                  />
                  <span className="text-gray-800 text-sm truncate">
                    {lang.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}