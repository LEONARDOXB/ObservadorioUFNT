import React, { ReactNode } from 'react';
import { GraduationCap } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';

// Novo carrossel simples com imagens
const slides = [
  {
    title: 'Vacina contra dengue causa efeitos colaterais graves?',
    button: 'Saiba mais',
    link: '/noticias',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'Vacina do HPV é perigosa para adolescentes?',
    button: 'Saiba mais',
    link: '/noticias',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'Focos de desinformação por região',
    button: 'Ver mapa',
    link: '/noticias',
    image: 'imagens/faq-globo.png',
  },
  {
    title: 'Método caseiro para identificar AVC é eficaz?',
    button: 'Saiba mais',
    link: '/noticias',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400',
  },
  // Slide de exemplo de fake news
  {
    title: 'Exemplo: Fake news sobre "chip na vacina" viraliza nas redes sociais',
    button: 'Leia a reportagem',
    link: '/noticias',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=400',
  },
];

function FadeInSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

// Carrossel customizado com imagens
function SimpleCarousel({ slides }: { slides: { title: string; button: string; link: string; image?: string }[] }) {
  const [current, setCurrent] = React.useState(0);

  const handlePreviousClick = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleNextClick = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full">
      <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden relative flex items-center justify-center min-h-[480px] w-full" style={{ height: 480 }}>
        {slides[current].image && (
          <img src={slides[current].image} alt={slides[current].title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Conteúdo centralizado */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 min-h-[60px] flex items-center justify-center text-white drop-shadow-lg">{slides[current].title}</h2>
          <a href={slides[current].link} className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-800 transition mb-4">{slides[current].button}</a>
          <div className="flex gap-4 mt-2 justify-center">
            <button onClick={handlePreviousClick} className="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold flex items-center justify-center shadow">&#8592;</button>
            <button onClick={handleNextClick} className="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold flex items-center justify-center shadow">&#8594;</button>
          </div>
          <div className="flex gap-2 mt-4 justify-center">
            {slides.map((_, idx) => (
              <span key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-purple-700' : 'bg-purple-700/40'} inline-block`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Carrossel de Notícias Principais */}
      <FadeInSection delay={0.2}>
        <div className="w-full bg-white">
          <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden relative flex items-center justify-center min-h-[480px] w-full" style={{ height: 480 }}>
            <SimpleCarousel slides={slides} />
          </div>
        </div>
      </FadeInSection>

      {/* Latest Monitored Fake News */}
      <div className="container mx-auto px-4 py-12">
        <FadeInSection delay={0.4}>
          <h2 className="text-2xl font-bold mb-8">Últimas Fake News Monitoradas</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dengue Vaccine Card */}
          <FadeInSection delay={0.5}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400"
                alt="Vacina contra dengue"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Vacina contra dengue causa efeitos colaterais graves?</h3>
                <p className="text-sm text-gray-600 mt-2">Análise das informações falsas sobre a vacina de dengue que circulam na região</p>
                <a href="/noticias" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors inline-block">
                  Saiba mais
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* HPV Card */}
          <FadeInSection delay={0.6}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
                alt="Informações sobre HPV"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Vacina do HPV é perigosa para adolescentes?</h3>
                <p className="text-sm text-gray-600 mt-2">Desvendando os mitos sobre a vacinação contra HPV</p>
                <a href="/noticias" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors inline-block">
                  Saiba mais
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Map Card */}
          <FadeInSection delay={0.7}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="imagens/faq-globo.png"
                alt="Mapa da região Norte do Brasil"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Focos de desinformação por região</h3>
                <p className="text-sm text-gray-600 mt-2">Mapa interativo mostra principais focos de fake news</p>
                <a href="/noticias" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors inline-block">
                  Ver mapa
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* AVC Card */}
          <FadeInSection delay={0.8}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400"
                alt="Informações sobre AVC"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Método caseiro para identificar AVC é eficaz?</h3>
                <p className="text-sm text-gray-600 mt-2">Análise de corrente que circula em grupos de WhatsApp</p>
                <a href="/noticias" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors inline-block">
                  Saiba mais
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* MPOX Card */}
          <FadeInSection delay={0.9}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400"
                alt="Informações sobre MPOX"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Varíola dos macacos está se espalhando rapidamente?</h3>
                <p className="text-sm text-gray-600 mt-2">Dados oficiais desmentem informações alarmistas</p>
                <a href="/noticias" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors inline-block">
                  Saiba mais
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Themes and Research Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Fake News Themes */}
          <FadeInSection delay={0.5}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Principais temas de fake news</h2>
              <div className="space-y-4">
                {['Saúde', 'Política', 'Meio Ambiente', 'Educação'].map((tema, index) => (
                  <div key={index} className="relative">
                    <div className="bg-blue-100 rounded-lg h-12 flex items-center px-4">
                      <span className="font-medium">{tema}</span>
                      <div
                        className="absolute right-0 top-0 h-full bg-blue-500 rounded-r-lg"
                        style={{
                          width: `${(index + 1) * 25}%`,
                          opacity: 0.2 + (index * 0.2)
                        }}
                      />
                      <span className="ml-auto z-10">{(index + 1) * 5}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Research and Publications */}
          <FadeInSection delay={0.6}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Pesquisas e publicações</h2>
              <div className="grid gap-6">
                <FadeInSection delay={0.7}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800"
                      alt="Análise de dados"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Análise de Dados</h3>
                      <p className="text-gray-600">Estudo sobre padrões de disseminação de fake news na região norte</p>
                      <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-colors">
                        Ver pesquisa →
                      </button>
                    </div>
                  </div>
                </FadeInSection>
                <FadeInSection delay={0.8}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
                      alt="Impacto social"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Impacto Social</h3>
                      <p className="text-gray-600">Efeitos da desinformação nas comunidades locais</p>
                      <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-colors">
                        Ver publicação →
                      </button>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Materiais Educacionais Banner */}
      <FadeInSection delay={0.9}>
        <div className="bg-[#fdf6f6] p-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 relative">
                <GraduationCap className="w-8 h-8 text-[#8B0000]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8B0000] rounded-full" />
                <div className="absolute top-1 -right-3 w-2 h-2 bg-[#8B0000] rounded-full" />
                <div className="absolute -bottom-2 right-0 w-2 h-2 bg-[#8B0000] rounded-full" />
                <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-[#8B0000] rounded-full" />
                <div className="absolute -top-2 left-0 w-2 h-2 bg-[#8B0000] rounded-full" />
              </div>
              <h1 className="text-[#000] text-xl font-medium">Materiais e recursos para promover a educação midiática.</h1>
            </div>
            <button className="px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#7B68EE] to-[#4169E1] hover:opacity-90 transition-opacity w-full md:w-auto">
              Saiba mais
            </button>
          </div>
        </div>
      </FadeInSection>

      {/* Logos Banner */}
      <FadeInSection delay={1.0}>
        <div className="bg-white p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <img src="imagens/cnpq.png" alt="CNPq" className="h-20 md:h-28 object-contain" />
              <img src="imagens/governofederal.png" alt="Governo Federal" className="h-20 md:h-28 object-contain" />
              <img src="imagens/sus.png" alt="SUS" className="h-20 md:h-28 object-contain" />
              <img src="imagens/ufnt.png" alt="UFT" className="h-20 md:h-28 object-contain" />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Footer */}
      <FadeInSection delay={0.5}>
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
                  <li><a href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                  <li><a href="/equipe" className="text-gray-400 hover:text-white transition-colors">Equipe</a></li>
                  <li><a href="/noticias" className="text-gray-400 hover:text-white transition-colors">Notícias</a></li>
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
                  <a href="#" className="text-gray-400 hover:text-[#E1306C] transition-colors"><FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5 sm:h-6 sm:w-6" /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Observatório Norte. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </FadeInSection>

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

export default Home;