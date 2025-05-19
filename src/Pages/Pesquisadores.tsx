import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Youtube } from 'lucide-react';
import { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguagesSelector } from '../routes/LanguagesSelector';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export function Pesquisadores() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de redes sociais */}
      <div className="bg-white py-2 px-4 flex justify-end gap-3">
        <a href="https://www.youtube.com/@observatorionorte" className="text-[#FF0000]" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
      </div>

      {/* Navegação */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/imagens/observatorio-logo.png.jpeg" 
            alt="Logo Observatório" 
            className="h-28 w-30 object-contain" 
          />
          <div>
            <h1 className="text-xl font-bold">Observatório</h1>
            <p className="text-sm text-gray-600">Desinformação e fake news</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/sobre" className="text-black text-xl font-bold">Sobre</Link>
          <Link to="/equipe" className="text-black text-xl font-bold">Equipe</Link>
          <Link to="/contato" className="text-black px-4 py-2 rounded-md text-xl font-bold">Contato</Link>
          <Link to="/noticias" className="text-black px-4 py-2 rounded-md text-xl font-bold">Notícias</Link>

          <div className="relative">
            <input
              type="text"
              placeholder="O que você procura?"
              className="pl-3 pr-10 py-2 border rounded-md w-64"
              aria-label="Campo de busca"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu mobile"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/sobre" className="text-black text-lg">Sobre</Link>
            <Link to="/equipe" className="text-black text-lg">Equipe</Link>
            <Link to="/contato" className="text-black text-lg">Contato</Link>
            <Link to="/noticias" className="text-black text-lg">Notícias</Link>
            <div className="relative">
              <input
                type="text"
                placeholder="O que você procura?"
                className="pl-3 pr-10 py-2 border rounded-md w-full"
                aria-label="Campo de busca mobile"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb - Correção aplicada aqui */}
      <div className="bg-gray-100 px-6 py-4">
        <div className="container mx-auto flex items-center space-x-2 text-sm">
          <Link to="/" className="text-purple-600 hover:text-purple-800 transition">HOME</Link>
          <span className="text-gray-400">|</span>
          <Link to="/equipe" className="text-purple-600 hover:text-purple-800 transition">PROFESSORES</Link>
          <span className="text-gray-400">|</span>
          <Link to="/academicos" className="text-purple-600 hover:text-purple-800 transition">ACADÊMICOS</Link>
          <span className="text-gray-400">|</span>
          <Link to="/mestrandos" className="text-purple-600 hover:text-purple-800 transition">MESTRANDOS</Link>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">PESQUISADORES</span>
          <span className="text-gray-400">|</span>
          <Link to="/comunidade" className="text-purple-600 hover:text-purple-800 transition">COMUNIDADE EXTERNA</Link>
          <span className="text-gray-400">|</span>
          <Link to="/servidores" className="text-purple-600 hover:text-purple-800 transition">SERVIDORES</Link>
        </div>
      </div>

      {/* Seção de Pesquisadores */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-600 uppercase text-sm mb-4">CONHEÇA NOSSOS</div>
          <h1 className="text-gray-900 text-4xl font-bold mb-6">Pesquisadores</h1>
          <p className="text-gray-600 text-lg max-w-3xl mb-16">
            Conheça os pesquisadores que colaboram com nosso Observatório e contribuem para o combate à desinformação.
          </p>

          {/* Grid de cards de pesquisadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pesquisador 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/researcher1.jpg"
                alt="Foto de Pesquisador 1"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Nome do Pesquisador 1</h3>
                <p className="text-white/80 text-sm">Área de pesquisa</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Pesquisador 1"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Pesquisador 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/researcher2.jpg"
                alt="Foto de Pesquisador 2"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Nome do Pesquisador 2</h3>
                <p className="text-white/80 text-sm">Área de pesquisa</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Pesquisador 2"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Pesquisador 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/researcher3.jpg"
                alt="Foto de Pesquisador 3"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Nome do Pesquisador 3</h3>
                <p className="text-white/80 text-sm">Área de pesquisa</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Pesquisador 3"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Pesquisador 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/researcher4.jpg"
                alt="Foto de Pesquisador 4"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Nome do Pesquisador 4</h3>
                <p className="text-white/80 text-sm">Área de pesquisa</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Pesquisador 4"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>
          </div>

          {/* Botão de voltar */}
          <div className="flex justify-center mt-12 space-x-4">
            <Link
              to="/equipe"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <span>Voltar Para Equipe</span>
            </Link>
            <div className="relative">
              <LanguagesSelector />
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Observatório Norte</h3>
              <p className="text-gray-400">Iniciativa de combate à desinformação na região norte do Brasil</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</Link></li>
                <li><Link to="/equipe" className="text-gray-400 hover:text-white transition-colors">Equipe</Link></li>
                <li><Link to="/noticias" className="text-gray-400 hover:text-white transition-colors">Notícias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-gray-400">Email: info@observatorionorte.org</p>
              <p className="text-gray-400">Telefone: +55 63 99999-9999</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@observatorionorte" className="text-gray-400 hover:text-[#FF0000] transition-colors" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Observatório Norte. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão do WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=+556392480518&text=Olá, gostaria de mais informações!"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}