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

  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Vacina contra dengue causa efeitos colaterais graves?",
      content: "Circula nas redes sociais que a vacina contra dengue está causando efeitos colaterais graves em crianças e idosos.",
      truths: [
        "A vacina é segura e aprovada pela ANVISA",
        "Efeitos colaterais são raros e geralmente leves",
        "Benefícios superam amplamente os riscos"
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Vacina do HPV é perigosa para adolescentes?",
      content: "Mensagens alarmistas afirmam que a vacina contra HPV causa infertilidade em jovens.",
      truths: [
        "Nenhuma evidência científica comprova essa relação",
        "Vacina previne vários tipos de câncer",
        "Recomendada pela OMS para adolescentes"
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Novo mosquito transgênico causa doenças?",
      content: "Circula informação que mosquitos geneticamente modificados estão espalhando novas doenças.",
      truths: [
        "Mosquitos são estéreis e não transmitem doenças",
        "Tecnologia aprovada pelo Ministério da Saúde",
        "Reduz população de Aedes aegypti em 90%"
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Chá milagroso cura diabetes em 3 dias?",
      content: "Receita caseira promete curar diabetes sem necessidade de medicamentos.",
      truths: [
        "Diabetes não tem cura, apenas controle",
        "Tratamentos alternativos podem ser perigosos",
        "Sempre consulte um médico endocrinologista"
      ]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581092921461-39b2f2f8a1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "5G causa danos ao sistema imunológico?",
      content: "Teorias afirmam que redes 5G enfraquecem a imunidade humana.",
      truths: [
        "Nenhuma evidência científica comprova isso",
        "Radiação não-ionizante não afeta células",
        "Tecnologia testada e aprovada internacionalmente"
      ]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Alimentos orgânicos não têm agrotóxicos?",
      content: "Circula que alimentos orgânicos são totalmente livres de substâncias químicas.",
      truths: [
        "Podem conter agrotóxicos naturais",
        "Produção usa pesticidas autorizados",
        "Diferença está no tipo e quantidade usada"
      ]
    }
  ];

  const navLinks = [
    { to: "/", section: "#articles", icon: <BookOpen size={20} />, text: "Repositório" },
    { to: "/equipe", section: "#equipe", icon: <Users size={20} />, text: "Equipe" },
    { to: "/pesquisa", section: "#research", icon: <Search size={20} />, text: "Pesquisas" },
    { to: "/noticias", section: "#news", icon: <Newspaper size={20} />, text: "Notícias" },
    { to: "https://www.youtube.com/@observatorionorte", section: "#lectures", icon: <Youtube size={20} />, text: "Palestras" }
  ];

  const socialLinks = [
    { url: "https://open.spotify.com/", icon: faSpotify, color: "text-green-500" },
    { url: "https://www.youtube.com/@observatorionorte", icon: faYoutube, color: "text-red-500" },
    { url: "https://www.tiktok.com/@norteobservatorio?_t=ZM-8uzZfAmW1AM&_r=1", icon: faTiktok, color: "text-blue-500" },
    { url: "https://facebook.com", icon: faFacebook, color: "text-blue-500" },
    { url: "https://www.instagram.com/observatorio.norte/", icon: faInstagram, color: "text-pink-500" },
    { url: "https://twitter.com", icon: faXTwitter, color: "text-gray-800" }
  ];

  const footerLinks = [
    {
      title: "Links Rápidos",
      items: ["Sobre", "Equipe", "Profissionais", "Contato"]
    },
    {
      title: "Recursos",
      items: ["Base de Conhecimento", "Treinamentos", "API", "FAQ"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 via-red-700 to-orange-900" dir={language.dir}>
      {/* Header */}
      <header className="bg-red-950/30 backdrop-blur-md border-b border-orange-200/20">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/imagens/observatorio-logo.png.jpeg"
                alt="Logo do Observatório"
                className="h-20 w-20 rounded-full object-cover border-2 border-orange-200/50"
              />
              <span className="text-2xl font-bold text-orange-50">
                Observatório Norte
              </span>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-orange-50 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu mobile"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <div className="hidden md:flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.url}>
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className={`text-white hover:${social.color} transition-all h-5 w-5`}
                    />
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    onClick={() => setActiveSection(link.section)}
                    className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                      ${activeSection === link.section
                        ? 'text-orange-300 scale-105'
                        : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => navigate('/login')}
                className="bg-orange-50 hover:bg-orange-100 text-red-900 px-4 lg:px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-200/20 flex items-center gap-2">
                Login
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-red-950/90 rounded-lg p-4 backdrop-blur-sm border border-orange-200/20">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    onClick={() => {
                      setActiveSection(link.section);
                      setMobileMenuOpen(false);
                    }}
                    className={`group flex items-center gap-2 text-sm font-medium transition-all duration-300 
                      ${activeSection === link.section
                        ? 'text-orange-300 scale-105'
                        : 'text-orange-50 hover:text-orange-300 hover:scale-105'}`}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 mt-2"
                >
                  Login
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
          <h1 className="text-3xl font-bold text-center text-red-900 mb-8">Últimas Fake News Verificadas</h1>
          
          <div className="space-y-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 border-red-600 transform hover:scale-[1.01] transition-transform">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="/imagens/G1.png"
                      alt="Fake news desmascarada"
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
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{news.title}</h3>
                  <p className="text-gray-700 mb-4 text-lg">{news.content}</p>
                  <div className="bg-orange-50 p-4 rounded-lg border-2 border-red-200">
                    <h4 className="font-semibold mb-2 text-red-800">A VERDADE:</h4>
                    <ul className="space-y-2 text-gray-700">
                      {news.truths.map((truth, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          {truth}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border-2 border-red-200">
            <p className="text-red-800 text-center">
              Verificação baseada em dados oficiais do Ministério da Saúde e órgãos reguladores
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
                  alt="Logo do Observatório"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="font-bold group-hover:text-orange-300 transition-colors text-orange-50">
                  Observatório Norte
                </span>
              </div>
              <p className="text-xs md:text-sm text-orange-100">
                Iniciativa de combate à desinformação na região norte do Brasil
              </p>
              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.url}>
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className={`text-white hover:${social.color} transition-all h-5 w-5`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-orange-200 mb-3 md:mb-4">{section.title}</h3>
                <ul className="space-y-2 text-xs md:text-sm text-orange-100">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="hover:text-orange-300 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 hover:text-yellow-300 transition-colors cursor-pointer text-sm md:text-base text-white">
                Newsletter
              </h4>
              <p className="text-xs md:text-sm text-orange-100 mb-3 md:mb-4">
                Receba atualizações e notícias diretamente no seu e-mail
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-orange-900/50 rounded-full px-3 py-1 md:px-4 md:py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-orange-900/70 transition-colors text-xs md:text-sm text-white placeholder-orange-200"
                />
                <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300 hover:scale-105 text-xs md:text-sm">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-200/20 mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="text-center">
              <p className="text-orange-100 text-xs md:text-sm">
                © {new Date().getFullYear()} Observatório Norte. Todos os direitos reservados.
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
          Comunidade do Observatório
        </span>
      </a>

      {/* Modal de Upload */}
      <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Upload de Arquivo</DialogTitle>
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