import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/layout/navBar';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header>
      <Navbar/>
    </header>
  </React.StrictMode>,
)
