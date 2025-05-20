import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (user === 'admin' && pass === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/projetos');
    } else {
      setError('Usuário ou senha inválidos');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-80 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Login Admin</h1>
        <input type="text" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} className="border p-2 rounded" />
        <input type="password" placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)} className="border p-2 rounded" />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-blue-600 text-white rounded p-2 font-bold hover:bg-blue-700">Entrar</button>
      </form>
    </div>
  );
} 