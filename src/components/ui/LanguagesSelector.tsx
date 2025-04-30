import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt', name: 'PT', flag: 'https://flagcdn.com/br.svg' },
  { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/sa.svg' },
  { code: 'nl', name: 'Dutch', flag: 'https://flagcdn.com/nl.svg' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' },
  { code: 'fr', name: 'French', flag: 'https://flagcdn.com/fr.svg' },
  { code: 'de', name: 'German', flag: 'https://flagcdn.com/de.svg' },
  { code: 'it', name: 'Italian', flag: 'https://flagcdn.com/it.svg' },
];

export function LanguagesSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);

  return (
    <div className="relative w-[120px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-white px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <img 
            src={selectedLang.flag} 
            alt={selectedLang.name} 
            className="w-5 h-4 object-cover rounded-sm" 
          />
          <span className="font-medium text-gray-800 text-sm">{selectedLang.name}</span>
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
            max-h-60 
            bg-white 
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
                <span className="text-gray-800 text-sm">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}