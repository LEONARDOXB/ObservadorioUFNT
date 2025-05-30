import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Newspaper, Folder, FileText, Users, Menu, Info, Mail } from 'lucide-react';

const menu = [
  { to: '/sobre', icon: <Info size={22} />, label: 'Sobre o Projeto' },
  { to: '/projetos', icon: <Folder size={22} />, label: 'Projetos' },
  { to: '/artigos', icon: <FileText size={22} />, label: 'Artigos' },
  { to: '/equipe', icon: <Users size={22} />, label: 'Equipe' },
  { to: '/contato', icon: <Mail size={22} />, label: 'Contato' },
];

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <aside className={`h-full bg-[#2563eb] text-white flex flex-col items-center fixed top-0 left-0 z-40 shadow-lg transition-all duration-300 ${open ? 'w-48' : 'w-14'}`}>
      {/* Botão de menu */}
      <button
        className="mt-4 mb-8 flex flex-col gap-1 items-center focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu"
      >
        {/* Ícone de menu hamburguer */}
        <span className="block w-8 h-1 bg-white rounded"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
        <span className="block w-8 h-1 bg-white rounded"></span>
      </button>
      {/* Links do menu */}
      <nav className={`flex flex-col gap-2 w-full transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {menu.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-2 px-4 py-2 hover:bg-blue-700 rounded transition text-white ${location.pathname === item.to ? 'bg-blue-800' : ''}`}
            onClick={() => setOpen(false)}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 