import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Projeto {
  nome: string;
  descricao: string;
  responsavel: string;
  imagens: string[];
  videos: string[];
}

export default function AdminProjetos() {
  const navigate = useNavigate();
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [form, setForm] = useState<Projeto>({ nome: '', descricao: '', responsavel: '', imagens: [], videos: [] });
  const [imgInput, setImgInput] = useState('');
  const [vidInput, setVidInput] = useState('');

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') navigate('/admin/login');
    const saved = localStorage.getItem('projetos');
    if (saved) setProjetos(JSON.parse(saved));
  }, [navigate]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addImagem() {
    if (imgInput) setForm(f => ({ ...f, imagens: [...f.imagens, imgInput] }));
    setImgInput('');
  }
  function addVideo() {
    if (vidInput) setForm(f => ({ ...f, videos: [...f.videos, vidInput] }));
    setVidInput('');
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const novos = [...projetos, form];
    setProjetos(novos);
    localStorage.setItem('projetos', JSON.stringify(novos));
    setForm({ nome: '', descricao: '', responsavel: '', imagens: [], videos: [] });
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Administração de Projetos</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8 flex flex-col gap-4 max-w-xl">
        <input name="nome" placeholder="Nome do projeto" value={form.nome} onChange={handleChange} className="border p-2 rounded" />
        <textarea name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} className="border p-2 rounded" />
        <input name="responsavel" placeholder="Responsável" value={form.responsavel} onChange={handleChange} className="border p-2 rounded" />
        <div>
          <div className="font-bold mb-1">Imagens (URL):</div>
          <div className="flex gap-2 mb-2">
            <input value={imgInput} onChange={e => setImgInput(e.target.value)} className="border p-2 rounded flex-1" placeholder="URL da imagem" />
            <button type="button" onClick={addImagem} className="bg-blue-600 text-white rounded px-3">Adicionar</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.imagens.map((img, i) => <img key={i} src={img} alt="img" className="w-16 h-16 object-cover rounded" />)}
          </div>
        </div>
        <div>
          <div className="font-bold mb-1">Vídeos (YouTube URL):</div>
          <div className="flex gap-2 mb-2">
            <input value={vidInput} onChange={e => setVidInput(e.target.value)} className="border p-2 rounded flex-1" placeholder="URL do vídeo" />
            <button type="button" onClick={addVideo} className="bg-blue-600 text-white rounded px-3">Adicionar</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.videos.map((vid, i) => <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{vid}</span>)}
          </div>
        </div>
        <button type="submit" className="bg-green-600 text-white rounded p-2 font-bold hover:bg-green-700">Salvar Projeto</button>
      </form>
      <h2 className="text-xl font-bold mb-4">Projetos cadastrados</h2>
      <div className="grid gap-4 max-w-2xl">
        {projetos.map((proj, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4">
            <div className="font-bold text-lg">{proj.nome}</div>
            <div className="text-gray-700 mb-2">{proj.descricao}</div>
            <div className="text-sm text-gray-500 mb-2">Responsável: {proj.responsavel}</div>
            <div className="flex gap-2 flex-wrap mb-2">
              {proj.imagens.map((img, i) => <img key={i} src={img} alt="img" className="w-16 h-16 object-cover rounded" />)}
            </div>
            <div className="flex gap-2 flex-wrap">
              {proj.videos.map((vid, i) => <a key={i} href={vid} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs">{vid}</a>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 