import React, { useState } from 'react';
import { BookOpen, Users, Youtube, ArrowRight, Menu, X, XCircle, Search, Newspaper } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSpotify, faYoutube, faTiktok, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FileUpload } from '../components/ui/file-upload';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { useLanguage } from '../../src/contexts/LanguageContext';

function Noticias() {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 via-red-700 to-orange-900" dir={language.dir}>
      {/* Header */}
      <header className="bg-red-950/30 backdrop-blur-md border-b border-orange-200/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/imagens/observatorio-logo.png.jpeg"
                alt={t('observatory_logo_alt')}
                className="h-20 w-20 rounded-full object-cover border-2 border-orange-200/50"
              />
              <span className="text-2xl font-bold text-orange-50">
                {t('observatory_name')}
              </span>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-orange-50 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t('mobile_menu_aria')}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <div className="hidden md:flex items-center gap-3">
                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <FontAwesomeIcon icon={faSpotify} className="text-white hover:text-green-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <Link
                  to="/"
                  onClick={() => setActiveSection('#articles')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('repository')}
                </Link>
                <Link
                  to="/equipe"
                  onClick={() => setActiveSection('#equipe')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('team')}
                </Link>
                <Link
                  to="/pesquisa"
                  onClick={() => setActiveSection('#research')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('research')}
                </Link>
                <Link
                  to="/noticias"
                  onClick={() => setActiveSection('#news')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('news')}
                </Link>
                <Link
                  to="https://www.youtube.com/@observatorionorte"
                  onClick={() => setActiveSection('#lectures')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('lectures')}
                </Link>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="bg-orange-50 hover:bg-orange-100 text-red-900 px-4 lg:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-200/20 flex items-center gap-2">
                {t('login')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-red-950/90 rounded-lg p-4 backdrop-blur-sm border border-orange-200/20">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
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
                  {t('repository')}
                </Link>
                <Link
                  to="/equipe"
                  onClick={() => {
                    setActiveSection('#equipe');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('team')}
                </Link>
                <Link
                  to="/pesquisa"
                  onClick={() => {
                    setActiveSection('#research');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('research')}
                </Link>
                <Link
                  to="/noticias"
                  onClick={() => {
                    setActiveSection('#news');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Newspaper size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('news')}
                </Link>
                <Link
                  to="https://www.youtube.com/@observatorionorte"
                  onClick={() => {
                    setActiveSection('#lectures');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-orange-300 scale-105'
                      : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-orange-300" />
                  {t('lectures')}
                </Link>
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 mt-2"
                >
                  {t('login')}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-orange-50 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-red-900 mb-8">{t('latest_verified_news')}</h1>
          
          <div className="space-y-8">
            {/* Notícia 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt={t('fake_news_unmasked')}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">{t('fake_news_label')}</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title={t('edit_news')}
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt={t('research_lab')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('news_1_title')}</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {t('news_1_content')}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">{t('the_truth')}:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_1_truth_1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_1_truth_2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_1_truth_3')}
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
                    alt={t('fake_news_unmasked')}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">{t('fake_news_label')}</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title={t('edit_news')}
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt={t('medicines')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('news_2_title')}</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {t('news_2_content')}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">{t('the_truth')}:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_2_truth_1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_2_truth_2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_2_truth_3')}
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
                    alt={t('fake_news_unmasked')}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">{t('fake_news_label')}</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title={t('edit_news')}
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt={t('mosquito')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('news_3_title')}</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {t('news_3_content')}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">{t('the_truth')}:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_3_truth_1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_3_truth_2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_3_truth_3')}
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
                    alt={t('fake_news_unmasked')}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">{t('fake_news_label')}</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title={t('edit_news')}
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt={t('medicinal_plants')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('news_4_title')}</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {t('news_4_content')}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">{t('the_truth')}:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_4_truth_1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_4_truth_2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_4_truth_3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt={t('fake_news_unmasked')}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">{t('fake_news_label')}</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title={t('edit_news')}
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581092921461-39b2f2f8a1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt={t('technology')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('news_5_title')}</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {t('news_5_content')}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">{t('the_truth')}:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_5_truth_1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_5_truth_2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_5_truth_3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notícia 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/imagens/G1.png"
                    alt={t('fake_news_unmasked')}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-600 animate-pulse" size={28} />
                    <span className="text-red-600 font-bold">{t('fake_news_label')}</span>
                  </div>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 transition-colors p-2" 
                  title={t('edit_news')}
                  onClick={() => setUploadModalOpen(true)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt={t('food')}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('news_6_title')}</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  {t('news_6_content')}
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                  <h4 className="font-semibold mb-2 text-red-800">{t('the_truth')}:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_6_truth_1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_6_truth_2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {t('news_6_truth_3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border-2 border-red-200">
            <p className="text-red-800 text-center">
              {t('verification_based_on_official_data')}
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
                  alt={t('observatory_logo_alt')}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold group-hover:text-orange-300 transition-colors text-orange-50">
                  {t('observatory_name')}
                </span>
              </div>
              <p className="text-xs md:text-sm text-orange-100">
                {t('footer_description')}
              </p>
              {/* Redes Sociais */}
              <div className="flex items-center gap-3 mt-4">
                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <FontAwesomeIcon icon={faSpotify} className="text-white hover:text-green-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-orange-200 mb-3 md:mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-orange-100">
                {[t('about'), t('team'), t('professionals'), t('contact')].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-orange-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-orange-200 mb-3 md:mb-4">{t('resources')}</h3>
              <ul className="space-y-2 text-xs md:text-sm text-orange-100">
                {[t('knowledge_base'), t('training'), t('api'), t('faq')].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-orange-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-yellow-300 transition-colors cursor-pointer text-sm md:text-base text-white">
                {t('newsletter')}
              </h4>
              <p className="text-xs md:text-sm text-orange-100 mb-3 md:mb-4">
                {t('newsletter_description')}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('your_email')}
                  className="bg-orange-900/50 rounded-full px-3 py-1 md:px-4 md:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-orange-900/70 transition-colors text-xs md:text-sm text-white placeholder-orange-200"
                />
                <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 hover:scale-105 text-xs md:text-sm">
                  {t('send')}
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-200/20 mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="text-center">
              <p className="text-orange-100 text-xs md:text-sm">
                {t('copyright', { year: new Date().getFullYear() })}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+556392480518&text=Quero%20fazer%20um%20agendamento!"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          {t('community_observatory')}
        </span>
      </a>

      {/* Modal de Upload */}
      <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{t('file_upload')}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <FileUpload 
              onChange={(files) => {
                console.log('Selected files:', files);
              }} 
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Noticias;