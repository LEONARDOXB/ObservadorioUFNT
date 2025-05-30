import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="w-full px-12 h-24 flex items-center justify-between border-b" style={{ background: '#FFF8E7' }}>
      <div className="flex items-center gap-6 min-w-fit">
        <img
          src="imagens/logo.jpg"
          alt="Logo"
          className="h-20 w-36 object-contain"
        />
        <Link to="/" className="flex flex-col justify-center group">
          <h1 className="text-3xl font-bold leading-tight text-[#2D2D2D] group-hover:text-yellow-300 transition">OBSERVATÓRIO</h1>
          <p className="text-lg text-[#2D2D2D] leading-tight group-hover:text-yellow-300 transition">DE DESINFORMAÇÃO & FAKE NEWS - NORTE</p>
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex gap-12">
          <a href="/sobre" className="text-[#2D2D2D] text-xl font-bold hover:text-yellow-300 transition">Sobre o Projeto</a>
          <a href="/projetos" className="text-[#2D2D2D] text-xl font-bold hover:text-yellow-300 transition">Subprojetos</a>
          <a href="/artigos" className="text-[#2D2D2D] text-xl font-bold hover:text-yellow-300 transition">Artigos</a>
          <a href="/equipe" className="text-[#2D2D2D] text-xl font-bold hover:text-yellow-300 transition">Equipe</a>
          <a href="/noticias" className="text-[#2D2D2D] text-xl font-bold hover:text-yellow-300 transition">Notícias</a>
          <a href="/contato" className="text-[#2D2D2D] text-xl font-bold hover:text-yellow-300 transition">Contato</a>
        </div>
      </div>
      <div className="flex items-center min-w-fit">
        <button className="p-2 rounded-full hover:bg-[#2D2D2D]/10 transition">
          <Search className="text-[#2D2D2D]" size={28} />
        </button>
      </div>
    </nav>
  );
} 