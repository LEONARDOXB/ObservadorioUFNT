// src/routes/AppRouter.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Equipe } from '../Pages/Equipe';
import Home from '../Pages/Home';
import { Academicos  } from '../Pages/Academicos';
import { Mestrandos } from '../Pages/Mestrandos';
import { Doutores } from '../Pages/Doutores';
import { Pesquisadores } from '../Pages/Pesquisadores';
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} 
        />

        <Route path="/equipe" element={<Equipe />} 
        />
        <Route path="/academicos" element={<Academicos />} 
        />
        <Route path="/mestrandos" element={<Mestrandos />} 
        />
        <Route path="/doutores"element={<Doutores />} 
        />
        <Route path="/pesquisadores"element={<Pesquisadores />} 
        />
      </Routes>
    </BrowserRouter>
  );
}