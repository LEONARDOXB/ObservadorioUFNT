import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Youtube } from 'lucide-react';
import { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LanguagesSelector } from '../routes/LanguagesSelector';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export function Academicos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Social Media Bar */}
      <div className="bg-white py-2 px-4 flex justify-end gap-3">
        <a href="https://www.youtube.com/@observatorionorte" className="text-[#FF0000]" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
      </div>

      {/* Navigation */}
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
          <Link to="/noticias" className="text-black px-4 py-2 rounded-md text-xl font-bold">Noticias</Link>

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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/sobre" className="text-black text-lg">Sobre</Link>
            <Link to="/equipe" className="text-black text-lg">Equipe</Link>
            <Link to="/contato" className="text-black text-lg">Contato</Link>
            <Link to="/noticias" className="text-black text-lg">Noticias</Link>
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

      {/* Breadcrumb */}
      <div className="bg-gray-100 px-6 py-4">
        <div className="container mx-auto flex items-center space-x-2 text-sm">
          <Link to="/" className="text-purple-600 hover:text-purple-800 transition">HOME</Link>
          <span className="text-gray-400">|</span>
          <Link to="/equipe" className="text-purple-600 hover:text-purple-800 transition">PROFESSORES</Link>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">ACADÊMICOS</span>
          <span className="text-gray-400">|</span>
          <Link to="/mestrandos" className="text-purple-600 hover:text-purple-800 transition">MESTRANDOS</Link>
          <span className="text-gray-400">|</span>
          <Link to="/pesquisadores" className="text-purple-600 hover:text-purple-800 transition">PESQUISADORES</Link>
          <span className="text-gray-400">|</span>
          <Link to="/comunidade" className="text-purple-600 hover:text-purple-800 transition">COMUNIDADE EXTERNA</Link>
          <span className="text-gray-400">|</span>
          <Link to="/servidores" className="text-purple-600 hover:text-purple-800 transition">SERVIDORES</Link>
        </div>
      </div>

      {/* Academic Section */}
      <main className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-gray-600 uppercase text-sm mb-4">CONHEÇA NOSSOS</div>
          <h1 className="text-gray-900 text-4xl font-bold mb-6">Acadêmicos</h1>
          <p className="text-gray-600 text-lg max-w-3xl mb-16">
            Conheça os Acadêmicos que fazem parte do nosso Observatório e contribuem para o combate à desinformação.
          </p>

          {/* Academic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Adrielle Maciel Cavalcante */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/IMG_5398.jpg"
                alt="Foto de Adrielle Maciel Cavalcante"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Adrielle Maciel Cavalcante</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/3949087268568139"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Adrielle Maciel Cavalcante"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Leonardo de Medeiros */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/cb6e7d69-a44b-4c40-92b5-fbb1649effd1.jpg"
                alt="Foto de Leonardo de Medeiros"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Leonardo de Medeiros</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/8495471975591440"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Leonardo de Medeiros"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* João Vítor Alves Pereira */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/20250204_115837.jpg"
                alt="Foto de João Vítor Alves Pereira"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">João Vítor Alves Pereira</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/1362400452475960"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes João Vítor Alves Pereira"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Talita Duarte Guimarães */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/IMG-20250405-WA0277.jpg"
                alt="Foto de Talita Duarte Guimarães"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Talita Duarte Guimarães</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/3531304261859404"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Talita Duarte Guimarães"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Alisson Sousa Santos */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/ALISSON.jpg"
                alt="Foto de Alisson Sousa Santos"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Alisson Sousa Santos</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/4131885206183712"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Alisson Sousa Santos"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Arthur Lima de Arruda */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/IMG_20250403_180259_713.webp"
                alt="Foto de Arthur Lima de Arruda"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Arthur Lima de Arruda</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/4346701848795376"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Arthur Lima de Arruda"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>

            {/* Thauane Maria */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/imagens/Thauane Maria 2025-04-07 à(s) 15.25.06_44697b1d.jpg"
                alt="Foto de Thauane Maria"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg">Thauane Maria</h3>
              </div>
              <a
                href="http://lattes.cnpq.br/1357461904650906"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 p-2 rounded-full transition"
                aria-label="Currículo Lattes Thauane Maria"
              >
                <FontAwesomeIcon icon={faLink} className="text-white" />
              </a>
            </div>
          </div>

          {/* Back Button */}
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

      {/* Footer */}
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

      {/* WhatsApp Button */}
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