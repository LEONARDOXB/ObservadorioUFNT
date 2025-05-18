import React, { useState } from 'react';
import { BookOpen, Users, Youtube, ArrowRight, Menu, X, XCircle, Search, Newspaper } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faSpotify, faYoutube, faTiktok, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { FileUpload } from '../components/ui/file-upload';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';

function Noticias() {
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
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-[#fff6f2] rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7a1c1c] text-center mb-8">
          Últimas Fake News verificadas
        </h1>
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow p-6 mb-8 border-l-8 border-[#d32f2f] relative"
          >
            {/* Fonte e selo */}
            <div className="flex items-center mb-4">
              <span className="bg-white rounded-full shadow px-4 py-2 font-bold text-[#d32f2f] mr-3 text-lg flex items-center">
                G1
              </span>
              <span className="text-[#d32f2f] font-bold flex items-center">
                <svg width="20" height="20" fill="none" className="mr-1"><circle cx="10" cy="10" r="10" fill="#d32f2f"/><text x="6" y="15" fill="#fff" fontSize="16">✖</text></svg>
                NOTÍCIAS FALSAS
              </span>
            </div>
            {/* Imagem */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            {/* Título */}
            <h2 className="font-bold text-xl text-[#7a1c1c] mb-2">{news.title}</h2>
            {/* Descrição */}
            <p className="text-[#7a1c1c] mb-4">{news.content}</p>
            {/* Detalhes da verdade */}
            <div className="bg-[#fff0e0] border-l-4 border-[#d32f2f] rounded p-4 mb-2">
              <span className="font-bold text-[#d32f2f]">A VERDADE:</span>
              <ul className="list-disc ml-6 text-[#7a1c1c]">
                {news.truths.map((truth, index) => (
                  <li key={index}>{truth}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;