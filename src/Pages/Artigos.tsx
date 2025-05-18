import React from 'react';
import { Link } from 'react-router-dom';

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

function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gray-100 p-6 fixed left-0 top-0">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="font-bold text-gray-700 hover:text-purple-700">Home</Link>
        <Link to="/sobre" className="font-bold text-gray-700 hover:text-purple-700">Sobre</Link>
        <Link to="/equipe" className="font-bold text-gray-700 hover:text-purple-700">Equipe</Link>
        <Link to="/noticias" className="font-bold text-gray-700 hover:text-purple-700">Notícias</Link>
        <Link to="/projetos" className="font-bold text-gray-700 hover:text-purple-700">Projetos</Link>
        <Link to="/artigos" className="font-bold text-purple-700">Artigos</Link>
        <Link to="/contato" className="font-bold text-gray-700 hover:text-purple-700">Contato</Link>
      </nav>
    </aside>
  );
}

export default function Artigos() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-60 p-8">
        <h1 className="text-3xl font-bold mb-6">Artigos</h1>
        <ul className="space-y-4">
          {artigos.map((art, idx) => (
            <li key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col">
              <a href={art.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-700 hover:underline">
                {art.titulo}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
} 