import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/layout/navBar';
import Bienvenida from './components/ui/bienvenida';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header>
      <Navbar/>
    </header>
    <main>
      <Bienvenida/>
    </main>
  </React.StrictMode>,
)
