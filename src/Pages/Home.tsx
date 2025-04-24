import { BookOpen, Users, Rss, BookOpenText, Youtube, ArrowRight, Menu, X, AlertTriangle, Share2, CheckCircle2, XCircle, Search, Brain, Newspaper, ChevronLeft, ChevronRight, Sparkles, Stars } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSpotify, faYoutube, faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from '../components/ui/Carousel';

function Home() {
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
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/imagens/Imagem do WhatsApp de 2025-04-21 à(s) 19.09.44_844b8ff4.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/imagens/1.png",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/imagens/2.png",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const articles = [
    {
      id: 1,
      title: "Exemplo de Fake News sobre Saúde",
      category: "ALERTA",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      link: "#",
    },
    {
      id: 2,
      title: "Como Identificar Notícias Falsas",
      category: "EDUCAÇÃO",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3",
      link: "#",
    },
    {
      id: 3,
      title: "Pesquisas Recentes sobre Desinformação",
      category: "PESQUISA",
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
    <div className="min-h-screen bg-gradient-to-b from-blue-800 via-purple-700 to-pink-800 text-white overflow-x-hidden">
      {/* Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 bg-[#1e3a8a]">
          <div className="min-h-screen flex items-center justify-center overflow-hidden">
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

            <div className="relative text-center">
              <div className="relative">
                <div
                  className={`absolute -left-12 -top-12 transition-all duration-1000 ${showSparkles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <Stars className="w-8 h-8 text-yellow-300 animate-spin-slow sm:w-10 sm:h-10" />
                </div>
                <div
                  className={`absolute -right-12 -bottom-12 transition-all duration-1000 delay-300 ${showSparkles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <Sparkles className="w-8 h-8 text-yellow-300 animate-bounce sm:w-10 sm:h-10" />
                </div>

                <h1
                  className={`text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-wider shadow-glow transition-all duration-1000
                    ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                >
                  Bem Vindo!
                </h1>

                <div
                  className={`h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 delay-500
                    ${showText ? 'w-full opacity-70' : 'w-0 opacity-0'}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className={`transition-opacity duration-1000 ${showHeader ? 'opacity-100' : 'opacity-0'}`}>
        <header
          className={`bg-blue-900/90 py-3 sticky top-0 z-40 backdrop-blur-sm border-bV1 border-b border-white/10 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
                <img
                  src="/imagens/observatorio-logo.png.jpeg"
                  alt="Observatório de Desinformação & Fake News - Norte"
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
                />
                <span className="text-lg sm:text-xl font-bold text-orange-50">
                  Observatório Norte
                </span>
              </div>
              <button
                className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <div className="hidden md:flex items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  {[
                    { href: 'https://open.spotify.com/', icon: faSpotify, color: 'hover:text-green-500' },
                    { href: 'https://www.youtube.com/@observatorionorte', icon: faYoutube, color: 'hover:text-red-500' },
                    { href: 'https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1', icon: faTiktok, color: 'hover:text-blue-500' },
                    { href: 'https://facebook.com', icon: faFacebook, color: 'hover:text-blue-500' },
                    { href: 'https://www.instagram.com/observatorio.norte/', icon: faInstagram, color: 'hover:text-pink-500' },
                    { href: 'https://twitter.com', icon: faXTwitter, color: 'hover:text-gray-800' },
                  ].map(({ href, icon, color }, index) => (
                    <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={icon}
                        className={`text-white ${color} transition-all h-4 w-4 sm:h-5 sm:w-5`}
                      />
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
                  {[
                    { href: '#', section: '#articles', label: 'REPOSITÓRIO', icon: BookOpen },
                    { href: '/equipe', section: '#equipe', label: 'EQUIPE', icon: Users },
                    { href: '/pesquisa', section: '#research', label: 'PESQUISA', icon: Search },
                    { href: '/noticias', section: '#news', label: 'NOTÍCIAS', icon: Newspaper },
                    { href: 'https://www.youtube.com/@observatorionorte', section: '#lectures', label: 'PALESTRAS', icon: Youtube },
                  ].map(({ href, section, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setActiveSection(section)}
                      className={`group flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-all duration-300 
                        ${activeSection === section ? 'text-pink-400 scale-105' : 'hover:text-pink-400 hover:scale-105'}`}
                    >
                      <Icon size={16} className="transition-colors duration-300 group-hover:text-pink-400" />
                      {label}
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 flex items-center gap-1.5"
                >
                  ENTRAR
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </nav>

            {mobileMenuOpen && (
              <div className="md:hidden mt-3 bg-blue-900/80 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex flex-col space-y-3">
                  {[
                    { href: '#', section: '#articles', label: 'REPOSITÓRIO', icon: BookOpen },
                    { href: '#', section: '#professors', label: 'EQUIPE', icon: Users },
                    { href: '/pesquisa', section: '#research', label: 'PESQUISA', icon: BookOpenText },
                    { href: '#', section: '#news', label: 'NOTÍCIAS', icon: Rss },
                    { href: '#', section: '#lectures', label: 'PALESTRAS', icon: Youtube },
                  ].map(({ href, section, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => {
                        setActiveSection(section);
                        setMobileMenuOpen(false);
                      }}
                      className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                        ${activeSection === section ? 'text-pink-400 scale-105' : 'hover:text-pink-400 hover:scale-105'}`}
                    >
                      <Icon size={18} className="transition-colors duration-300 group-hover:text-pink-400" />
                      {label}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 flex items-center justify-center gap-2"
                  >
                    ENTRAR
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="relative w-full">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
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
                      <div className="text-white text-4xl sm:text-6xl font-mono">{article.image}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <span className="text-red-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
                      {article.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl mb-4 sm:mb-8">
                      {article.title}
                    </h2>
                    <a
                      href={article.link}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-colors duration-200 text-sm sm:text-base"
                    >
                      Verifique os fatos
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full transition-colors duration-200 z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full transition-colors duration-200 z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-red-500' : 'bg-white/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative px-4 py-6 sm:py-8 md:py-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Combate à Desinformação e Fake News com Pesquisa e Educação
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-white/90">
                No mundo digital de hoje, a disseminação de fake news tornou-se um desafio global. Notícias falsas podem influenciar opiniões públicas, manipular eleições e até mesmo causar pânico em massa. É crucial combater essa onda de desinformação com pesquisa rigorosa e educação.
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
                  alt="Imagem"
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center hover:text-pink-400 transition-colors cursor-pointer">
              Últimas Pesquisas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: 'Impacto das Redes Sociais',
                  description: 'Análise do comportamento de desinformação nas redes sociais',
                  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
                },
                {
                  title: 'Tecnologias de Verificação',
                  description: 'Novas ferramentas para detecção de notícias falsas',
                  image: 'https://images.unsplash.com/photo-150486 cubem8584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
                },
                {
                  title: 'Educação Digital',
                  description: 'Metodologias para desenvolvimento de pensamento crítico',
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
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                      Ler mais <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12 text-center hover:text-pink-400 transition-colors cursor-pointer">
              Exemplos Educacionais de Fake News
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 text-white/90 text-xs sm:text-sm md:text-base">
              Conheça exemplos fictícios de fake news para aprender a identificar informações falsas.
              Todos os exemplos abaixo são totalmente inventados para fins educativos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: 'Dragões Descobertos na Amazônia',
                  content:
                    'Notícia falsa sobre suposta descoberta de dragões na floresta amazônica. Exemplo claro de como fake news usam elementos fantásticos para chamar atenção.',
                  image:
                    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: 'Ciência',
                  shares: 2150,
                },
                {
                  title: 'Celulares Que Leem Pensamentos',
                  content:
                    'Exemplo fictício de como a tecnologia pode ser distorcida em notícias falsas para gerar engajamento e compartilhamentos.',
                  image:
                    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: 'Tecnologia',
                  shares: 3890,
                },
                {
                  title: 'Pizza Concede Imortalidade',
                  content:
                    'Exemplo absurdo de como fake news podem distorcer informações sobre alimentação e saúde para viralizar.',
                  image:
                    'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: 'Saúde',
                  shares: 2765,
                },
                {
                  title: 'Água com Limão Cura Todas as Doenças',
                  content:
                    'Uma notícia falsa alega que beber água com limão pode curar qualquer doença, incluindo câncer e diabetes. Esta desinformação perigosa ignora a complexidade das doenças e seus tratamentos médicos comprovados.',
                  image: 'https://solciaequeiroz.com.br/wp-content/uploads/2022/11/Agua-saborizada-com-limao.jpg',
                  category: 'Saúde',
                  shares: 3214,
                },
                {
                  title: 'Vitamina Secreta Permite Viver Até 150 Anos',
                  content:
                    'Circula nas redes sociais uma falsa descoberta sobre uma vitamina milagrosa que prolongaria a vida humana até 150 anos. Esta é uma informação sem qualquer base científica.',
                  image:
                    'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: 'Saúde',
                  shares: 4321,
                },
                {
                  title: 'Alimento Comum do Café da Manhã Causa Amnésia',
                  content:
                    'Uma fake news viral afirma que um alimento comum do café da manhã brasileiro pode causar perda de memória. Esta informação é completamente falsa e não tem respaldo científico.',
                  image:
                    'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: 'Saúde',
                  shares: 1243,
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
                      className="w-full h-36 sm:h-48 object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-1.5 right-1.5 bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs font-bold">EXEMPLO DE FAKE NEWS</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{news.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">{news.content}</p>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Share2 size={14} />
                        <span>{news.shares.toLocaleString()} compartilhamentos</span>
                      </div>
                      <button className="text-pink-400 hover:text-pink-300 flex items-center gap-1">
                        <BookOpen size={14} />
                        Análise
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 bg-white/10 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
                Como Identificar Fake News
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: CheckCircle2,
                    color: 'text-green-400',
                    title: 'Verifique a Fonte',
                    description: 'Sempre confira se a notícia vem de um veículo jornalístico reconhecido e confiável.',
                  },
                  {
                    icon: XCircle,
                    color: 'text-red-400',
                    title: 'Cuidado com Títulos Sensacionalistas',
                    description: 'Títulos exagerados ou muito emocionais são um sinal de alerta.',
                  },
                  {
                    icon: Search,
                    color: 'text-blue-400',
                    title: 'Consulte Outras Fontes',
                    description: 'Veja se outros veículos confiáveis estão reportando o mesmo fato.',
                  },
                  {
                    icon: Brain,
                    color: 'text-purple-400',
                    title: 'Use o Pensamento Crítico',
                    description: 'Questione se a informação faz sentido e se há provas concretas.',
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

        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
              Parceiros
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
              {[
                { href: 'https://www.gov.br', src: '/imagens/brasil ufnt.png', alt: 'Brasil UFNT' },
                { href: 'https://www.gov.br/cnpq', src: '/imagens/cnpq.png', alt: 'CNPq' },
                { href: 'https://www.gov.br', src: '/imagens/governofederal.png', alt: 'Governo Federal' },
                { href: 'https://www.observatorio.org', src: '/imagens/observatorio.png', alt: 'Observatório' },
                { href: 'https://www.gov.br/saude', src: '/imagens/sus.png', alt: 'SUS' },
                { href: 'https://www.ufnt.edu.br', src: '/imagens/ufnt.png', alt: 'UFNT' },
                { href: 'https://www.observatorio.org', src: '/imagens/observatorio-logo.png.jpeg', alt: 'Observatório Logo' },
              ].map(({ href, src, alt }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt={alt}
                    className="h-12 sm:h-14 md:h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center">
                Galeria de Fotos
              </h2>
              <Carousel slides={slideData} />
            </div>
          </div>
        </section>

        <footer className="bg-blue-900/90 py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2 sm:mb-4 cursor-pointer group hover:scale-105 transition-transform">
                  <img
                    src="/imagens/observatorio-logo.png.jpeg"
                    alt="Observatório Logo"
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="font-bold group-hover:text-pink-400 transition-colors text-sm sm:text-base">
                    Observatório Norte
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 group-hover:text-white/90 transition-colors">
                  Promovendo a verdade e combatendo a desinformação através da pesquisa e educação.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 sm:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Links Rápidos
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-white/80">
                  {['Sobre', 'Pesquisa', 'Publicações', 'Contato'].map((item) => (
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
              <div>
                <h4 className="font-semibold mb-2 sm:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Recursos
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-white/80">
                  {['Base de Conhecimento', 'Ferramentas', 'API', 'FAQ'].map((item) => (
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
              <div>
                <h4 className="font-semibold mb-2 sm:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Newsletter
                </h4>
                <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-4">
                  Receba as últimas atualizações sobre pesquisas e eventos.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="bg-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-white/20 transition-colors text-xs sm:text-sm"
                  />
                  <button className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 text-xs sm:text-sm whitespace-nowrap">
                    Inscrever
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 text-center text-white/80">
              <p className="hover:text-white transition-colors text-xs sm:text-sm">
                © {new Date().getFullYear()} Observatório Norte. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;