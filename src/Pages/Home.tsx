import { BookOpen, Users, Rss, BookOpenText, Youtube, ArrowRight, Menu, X, AlertTriangle, Share2, CheckCircle2, XCircle, Search, Brain, Newspaper } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSpotify, faYoutube, faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 via-purple-700 to-pink-800 text-white">
      <header className="bg-blue-900/90 py-4 sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo with increased size */}
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/imagens/observatorio-logo.png.jpeg"
                alt="Observatório de Desinformação & Fake News - Norte"
                className="h-20 w-20 rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-orange-50">
                Observatório Norte
              </span>            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-white focus:outline-none"
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
                </a>           <a href="https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500 transition-all h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/observatorio.norte/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500 transition-all h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="text-white hover:text-gray-800 transition-all  h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                <a
                  href="#"
                  onClick={() => setActiveSection('#articles')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  ARTIGOS
                </a>
                <a
                  href="/equipe"
                  onClick={() => setActiveSection('#')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#equipe'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  EQUIPE
                </a>
                <a
                  href="/pesquisa"
                  onClick={() => setActiveSection('#research')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#research'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Search size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  PESQUISA
                </a>
                <a
                  href="/noticias"
                  onClick={() => setActiveSection('#news')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#news'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Newspaper size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  NOTÍCIAS
                </a>
                <a
                  href="#"
                  onClick={() => setActiveSection('#lectures')}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#lectures'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  PALESTRAS
                </a>
              </div>
              <button
                onClick={() => navigate('/login')}
                className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white px-4 lg:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 flex items-center gap-2"
              >
                ENTRAR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-blue-900/80 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#articles');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#articles'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <BookOpen size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  ARTIGOS
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setActiveSection('#professors');
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                    ${activeSection === '#professors'
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Users size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
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
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <BookOpenText size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
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
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Rss size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
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
                      ? 'text-pink-400 scale-105'
                      : 'hover:text-pink-400 hover:scale-105'}`}
                >
                  <Youtube size={20} className="transition-colors duration-300 group-hover:text-pink-400" />
                  PALESTRAS
                </a>
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 flex items-center justify-center gap-2"
                >
                  ENTRAR
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Bem-vindo Ao Observatório
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
              Combate à desinformação e fake news com pesquisa e educação.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 text-sm md:text-base">
                Começar Agora
              </button>
              <button className="bg-white/20 hover:bg-white/30 active:bg-white/40 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 backdrop-blur-sm text-sm md:text-base">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 py-8 md:py-12 lg:py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Combate à Desinformação e Fake News com Pesquisa e Educação</h1>
            <p className="text-sm md:text-base lg:text-lg text-white/90">
              No mundo digital de hoje, a disseminação de fake news tornou-se um desafio global. Notícias falsas podem influenciar opiniões públicas, manipular eleições e até mesmo causar pânico em massa. É crucial combater essa onda de desinformação com pesquisa rigorosa e educação.
            </p>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
            {["https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Imagem"
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center hover:text-pink-400 transition-colors cursor-pointer">
            Últimas Pesquisas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Impacto das Redes Sociais",
                description: "Análise do comportamento de desinformação nas redes sociais",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
              },
              {
                title: "Tecnologias de Verificação",
                description: "Novas ferramentas para detecção de notícias falsas",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80"
              },
              {
                title: "Educação Digital",
                description: "Metodologias para desenvolvimento de pensamento crítico",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
              }
            ].map((research, index) => (
              <div key={index} className="group bg-white/10 rounded-2xl overflow-hidden hover:bg-white/20 active:bg-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm cursor-pointer">
                <img
                  src={research.image}
                  alt={research.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                    {research.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 group-hover:text-white/90 transition-colors mb-3 md:mb-4">
                    {research.description}
                  </p>
                  <button className="text-pink-400 group-hover:text-pink-300 transition-colors flex items-center gap-2 text-sm md:text-base">
                    Ler mais <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center hover:text-pink-400 transition-colors cursor-pointer">
            Exemplos Educacionais de Fake News
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-white/90">
            Conheça exemplos fictícios de fake news para aprender a identificar informações falsas.
            Todos os exemplos abaixo são totalmente inventados para fins educativos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dragões Descobertos na Amazônia",
                content: "Notícia falsa sobre suposta descoberta de dragões na floresta amazônica. Exemplo claro de como fake news usam elementos fantásticos para chamar atenção.",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "Ciência",
                shares: 2150
              },
              {
                title: "Celulares Que Leem Pensamentos",
                content: "Exemplo fictício de como a tecnologia pode ser distorcida em notícias falsas para gerar engajamento e compartilhamentos.",
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "Tecnologia",
                shares: 3890
              },
              {
                title: "Pizza Concede Imortalidade",
                content: "Exemplo absurdo de como fake news podem distorcer informações sobre alimentação e saúde para viralizar.",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "Saúde",
                shares: 2765
              },
              {
                title: "Água com Limão Cura Todas as Doenças",
                content: "Uma notícia falsa alega que beber água com limão pode curar qualquer doença, incluindo câncer e diabetes. Esta desinformação perigosa ignora a complexidade das doenças e seus tratamentos médicos comprovados.",
                image: "https://solciaequeiroz.com.br/wp-content/uploads/2022/11/Agua-saborizada-com-limao.jpg",
                category: "Saúde",
                shares: 3214
              },
              {
                title: "Vitamina Secreta Permite Viver Até 150 Anos",
                content: "Circula nas redes sociais uma falsa descoberta sobre uma vitamina milagrosa que prolongaria a vida humana até 150 anos. Esta é uma informação sem qualquer base científica.",
                image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "Saúde",
                shares: 4321
              },
              {
                title: "Alimento Comum do Café da Manhã Causa Amnésia",
                content: "Uma fake news viral afirma que um alimento comum do café da manhã brasileiro pode causar perda de memória. Esta informação é completamente falsa e não tem respaldo científico.",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "Saúde",
                shares: 1243
              }
            ].map((news, index) => (
              <div key={index} className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg hover:shadow-white/10">
                <div className="relative">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-xs">
                    {news.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="text-xs font-bold">EXEMPLO DE FAKE NEWS</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{news.content}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Share2 size={16} />
                      <span>{news.shares.toLocaleString()} compartilhamentos</span>
                    </div>
                    <button className="text-pink-400 hover:text-pink-300 flex items-center gap-1">
                      <BookOpen size={16} />
                      Análise
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Como Identificar Fake News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Verifique a Fonte</h4>
                  <p className="text-sm text-white/80">Sempre confira se a notícia vem de um veículo jornalístico reconhecido e confiável.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Cuidado com Títulos Sensacionalistas</h4>
                  <p className="text-sm text-white/80">Títulos exagerados ou muito emocionais são um sinal de alerta.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Search className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Consulte Outras Fontes</h4>
                  <p className="text-sm text-white/80">Veja se outros veículos confiáveis estão reportando o mesmo fato.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Use o Pensamento Crítico</h4>
                  <p className="text-sm text-white/80">Questione se a informação faz sentido e se há provas concretas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Parceiros
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            <img src="/imagens/brasil ufnt.png" alt="Brasil UFNT" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
            <img src="/imagens/cnpq.png" alt="CNPq" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
            <img src="/imagens/governofederal.png " alt="Governo Federal" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
            <img src="/imagens/observatorio.png" alt="Observatório" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
            <img src="/imagens/sus.png" alt="SUS" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
            <img src="/imagens/ufnt.png" alt="UFNT" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
            <img src="/imagens/observatorio-logo.png.jpeg" alt="Observatório Logo" className="h-16 object-contain mx-auto hover:scale-110 transition-transform rounded-2xl"
            />
          </div>
        </div>
      </section>
      <footer className="bg-blue-900/90 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4 cursor-pointer group hover:scale-105 transition-transform">
                <img
                  src="/imagens/observatorio-logo.png.jpeg"
                  alt="Observatório Logo"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold group-hover:text-pink-400 transition-colors">
                  Observatório Norte
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/80 group-hover:text-white/90 transition-colors">
                Promovendo a verdade e combatendo a desinformação através da pesquisa e educação.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm md:text-base">
                Links Rápidos
              </h4>
              <ul className="space-y-1 md:space-y-2 text-white/80">
                {['Sobre', 'Pesquisa', 'Publicações', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block transform text-xs md:text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm md:text-base">
                Recursos
              </h4>

              <ul className="space-y-1 md:space-y-2 text-white/80">
                {['Base de Conhecimento', 'Ferramentas', 'API', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-pink-400 transition-colors hover:translate-x-1 inline-block transform text-xs md:text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-pink-400 transition-colors cursor-pointer text-sm md:text-base">
                Newsletter
              </h4>
              <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                Receba as últimas atualizações sobre pesquisas e eventos.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 rounded-full px-3 py-1 md:px-4 md:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:bg-white/20 transition-colors text-xs md:text-sm"
                />
                <button className="bg-pink-600 hover:bg-pink-700 active:bg-pink-800 rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/20 text-xs md:text-sm whitespace-nowrap">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-white/80">
            <p className="hover:text-white transition-colors text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Observatório Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;