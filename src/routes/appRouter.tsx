// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/auth';
import Navbar from '../components/layout/navBar';
import HomePage from '../pages/home';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <header>
            <Navbar />
        </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />  {/* ← ÚNICA ruta */}
        {/* <Route path="/rules/races" element={<RacesPage />} />
        <Route path="/rules/classes" element={<ClassesPage />} />
        <Route path="/rules/spells" element={<SpellsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
