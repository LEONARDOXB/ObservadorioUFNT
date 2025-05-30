import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Contato() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contato</h1>
        <p>
          Para mais informações, entre em contato pelo e-mail: <a href="mailto:info@observatorionorte.org" className="text-blue-600 underline">info@observatorionorte.org</a>
        </p>
        {/* Adicione aqui outras formas de contato ou um formulário, se desejar */}
      </div>
    </>
  );
} 