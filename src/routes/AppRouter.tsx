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

export function AppRouter() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}