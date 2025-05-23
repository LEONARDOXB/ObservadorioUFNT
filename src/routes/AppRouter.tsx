import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Equipe } from '../Pages/Equipe';
import Home from '../Pages/Home';
import { Academicos } from '../Pages/Academicos';
import { Mestrandos } from '../Pages/Mestrandos';
import { Pesquisadores } from '../Pages/Pesquisadores';
import Pesquisa from '../Pages/Pesquisa';
import Noticias from '../Pages/Noticias';
import Login from '../Pages/Login';
import { Comunidade } from '../Pages/Comunidade';
import { Servidores } from '../Pages/Servidores';
import { LanguageProvider } from '../../src/contexts/LanguageContext';
import { LanguagesSelector } from '../../src/routes/LanguagesSelector';
import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
import AdminLogin from '../admin/AdminLogin';
import AdminProjetos from '../admin/AdminProjetos';
import AdminDashboard from '../admin/AdminDashboard';
import Projetos from '../Pages/Projetos';
import Artigos from '../Pages/Artigos';

export function AppRouter() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LanguagesSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/academicos" element={<Academicos />} />
          <Route path="/mestrandos" element={<Mestrandos />} />
          <Route path="/pesquisadores" element={<Pesquisadores />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/servidores" element={<Servidores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/artigos" element={<Artigos />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/projetos" element={<AdminProjetos />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}