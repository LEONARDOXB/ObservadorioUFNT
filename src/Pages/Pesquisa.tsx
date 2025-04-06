import React, { useState } from 'react';
import { BookOpen, Users, Rss, Youtube, ArrowRight, Menu, X, AlertTriangle, Share2, CheckCircle2, XCircle, Search, Newspaper,} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";

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
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Header Atualizado */}
      <header className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-2xl border-b-4 border-white/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/imagens/observatorio-logo.png.jpeg"
                alt="Observatório de Desinformação & Fake News - Norte"
                className="h-20 w-20 rounded-full object-cover border-2 border-white/50"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-200 text-transparent bg-clip-text">
                Observatório Norte
              </span>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <div className="hidden md:flex items-center gap-3">
                <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={18} className="text-white hover:text-cyan-300 transition-all" />
                </a>
                <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={18} className="text-white hover:text-cyan-300 transition-all" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={18} className="text-white hover:text-cyan-300 transition-all" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={18} className="text-white hover:text-pink-300 transition-all" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={18} className="text-white hover:text-cyan-300 transition-all" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <a
                  href="/"
                  onClick={() => setActiveSection('#articles')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  ARTIGOS
                </a>
                <a
                  href="/equipe"
                  onClick={() => setActiveSection('#equipe')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  EQUIPE
                </a>
                <a
                  href="/pesquisa"
                  onClick={() => setActiveSection('#research')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`
                  }
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  PESQUISA
                </a>
                <a
                  href="#"
                  onClick={() => setActiveSection('#news')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  NOTÍCIAS
                </a>
                <a
                  href="#"
                  onClick={() => setActiveSection('#lectures')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  PALESTRAS
                </a>
              </div>
              <button className="bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 text-purple-900 px-4 lg:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 flex items-center gap-2">
                ENTRAR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-purple-700/90 rounded-lg p-4 backdrop-blur-sm border border-white/20">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  ARTIGOS
                </a>
                <a
                  href="/equipe"
                  onClick={() => {
                    setActiveSection('#equipe');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  EQUIPE
                </a>
                <a
                  href="/pesquisa"
                  onClick={() => {
                    setActiveSection('#research');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  PESQUISA
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#news');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Rss size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  NOTÍCIAS
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#lectures');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-cyan-300 scale-105'
                      : 'hover:text-cyan-300 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-cyan-300" />
                  PALESTRAS
                </a>
                <button className="bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 text-purple-900 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 flex items-center justify-center gap-2">
                  ENTRAR
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/90 via-fuchsia-600/90 to-pink-600/90 text-white py-20 shadow-2xl border-b-4 border-white/20">
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
      <footer className="bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-500/90 py-8 md:py-12 border-t-4 border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Coluna 1 - Logo e Descrição (Estilo Home) */}
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4 cursor-pointer group hover:scale-105 transition-transform">
                <img
                  src="/imagens/observatorio-logo.png.jpeg"
                  alt="Observatório Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold group-hover:text-pink-300 transition-colors text-white">
                  Observatório Norte
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/80 group-hover:text-white/90 transition-colors">
                Combate à desinformação e fake news com pesquisa e educação.
              </p>
            </div>

            {/* Coluna 2 - Links (Conteúdo da Pesquisa) */}
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-300 transition-colors cursor-pointer text-sm md:text-base text-white">
                Links Úteis
              </h4>
              <ul className="space-y-1 md:space-y-2 text-white/80">
                {['Sobre', 'Pesquisa', 'Publicações', 'Contato'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-pink-300 transition-colors hover:translate-x-1 inline-block transform text-xs md:text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Recursos (Conteúdo da Pesquisa) */}
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-300 transition-colors cursor-pointer text-sm md:text-base text-white">
                Recursos
              </h4>
              <ul className="space-y-1 md:space-y-2 text-white/80">
                {['Base de Conhecimento', 'Ferramentas', 'API', 'FAQ'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-pink-300 transition-colors hover:translate-x-1 inline-block transform text-xs md:text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 - Newsletter (Estilo Home) */}
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-300 transition-colors cursor-pointer text-sm md:text-base text-white">
                Newsletter
              </h4>
              <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                Receba as últimas atualizações sobre pesquisas.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 rounded-full px-3 py-1 md:px-4 md:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-white/20 transition-colors text-xs md:text-sm text-white placeholder-white/60"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 hover:scale-105 text-xs md:text-sm">
                  Enviar
                </button>
              </div>
            </div>
          </div>

          {/* Rodapé Inferior (Estilo Pesquisa) */}
          <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="text-center">

              <p className="text-white/80 text-xs md:text-sm hover:text-white transition-colors">
                © {new Date().getFullYear()} Observatório Norte. Todos os direitos reservados.
              </p>
              <Link
                to="/"
                className="inline-block mt-4 bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Voltar para página inicial
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Pesquisa;