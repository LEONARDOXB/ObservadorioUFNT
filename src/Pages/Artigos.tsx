import React from 'react';
import Header from '../components/Header';

const artigos = [
  {
    titulo: 'O impacto das fake news na saúde pública',
    url: 'https://exemplo.com/artigo1'
  },
  {
    titulo: 'Educação midiática: desafios e oportunidades',
    url: 'https://exemplo.com/artigo2'
  }
];

export default function Artigos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Artigos</h1>
        <ul className="space-y-4">
          {artigos.map((art, idx) => (
            <li key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <a 
                href={art.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-semibold text-purple-700 hover:text-purple-800 transition-colors"
              >
                {art.titulo}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
} 