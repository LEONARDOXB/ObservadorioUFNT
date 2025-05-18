import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
      <p>
        Este projeto tem como objetivo combater a desinformação na região norte do Brasil, promovendo educação midiática e monitoramento de fake news. (Edite este texto conforme necessário)
      </p>
    </div>
  );
}

export function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf6f6] to-white flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#8B0000] p-3 rounded-full">
            <Mail className="text-white w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold text-[#8B0000]">Contato</h1>
        </div>
        <div className="space-y-4 text-lg text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="text-[#8B0000] w-5 h-5" />
            <a href="mailto:info@observatorionorte.org" className="underline">info@observatorionorte.org</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-[#8B0000] w-5 h-5" />
            <span>+55 63 99999-9999</span>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-500 text-sm">
            Ou preencha o formulário abaixo para entrar em contato:
          </p>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full border rounded px-3 py-2"
            />
            <textarea
              placeholder="Sua mensagem"
              className="w-full border rounded px-3 py-2"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-[#8B0000] text-white font-bold py-2 rounded hover:bg-[#a30000] transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 