import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/auth';
import Navbar from '../components/layout/navBar';
import HomePage from '../pages/home';
import ClassesPage from '../pages/rules/classes';
import SpellsPage from '../pages/rules/spells';
import ErrorPage from '../pages/underDevelopment';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <header>
            <Navbar />
        </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="/rules/races" element={<RacesPage />} /> */}
        <Route path="/rules/classes" element={<ClassesPage />} />
        <Route path="/rules/spells" element={<SpellsPage />} />
        <Route path="/underDevelopment" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
