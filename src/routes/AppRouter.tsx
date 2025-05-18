import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}