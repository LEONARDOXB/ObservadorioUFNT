import React from 'react';
import { Link } from 'react-router-dom';

const projetos = [
  {
    nome: 'Projeto Fake News Saúde',
    descricao: 'Monitoramento e combate à desinformação sobre saúde na região norte.',
    responsavel: 'Prof. João Silva'
  },
  {
    nome: 'Educação Midiática nas Escolas',
    descricao: 'Capacitação de professores para educação midiática.',
    responsavel: 'Profa. Maria Souza'
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
        <Link to="/projetos" className="font-bold text-purple-700">Projetos</Link>
        <Link to="/artigos" className="font-bold text-gray-700 hover:text-purple-700">Artigos</Link>
        <Link to="/contato" className="font-bold text-gray-700 hover:text-purple-700">Contato</Link>
      </nav>
    </aside>
  );
}

export default function Projetos() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-60 p-8">
        <h1 className="text-3xl font-bold mb-6">Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-purple-700 mb-2">{proj.nome}</h2>
              <p className="text-gray-700 mb-2">{proj.descricao}</p>
              <span className="text-sm text-gray-500">Responsável: {proj.responsavel}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 