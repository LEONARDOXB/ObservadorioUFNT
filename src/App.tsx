import React from 'react';
import { BookOpen, Users, Brain, Gift, BookText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Header */}
      <header className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/observatorio-logo.png.jpeg"
                alt="Observatório de Desinformação & Fake News - Norte" 
                className="h-20 object-contain rounded-full" // Adicionando borda arredondada
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-medium">
                <BookOpen size={20} />
                ARTIGO
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-medium">
                <Users size={20} />
                PROFESSORES
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-medium">
                <Brain size={20} />
                PESQUISAS
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-medium">
                <Gift size={20} />
                QUERO PRESENTEAR
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-2 text-sm font-medium">
                <BookText size={20} />
                BLOG
              </a>
            </div>

            {/* Login Button */}
            <button className="bg-white text-black px-8 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
              ENTRAR
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold">Bem-vindo ao Observatório</h1>
            <p className="mt-4 text-lg">
              Combate à desinformação e fake news com pesquisa e educação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
