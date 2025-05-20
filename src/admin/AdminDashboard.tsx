import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') navigate('/admin/login');
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow flex flex-col gap-6 w-96">
        <h1 className="text-2xl font-bold mb-2 text-center">Painel do Administrador</h1>
        <Link to="/admin/projetos" className="bg-blue-600 text-white rounded p-3 text-center font-bold hover:bg-blue-700">Gerenciar Projetos</Link>
        <Link to="/admin/noticias" className="bg-blue-600 text-white rounded p-3 text-center font-bold hover:bg-blue-700">Gerenciar Notícias</Link>
        <Link to="/admin/artigos" className="bg-blue-600 text-white rounded p-3 text-center font-bold hover:bg-blue-700">Gerenciar Artigos</Link>
        <Link to="/admin/equipe" className="bg-blue-600 text-white rounded p-3 text-center font-bold hover:bg-blue-700">Gerenciar Equipe</Link>
      </div>
    </div>
  );
} 