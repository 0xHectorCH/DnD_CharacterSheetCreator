import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header>
      <div className="flex items-center gap-10 text-white text-lg tracking-wide">
            <a href="/" className="transition-colors duration-500 hover:text-red-600">
              home
            </a>

            {/* Link invisible */}
            {/* <a href="/character-sheets">{content.characterSheets}</a> */}

            {/* Dropdown reglas */}
            <div className="relative group">
              <button className="transition-colors duration-500 hover:text-red-600">
                rules
              </button>

              <div className="absolute left-1/2 top-full z-20 mt-2 hidden 
              -translate-x-1/2 rounded-xl bg-linear-to-b from-[#2a1414] to-[#1a0f0f]
                border border-red-900/50 shadow-xl group-hover:block"> {/* Cambiar más tarde con js para ser onclick */}
                <ul className="min-w-45 py-3 text-base">
                  <li>
                    <a href="/rules/races" className="block px-5 py-2 transition-colors duration-500 hover:text-red-500">
                      races
                    </a>
                  </li>
                  <li>
                    <a href="/rules/classes" className="block px-5 py-2 transition-colors duration-500 hover:text-red-500">
                      classes
                    </a>
                  </li>
                  <li>
                    <a href="/rules/spells" className="block px-5 py-2 transition-colors duration-500 hover:text-red-500">
                      spells
                    </a>
                  </li>
                </ul>
              </div>
            </div>
    </div>
    </header>
    <main>

    </main>
  </React.StrictMode>,
)