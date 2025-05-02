import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
  dir?: 'rtl'; // Adicionado para suporte a árabe (direção direita-esquerda)
}

const languages: Language[] = [
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/br.svg' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/fr.svg' },
  { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/sa.svg', dir: 'rtl' }, 
  { code: 'nl', name: 'Nederlands', flag: 'https://flagcdn.com/nl.svg' }, 
  { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/de.svg' },
  { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/it.svg' }, 
];

export function LanguagesSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="relative w-[140px]"> {/* Aumentei a largura para acomodar textos mais longos */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-white transition-colors shadow-lg"
          aria-label="Seletor de idiomas"
        >
          <div className="flex items-center gap-2">
            <img 
              src={selectedLang.flag} 
              alt={selectedLang.name} 
              className="w-5 h-4 object-cover rounded-sm" 
            />
            <span 
              className="font-medium text-gray-800 text-sm"
              style={{ direction: selectedLang.dir }}
            >
              {selectedLang.name}
            </span>
          </div>
          <ChevronDown 
            className={`w-4 h-4 text-gray-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isOpen && (
          <div 
            className="
              absolute 
              bottom-full 
              mb-2 
              w-full 
              max-h-[300px] 
              bg-white/90 
              backdrop-blur-sm
              rounded-lg 
              shadow-lg 
              z-50 
              overflow-y-auto 
              border 
              border-gray-200
              scrollbar-thin
              scrollbar-thumb-gray-300
              scrollbar-track-gray-100
            "
          >
            <div className="py-1">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsOpen(false);
                  }}
                  className={`
                    flex 
                    items-center 
                    gap-2 
                    px-3 
                    py-2 
                    hover:bg-gray-100 
                    cursor-pointer 
                    transition-colors 
                    ${selectedLang.code === lang.code ? 'bg-gray-100' : ''}
                  `}
                >
                  <img 
                    src={lang.flag} 
                    alt={lang.name} 
                    className="w-5 h-4 object-cover rounded-sm" 
                  />
                  <span 
                    className="text-gray-800 text-sm"
                    style={{ direction: lang.dir }}
                  >
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}