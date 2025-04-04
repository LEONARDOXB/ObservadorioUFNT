import { Link } from 'react-router-dom';
import {Menu, X, ArrowRight, BookOpen, Users, Search, Newspaper, Video, Youtube } from 'lucide-react';
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from 'react';

export function Academicos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 border-b border-white/10 py-4 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/imagens/observatorio-logo.png.jpeg"
                alt="Observatório de Desinformação & Fake News - Norte"
                className="h-20 w-20 rounded-full object-cover shadow-lg shadow-purple-500/20"
              />
              <span className="text-xl font-bold text-white">Observatório Norte</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-3">
                <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={18} className="text-white hover:text-pink-300 transition-all" />
                </a>
                <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer">
                  <FaTiktok size={18} className="text-white hover:text-pink-300 transition-all" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={18} className="text-white hover:text-pink-300 transition-all" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={18} className="text-white hover:text-pink-300 transition-all" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={18} className="text-white hover:text-pink-300 transition-all" />
                </a>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <Link
                  to="/"
                  onClick={() => setActiveSection('#articles')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} />
                  ARTIGOS
                </Link>
                <Link
                  to="/equipe"
                  onClick={() => setActiveSection('#equipe')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Users size={20} />
                  EQUIPE
                </Link>
                <Link
                  to="#"
                  onClick={() => setActiveSection('#research')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Search size={20} />
                  PESQUISA
                </Link>
                <Link
                  to="#"
                  onClick={() => setActiveSection('#news')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} />
                  NOTÍCIAS
                </Link>
                <Link
                  to="#"
                  onClick={() => setActiveSection('#lectures')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Youtube size={20} />
                  PALESTRAS
                </Link>
              </div>

              {/* Login Button */}
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-2">
                ENTRAR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-gradient-to-br from-blue-600/90 to-purple-600/90 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} />
                  ARTIGOS
                </Link>
                <Link
                  to="/equipe"
                  onClick={() => {
                    setActiveSection('#equipe');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Users size={20} />
                  EQUIPE
                </Link>
                <Link
                  to="#"
                  onClick={() => {
                    setActiveSection('#research');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Search size={20} />
                  PESQUISA
                </Link>
                <Link
                  to="#"
                  onClick={() => {
                    setActiveSection('#news');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} />
                  NOTÍCIAS
                </Link>
                <Link
                  to="#"
                  onClick={() => {
                    setActiveSection('#lectures');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Video size={20} />
                  PALESTRAS
                </Link>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2">
                  ENTRAR
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-4">
        <div className="container mx-auto flex items-center space-x-2 text-sm">
          <Link to="/" className="text-pink-300 hover:text-pink-400 transition">HOME</Link>
          <span className="text-white/70">|</span>
          <Link to="/equipe" className="text-pink-300 hover:text-pink-400 transition">PROFESSORES</Link>
          <span className="text-white/70">|</span>
          <span className="text-white">ACADÊMICOS</span>
          <span className="text-white/70">|</span>
          <Link to="/mestrandos" className="text-pink-300 hover:text-pink-400 transition">MESTRANDOS</Link>
          <span className="text-white/70">|</span>
          <span className="text-white">DOUTORES</span>
          <span className="text-white/70">|</span>
          <Link to="/pesquisadores" className="text-white transition">PESQUISADORES</Link>
        </div>
      </div>

      {/* Conteúdo dos Alunos */}
      <main className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-pink-300 uppercase text-sm mb-4">CONHEÇA NOSSOS</div>
          <h1 className="text-white text-5xl font-bold mb-6">Acadêmicos</h1>
          <p className="text-white/90 text-lg max-w-3xl mb-16">
            Conheça os Acadêmicos que fazem parte do nosso observatório e contribuem para o combate à desinformação.
          </p>

          {/* Lista de Alunos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-pink-400/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={`https://source.unsplash.com/random/100x100?student&${i}`}
                    alt="Aluno"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">Aluno {i+1}</h3>
                    <p className="text-white/80 text-sm">Curso/Área</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Descrição breve sobre o aluno e suas contribuições para o observatório.
                </p>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <Link 
              to="/equipe" 
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <span>Voltar Para Equipe</span>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-500/90 py-8 md:py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
          Promovendo a verdade e combatendo a desinformação através da pesquisa e educação.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-300 transition-colors cursor-pointer text-sm md:text-base text-white">
          Links Rápidos
        </h4>
        <ul className="space-y-1 md:space-y-2 text-white/80">
          {['Sobre', 'Pesquisa', 'Publicações', 'Contato'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-pink-300 transition-colors hover:translate-x-1 inline-block transform text-xs md:text-sm">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-300 transition-colors cursor-pointer text-sm md:text-base text-white">
          Recursos
        </h4>
        <ul className="space-y-1 md:space-y-2 text-white/80">
          {['Base de Conhecimento', 'Ferramentas', 'API', 'FAQ'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-pink-300 transition-colors hover:translate-x-1 inline-block transform text-xs md:text-sm">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-300 transition-colors cursor-pointer text-sm md:text-base text-white">
          Newsletter
        </h4>
        <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
          Receba as últimas atualizações sobre pesquisas e eventos.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="bg-white/10 rounded-full px-3 py-1 md:px-4 md:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-white/20 transition-colors text-xs md:text-sm text-white placeholder-white/60"
          />
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:bg-pink-800 rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 text-xs md:text-sm whitespace-nowrap text-white">
            Inscrever
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-white/80">
      <p className="hover:text-white transition-colors text-xs md:text-sm">
        &copy; {new Date().getFullYear()} Observatório Norte. Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>
    </div>
    
  );
}