import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle2, XCircle, Menu, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  title: string;
  status: 'fake' | 'true' | 'partial';
  description: string;
  date: string;
  image: string;
  shares: number;
  category: string;
}

function Pesquisa() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const news: NewsItem[] = [
    {
      title: 'Vacina contra COVID-19 altera DNA humano',
      status: 'fake',
      description: 'Esta informação é FALSA. Estudos científicos comprovam que as vacinas não alteram o DNA humano. A tecnologia utilizada nas vacinas não tem capacidade de modificar o material genético das células.',
      date: '15/03/2024',
      image: 'https://images.unsplash.com/photo-1632685062337-095b722134ca?w=800&auto=format&fit=crop&q=80',
      shares: 15234,
      category: 'Saúde'
    },
    {
      title: 'Vacinas causam autismo em crianças',
      status: 'fake',
      description: 'Esta informação é FALSA. Não existe nenhuma evidência científica que comprove qualquer ligação entre vacinas e autismo. O estudo que originou esse mito foi completamente desacreditado pela comunidade científica.',
      date: '16/03/2024',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80',
      shares: 12567,
      category: 'Saúde'
    },
    {
      title: 'Nova vacina contra dengue aprovada pela Anvisa',
      status: 'true',
      description: 'Esta informação é VERDADEIRA. A Anvisa aprovou uma nova vacina contra dengue que demonstrou alta eficácia em testes clínicos. A vacinação será realizada pelo SUS seguindo um calendário específico.',
      date: '14/03/2024',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80',
      shares: 8456,
      category: 'Saúde'
    },
    {
      title: 'Novo programa de auxílio governamental',
      status: 'true',
      description: 'Esta informação é VERDADEIRA. O programa foi oficialmente anunciado pelo governo federal através dos canais oficiais e já está em implementação.',
      date: '14/03/2024',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
      shares: 8456,
      category: 'Política'
    },
    {
      title: 'Mudanças no horário de verão',
      status: 'partial',
      description: 'Esta informação é PARCIALMENTE VERDADEIRA. Existem estudos sobre o tema, mas ainda não há decisão oficial do governo sobre a implementação de mudanças no horário de verão.',
      date: '13/03/2024',
      image: 'https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=80',
      shares: 5678,
      category: 'Política'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'fake':
        return <XCircle className="text-red-600 animate-pulse" size={28} />;
      case 'true':
        return <CheckCircle2 className="text-emerald-600 animate-pulse" size={28} />;
      case 'partial':
        return <AlertTriangle className="text-amber-500 animate-pulse" size={28} />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'fake':
        return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-300';
      case 'true':
        return 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-300';
      case 'partial':
        return 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-300';
      default:
        return '';
    }
  };

  const getHeaderClass = (status: string) => {
    switch (status) {
      case 'fake':
        return 'from-red-400 via-pink-500 to-purple-600';
      case 'true':
        return 'from-emerald-400 via-teal-500 to-cyan-600';
      case 'partial':
        return 'from-amber-400 via-orange-500 to-red-600';
      default:
        return '';
    }
  };

  const filteredNews = news.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400 animate-gradient">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl border-b-4 border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Menu className="h-8 w-8 text-cyan-300 animate-pulse" />
              <h1 className="text-2xl font-bold animate-gradient bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 text-transparent bg-clip-text">
                Verificador de Notícias
              </h1>
            </div>
            <Link 
              to="/" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Voltar para Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white py-20 shadow-2xl border-b-4 border-white/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 animate-gradient bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 text-transparent bg-clip-text drop-shadow-lg">
              Verifique a veracidade das notícias
            </h2>
            <p className="text-2xl mb-10 text-cyan-200 drop-shadow-lg">
              Combata a desinformação com informações verificadas e confiáveis
            </p>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <input
                type="text"
                placeholder="Pesquisar notícias..."
                className="w-full px-8 py-6 pl-14 rounded-2xl text-gray-900 shadow-2xl focus:ring-4 focus:ring-cyan-300 focus:outline-none bg-white/95 backdrop-blur-xl border-2 border-white/50 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-6 text-purple-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white">Nenhuma notícia encontrada</h3>
            <p className="text-white/80 mt-4">Tente alterar seus termos de pesquisa</p>
          </div>
        ) : (
          <div className="grid gap-10 max-w-4xl mx-auto">
            {filteredNews.map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] border-2 border-white/50 hover:border-cyan-200"
              >
                <div className={`h-3 bg-gradient-to-r ${getHeaderClass(item.status)}`} />
                <div className="p-10">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-56 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
                      />
                      <div className="mt-4 text-center">
                        <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-transparent bg-clip-text">
                          {item.title}
                        </h3>
                        {getStatusIcon(item.status)}
                      </div>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-8 py-3 rounded-full text-sm font-bold border-2 ${getStatusClass(item.status)} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                          {item.status === 'fake' ? 'FAKE NEWS' : item.status === 'true' ? 'VERDADEIRO' : 'PARCIALMENTE VERDADEIRO'}
                        </span>
                        <div className="flex items-center space-x-8">
                          <div className="flex items-center text-purple-600 hover:text-fuchsia-600 transition-colors duration-300">
                            <Share2 size={20} className="mr-2" />
                            <span className="text-base font-semibold">{item.shares.toLocaleString()}</span>
                          </div>
                          <span className="text-violet-600 text-base font-medium">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 py-12 mt-16 border-t-4 border-white/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-bold text-2xl animate-gradient bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 text-transparent bg-clip-text">
              © 2024 Verificador de Notícias
            </p>
            <p className="mt-4 text-white text-lg">
              Um serviço de verificação de fatos para combater a desinformação.
            </p>
            <Link 
              to="/" 
              className="inline-block mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-100 transition-colors duration-300"
            >
              Voltar para página inicial
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Pesquisa;