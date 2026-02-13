import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [mode, setMode] = useState<'signIn' | 'register'>('signIn');
  
  // Lee el query param al cargar
  useEffect(() => {
    const authParam = searchParams.get('auth');
    if (authParam === 'register') {
      setMode('register');
    } else {
      setMode('signIn');
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login/registro
    navigate('/'); // Redirige a home después
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent mb-2">
            {mode === 'signIn' ? 'Iniciar Sesión' : 'Registrarse'}
          </h1>
          <p className="text-gray-400">
            {mode === 'signIn' ? 'Accede a tu cuenta' : 'Crea tu cuenta'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Tu nombre"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="tu@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            {mode === 'signIn' ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <button
            onClick={() => navigate(mode === 'signIn' ? '/auth?auth=register' : '/auth?auth=signIn')}
            className="text-gray-400 hover:text-white transition-colors w-full py-2"
          >
            {mode === 'signIn' 
              ? '¿No tienes cuenta? Regístrate' 
              : '¿Ya tienes cuenta? Inicia sesión'
            }
          </button>
        </div>
      </div>
    </div>
  );
}