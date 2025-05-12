import { BookOpen, Users, Youtube, ArrowRight, Menu, X, AlertTriangle, Share2, CheckCircle2, XCircle, Search, Brain, Newspaper, ChevronLeft, ChevronRight, Sparkles, Stars } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSpotify, faYoutube, faTiktok, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from '../components/ui/Carousel';
import { useLanguage } from '../../src/contexts/LanguageContext';

function Home() {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Welcome animation states
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  const slideData = [
    {
      title: t('slide_1_title'),
      button: t('explore_button'),
      src: "/imagens/Imagem do WhatsApp de 2025-04-21 à(s) 19.09.44_844b8ff4.jpg",
    },
    {
      title: t('slide_2_title'),
      button: t('explore_button'),
      src: "/imagens/1.png",
    },
    {
      title: t('slide_3_title'),
      button: t('explore_button'),
      src: "/imagens/2.png",
    },
    {
      title: t('slide_4_title'),
      button: t('explore_button'),
      src: "/imagens/3.png",
    },
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowText(true), 500),
      setTimeout(() => setShowSparkles(true), 1500),
      setTimeout(() => setShowHeader(true), 3500),
      setTimeout(() => {
        setShowWelcome(false);
        setIsVisible(true);
      }, 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Mobile adjustments
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const articles = [
    {
      id: 1,
      title: t('fake_news_example_1'),
      category: t('alert_category'),
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      link: "#",
    },
    {
      id: 2,
      title: t('how_to_identify_fake_news'),
      category: t('education_category'),
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
      link: "#",
    },
    {
      id: 3,
      title: t('recent_research_on_disinformation'),
      category: t('research_category'),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      link: "#",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-rose-400/90 text-white overflow-x-hidden" dir={language.dir}>
      {/* Welcome Screen with bg-rose-400/90 */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 bg-rose-400/90 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2000}ms`,
                  animationDuration: `${1000 + Math.random() * 2000}ms`,
                }}
              />
            ))}
          </div>

          <div className="relative text-center px-4">
            <div className="relative">
              <div
                className={`absolute -left-8 sm:-left-12 -top-8 sm:-top-12 transition-all duration-1000 ${showSparkles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <Stars className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 animate-spin-slow" />
              </div>
              <div
                className={`absolute -right-8 sm:-right-12 -bottom-8 sm:-bottom-12 transition-all duration-1000 delay-300 ${showSparkles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 animate-bounce" />
              </div>

              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider transition-all duration-1000
    ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                style={{
                  color: 'white', // Alterado de '#FF2D6F' para 'white'
                
                }}
              >
                {t('welcome')}
              </h1>

              <div
                className={`h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 delay-500 mx-auto
                  ${showText ? 'w-full opacity-70' : 'w-0 opacity-0'}`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className={`transition-opacity duration-1000 ${showHeader ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <header className="bg-rose-400/90 border-b border-white/20 py-3 sm:py-4 sticky top-0 z-50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <img
                  src="/imagens/observatorio-logo.png.jpeg"
                  alt={t('observatory_logo_alt')}
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full object-cover shadow-lg shadow-purple-500/20"
                />
                <span className="font-bold text-orange-50 text-sm sm:text-base md:text-lg">
                  {t('observatory_name')}
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={t('mobile_menu_aria')}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-2 lg:gap-3">
                  <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                    <FontAwesomeIcon icon={faSpotify} className="text-white hover:text-green-500 transition-all h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                  <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-all h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                  <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                  <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all h-4 w-4 lg:h-5 lg:w-5" />
                  </a>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-2 lg:gap-4 xl:gap-6">
                  <Link
                    to="/"
                    onClick={() => setActiveSection('#articles')}
                    className={`group flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium transition-all duration-300 
                      ${activeSection === '#articles'
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <BookOpen className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span>{t('repository')}</span>
                  </Link>
                  <Link
                    to="/equipe"
                    onClick={() => setActiveSection('#equipe')}
                    className={`group flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium transition-all duration-300 
                      ${activeSection === '#equipe'
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Users className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span>{t('team')}</span>
                  </Link>
                  <Link
                    to="/pesquisa"
                    onClick={() => setActiveSection('#research')}
                    className={`group flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium transition-all duration-300 
                      ${activeSection === '#research'
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Search className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span>{t('research')}</span>
                  </Link>
                  <Link
                    to="/noticias"
                    onClick={() => setActiveSection('#news')}
                    className={`group flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium transition-all duration-300 
                      ${activeSection === '#news'
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Newspaper className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span>{t('news')}</span>
                  </Link>
                  <Link
                    to="https://www.youtube.com/@observatorionorte"
                    onClick={() => setActiveSection('#lectures')}
                    className={`group flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium transition-all duration-300 
                      ${activeSection === '#lectures'
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Youtube className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span>{t('lectures')}</span>
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-medium text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 flex items-center justify-center gap-1 lg:gap-2"
                >
                  <span>{t('login')}</span>
                  <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 bg-rose-400/90 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex flex-col space-y-3">
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
                    <BookOpen size={18} />
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
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Users size={18} />
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
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Search size={18} />
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
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Newspaper size={18} />
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
                        ? 'text-pink-300 scale-105'
                        : 'text-white hover:text-pink-300 hover:scale-105'}`}
                  >
                    <Youtube size={18} />
                    {t('lectures')}
                  </Link>
                  <button
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2 mt-2"
                  >
                    {t('login')}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Carousel Section */}
        <div className="relative w-full">
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="relative w-full h-full">
                  {article.image ? (
                    <>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <div className="text-white text-2xl sm:text-4xl md:text-6xl font-mono">{article.image}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <span className="text-red-400 text-xs sm:text-sm md:text-base font-semibold mb-2 sm:mb-4">
                      {article.category}
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-2xl mb-3 sm:mb-6">
                      {article.title}
                    </h2>
                    <a
                      href={article.link}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full transition-colors duration-200 text-xs sm:text-sm md:text-base"
                    >
                      {t('verify_facts')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-1.5 md:p-2 rounded-full transition-colors duration-200 z-10"
            aria-label={t('previous_slide')}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-1.5 md:p-2 rounded-full transition-colors duration-200 z-10"
            aria-label={t('next_slide')}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-red-500' : 'bg-white/50'}`}
                aria-label={`${t('go_to_slide')} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="relative px-4 py-6 sm:py-8 md:py-12 bg-rose-400/90">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {t('mission_title')}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-white/90">
                {t('mission_text')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 order-1 lg:order-2">
              {[
                'https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80',
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={t('mission_image_alt')}
                  className="w-full h-28 sm:h-36 md:h-44 lg:h-52 xl:h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Research Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-rose-400/90">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center hover:text-pink-400 transition-colors cursor-pointer">
              {t('latest_research')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: t('research_1_title'),
                  description: t('research_1_description'),
                  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
                },
                {
                  title: t('research_2_title'),
                  description: t('research_2_description'),
                  image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
                },
                {
                  title: t('research_3_title'),
                  description: t('research_3_description'),
                  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
                },
              ].map((research, index) => (
                <div
                  key={index}
                  className="group bg-white/10 rounded-2xl overflow-hidden hover:bg-white/20 active:bg-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm cursor-pointer"
                >
                  <img
                    src={research.image}
                    alt={research.title}
                    className="w-full h-28 sm:h-36 md:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                      {research.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/80 group-hover:text-white/90 transition-colors mb-2 sm:mb-4">
                      {research.description}
                    </p>
                    <button className="text-pink-400 group-hover:text-pink-300 transition-colors flex items-center gap-1.5 text-xs sm:text-sm">
                      {t('read_more')} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fake News Examples Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-rose-400/90">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center hover:text-pink-400 transition-colors cursor-pointer">
              {t('fake_news_examples')}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 text-white/90 text-xs sm:text-sm md:text-base">
              {t('fake_news_description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: t('example_1_title'),
                  content: t('example_1_content'),
                  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: t('science_category'),
                  shares: 2150,
                },
                {
                  title: t('example_2_title'),
                  content: t('example_2_content'),
                  image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: t('technology_category'),
                  shares: 3890,
                },
                {
                  title: t('example_3_title'),
                  content: t('example_3_content'),
                  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: t('health_category'),
                  shares: 2765,
                },
              ].map((news, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg hover:shadow-white/10"
                >
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-1.5 right-1.5 bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs font-bold">{t('fake_news_label')}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{news.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">{news.content}</p>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Share2 size={14} />
                        <span>{news.shares.toLocaleString()} {t('shares')}</span>
                      </div>
                      <button className="text-pink-400 hover:text-pink-300 flex items-center gap-1">
                        <BookOpen size={14} />
                        {t('analysis')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Identify Fake News */}
            <div className="mt-8 sm:mt-12 bg-white/10 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
                {t('how_to_identify')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: CheckCircle2,
                    color: 'text-green-400',
                    title: t('tip_1_title'),
                    description: t('tip_1_description'),
                  },
                  {
                    icon: XCircle,
                    color: 'text-red-400',
                    title: t('tip_2_title'),
                    description: t('tip_2_description'),
                  },
                  {
                    icon: Search,
                    color: 'text-blue-400',
                    title: t('tip_3_title'),
                    description: t('tip_3_description'),
                  },
                  {
                    icon: Brain,
                    color: 'text-purple-400',
                    title: t('tip_4_title'),
                    description: t('tip_4_description'),
                  },
                ].map(({ icon: Icon, color, title, description }, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <Icon className={`h-5 w-5 ${color} mt-1 flex-shrink-0 sm:h-6 sm:w-6`} />
                    <div>
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{title}</h4>
                      <p className="text-xs sm:text-sm text-white/80">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-rose-400/90">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
              {t('partners')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
              {[
                { href: 'https://www.gov.br', src: '/imagens/brasil ufnt.png', alt: 'Brasil UFNT' },
                { href: 'https://www.gov.br/cnpq', src: '/imagens/cnpq.png', alt: 'CNPq' },
                { href: 'https://www.gov.br', src: '/imagens/governofederal.png', alt: 'Governo Federal' },
                { href: 'https://www.observatorio.org', src: '/imagens/observatorio.png', alt: 'Observatório' },
                { href: 'https://www.gov.br/saude', src: '/imagens/sus.png', alt: 'SUS' },
                { href: 'https://www.ufnt.edu.br', src: '/imagens/ufnt.jpg', alt: 'UFNT' },
                { href: 'https://www.observatorio.org', src: '/imagens/observatorio-logo.png.jpeg', alt: 'Observatório Logo' },
              ].map(({ href, src, alt }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                  <img
                    src={src}
                    alt={alt}
                    className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-lg"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
                {t('photo_gallery')}
              </h2>
              <Carousel slides={slideData} />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-rose-400/90 py-6 sm:py-8 md:py-12 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {/* Coluna 1 - Logo, descrição e redes sociais */}
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-4 cursor-pointer group hover:scale-105 transition-transform">
                  <img
                    src="/imagens/observatorio-logo.png.jpeg"
                    alt={t('observatory_logo_alt')}
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="font-bold group-hover:text-pink-400 transition-colors text-sm sm:text-base">
                    {t('observatory_name')}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 group-hover:text-white/90 transition-colors">
                  {t('footer_description')}
                </p>
                {/* Redes Sociais */}
                <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                    <FontAwesomeIcon icon={faSpotify} className="text-white hover:text-green-500 transition-all h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://www.youtube.com/@observatorionorte" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-red-500 transition-all h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>

              {/* Coluna 2 - Links rápidos */}
              <div>
                <h4 className="font-semibold mb-2 sm:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  {t('quick_links')}
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-white/80">
                  {[t('about'), t('research'), t('publications'), t('contact')].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block transform text-xs sm:text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 3 - Recursos */}
              <div>
                <h4 className="font-semibold mb-2 sm:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  {t('resources')}
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-white/80">
                  {[t('knowledge_base'), t('tools'), t('api'), t('faq')].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block transform text-xs sm:text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 4 - Newsletter */}
              <div>
                <h4 className="font-semibold mb-2 sm:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  {t('newsletter')}
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-4">
                  {t('newsletter_description')}
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder={t('your_email')}
                    className="bg-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-white/20 transition-colors text-xs sm:text-sm"
                  />
                  <button className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 text-xs sm:text-sm whitespace-nowrap">
                    {t('subscribe')}
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 text-center text-white/80">
              <p className="hover:text-white transition-colors text-xs sm:text-sm">
                {t('copyright', { year: new Date().getFullYear() })}
              </p>
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
      </div>
    </div>
  );
}

export default Home;