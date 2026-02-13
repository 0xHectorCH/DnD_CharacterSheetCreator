// src/pages/AuthPage.tsx

import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  register,
  login,
  validateEmail,
  validatePassword,
} from '../services/auth/authService';

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [mode, setMode] = useState<'signIn' | 'register'>('signIn');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    general?: string;
  }>({});

  useEffect(() => {
    const authParam = searchParams.get('auth');
    if (authParam === 'register') {
      setMode('register');
    } else {
      setMode('signIn');
    }

    // Reset form when mode changes
    setName('');
    setEmail('');
    setPassword('');
    setErrors({});
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (mode === 'register' && !name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format (example@domain.com)';
    }

    if (!validatePassword(password) && mode === 'register') {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      if (mode === 'register') {
        register(name, email, password);
      } else {
        login(email, password);
      }
      navigate('/');
    } catch (error: any) {
      setErrors({ general: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-linear-to-r from-red-500 to-purple-500 bg-clip-text text-transparent mb-2">
            {mode === 'signIn' ? 'Sign In' : 'Register'}
          </h1>
          <p className="text-gray-400">
            {mode === 'signIn'
              ? 'Access your account'
              : 'Create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 text-white bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="example@domain.com"/>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-white bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="••••••••"/>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {errors.general && (
            <p className="text-red-500 text-sm text-center">
              {errors.general}
            </p>
          )}

          <button type="submit"
            className="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
            {mode === 'signIn' ? 'Sign In' : 'Register'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() =>
              navigate(
                mode === 'signIn'
                  ? '/auth?auth=register'
                  : '/auth?auth=signIn'
              )
            }
            className="text-gray-400 hover:text-white transition-colors">
            {mode === 'signIn'
              ? "Don't have an account? Register"
              : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
