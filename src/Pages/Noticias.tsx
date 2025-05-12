import React, { useState } from 'react';
import { BookOpen, Users, Youtube, ArrowRight, Menu, X, XCircle, Search, Newspaper } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSpotify, faYoutube, faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { LanguagesSelector } from '../../src/routes/LanguagesSelector';
import { FileUpload } from '../components/ui/file-upload';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

function Home() {
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 via-red-700 to-orange-900">
      {/* Header */}
      <header className="bg-red-950/30 backdrop-blur-md border-b border-orange-200/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/imagens/observatorio-logo.png.jpeg"
                alt="Observatório de Desinformação & Fake News - Norte"
                className="h-20 w-20 rounded-full object-cover border-2 border-orange-200/50"
              />
              <span className="text-2xl font-bold text-orange-50">
                Observatório Norte
              </span>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-orange-50 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <div className="hidden md:flex items-center gap-3">
                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSpotify} className="text-white hover:text-green-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <a
                  href="/"
                  onClick={() => setActiveSection('#articles')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  REPOSITÓRIO
                </a>
                <a
                  href="/equipe"
                  onClick={() => setActiveSection('#equipe')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  EQUIPE
                </a>
                <a
                  href="/pesquisa"
                  onClick={() => setActiveSection('#research')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  PESQUISA
                </a>
                <a
                  href="noticias"
                  onClick={() => setActiveSection('#news')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  NOTÍCIAS
                </a>
                <Link
                  to="https://www.youtube.com/@observatorionorte"
                  onClick={() => setActiveSection('#lectures')}
                  className={`group flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-pink-300 scale-105'
                      : 'text-white hover:text-pink-300 hover:scale-105'}`}
                >
                  <Youtube className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span>PALESTRAS</span>
                </Link>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="bg-orange-50 hover:bg-orange-100 text-red-900 px-4 lg:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-200/20 flex items-center gap-2">
                ENTRAR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-red-950/90 rounded-lg p-4 backdrop-blur-sm border border-orange-200/20">
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  REPOSITÓRIO
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  EQUIPE
                </a>
                <a
                  href="/pesquisa"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  PESQUISA
                </a>
                <a
                  href="/noticias"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  NOTÍCIAS
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  PALESTRA
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-orange-50 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-red-900 mb-8">Últimas Notícias Verificadas</h1>
          
          <div className="space-y-8">
            {/* Notícia 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt="Fake News Desmascaradas"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">FAKE NEWS</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title="Editar notícia"
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Laboratório de Pesquisa"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Brasil anuncia vacina 100% nacional contra a dengue</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Esta notícia que circula nas redes sociais é falsa. A única vacina contra dengue aprovada pela Anvisa é a Qdenga, do laboratório Takeda.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      A vacina Qdenga é produzida pelo laboratório japonês Takeda
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Foi aprovada pela Anvisa em março de 2023
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      O Brasil ainda não possui vacina própria contra a dengue
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt="Fake News Desmascaradas"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">FAKE NEWS</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title="Editar notícia"
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Medicamentos"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Ivermectina previne contra a dengue</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Mensagens virais afirmam falsamente que a ivermectina pode prevenir a dengue. Não há evidência científica que comprove essa informação.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Não existe medicamento que previna a dengue
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      A ivermectina é um antiparasitário sem efeito contra vírus
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      A prevenção eficaz é combater o mosquito transmissor
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt="Fake News Desmascaradas"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">FAKE NEWS</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title="Editar notícia"
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Mosquito"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Fumacê do governo espalha o vírus da dengue</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Esta teoria conspiratória é completamente falsa. O fumacê contém inseticida que elimina mosquitos adultos transmissores da dengue.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      O fumacê contém inseticida específico para mosquitos
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      É uma medida complementar de controle do Aedes aegypti
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      A aplicação segue normas técnicas e de segurança
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt="Fake News Desmascaradas"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">FAKE NEWS</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title="Editar notícia"
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Plantas Medicinais"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Chá de folha de papaia cura dengue em 48 horas</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Esta informação que circula em redes sociais é perigosa e falsa. Não existe "cura natural" para a dengue.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      O tratamento da dengue requer acompanhamento médico
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Hidratação adequada é fundamental
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Remédios caseiros podem Agravar o Quadro
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 5 - Adicionada */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt="Fake News Desmascaradas"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">FAKE NEWS</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title="Editar notícia"
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581092921461-39b2f2f8a1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Tecnologia"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Tecnologia 5G causa câncer e outras doenças</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Alegações sobre os perigos da tecnologia 5G para a saúde são infundadas e não possuem base científica comprovada.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      A radiação do 5G é não-ionizante e não danifica células
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Estudos mostram que não há relação entre 5G e câncer
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      A tecnologia foi amplamente testada antes da implantação
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 6 - Adicionada */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt="Fake News Desmascaradas"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">FAKE NEWS</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title="Editar notícia"
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Alimentos"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Alimentos transgênicos causam mutações genéticas</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Esta afirmação sobre alimentos geneticamente modificados é falsa e já foi desmentida por diversos estudos científicos.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">A Verdade:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Transgênicos são estudados há mais de 30 anos
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Organismos internacionais atestam sua segurança
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Podem ajudar a combater a fome no mundo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border-2 border-red-200">
            <p className="text-red-800 text-center">
              Todas as verificações são baseadas em dados oficiais do Ministério da Saúde e instituições científicas credenciadas.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-950/30 backdrop-blur-md py-8 md:py-12 border-t border-orange-200/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4 cursor-pointer group hover:scale-105 transition-transform">
                <img
                  src="/imagens/observatorio-logo.png.jpeg"
                  alt="Observatoire Norte Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold group-hover:text-orange-300 transition-colors text-orange-50">
                  Observatoire Norte
                </span>
              </div>
              <p className="text-xs md:text-sm text-orange-100">
                Conduite à desinterrogation d'une revue com-preparée n° 042-0250.
              </p>
              {/* Redes Sociais */}
              <div className="flex items-center gap-3 mt-4">
                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSpotify} className="text-white hover:text-green-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-orange-200 mb-3 md:mb-4">Limis Unies</h3>
              <ul className="space-y-2 text-xs md:text-sm text-orange-100">
                <li>Sobre</li>
                <li>Propriété</li>
                <li>Professionnelle</li>
                <li>Contacts</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-orange-200 mb-3 md:mb-4">Recurses</h3>
              <ul className="space-y-2 text-xs md:text-sm text-orange-100">
                <li>Base de Confessionnels</li>
                <li>Formatoires</li>
                <li>API</li>
                <li>FASI</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-yellow-300 transition-colors cursor-pointer text-sm md:text-base text-white">
                Newsletter
              </h4>
              <p className="text-xs md:text-sm text-orange-100 mb-3 md:mb-4">
                Receba as últimas atualizações sobre pesquisas.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-orange-900/50 rounded-full px-3 py-1 md:px-4 md:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-orange-900/70 transition-colors text-xs md:text-sm text-white placeholder-orange-200"
                />
                <button className="bg-gradient-to-r bg-white to-white hover:from-yellow-600 hover:to-orange-300 text-white rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 hover:scale-105 text-xs md:text-sm">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-200/20 mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="text-center">
              <p className="text-orange-100 text-xs md:text-sm">
                © {new Date().getFullYear()} Observatoire Norte, boire ou étudier reservable.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="relative">
        <LanguagesSelector />
      </div>

      {/* Modal de Upload */}
      <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Upload de Arquivos</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <FileUpload 
              onChange={(files) => {
                console.log('Arquivos selecionados:', files);
                // Aqui você pode fazer o que quiser com os arquivos
                // Por exemplo, enviar para um servidor
              }} 
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;