import React from 'react';
import Header from '../components/Header';

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

export default function Projetos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Subprojetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
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