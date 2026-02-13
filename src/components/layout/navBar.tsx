//Importaremos el navbar en prácticamente todos los views. Esta es la versión española.
import { navConfig } from "../../configs/navBar_config"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCurrentUser, logout } from "../../services/auth/authService"

type Language = "en" | "es"

interface NavbarProps { 
  lang?: Language
  onLanguageChange?: (lang: Language) => void
}

export default function Navbar({ 
  lang = "en" ,
  // onLanguageChange,
  }: NavbarProps) {
  const content = navConfig[lang]
  const navigate = useNavigate()

    const [user, setUser] = useState(getCurrentUser())

    useEffect(() => {
      setUser(getCurrentUser())
    }, [])

    const handleLogout = () => {
      logout()
      setUser(null)
      navigate("/")
    }

    // const handleLanguageChange = (newLang: Language) => {
    //   if (onLanguageChange) {
    //     onLanguageChange(newLang)
    //   }
    // }
  return (
    <nav className="w-full bg-linear-to-r from-[#1a0f0f]
     via-[#2a1414] to-[#1a0f0f] border-b border-red-900/40">
      <div className="w-full px-8">
        <div className="flex h-20 items-center justify-between font-fantasy">

          {/* Logo */}
          <div className="flex items-center">
            <img src="/icons/dndlogo1.png" alt="DnD Character Sheet Creator"
              className="h-22 w-auto"/>
          </div>

          {/* Links centrales */}
          <div className="flex items-center gap-10 text-white text-lg tracking-wide">
            <Link to="/" className="transition-colors duration-500 hover:text-red-600">
              {content.home}
            </Link>

            {/* Link invisible */}
            {/* <a href="/character-sheets">{content.characterSheets}</a> */}

            {/* Dropdown reglas */}
            <div className="relative group">
              <button className="transition-colors duration-500 hover:text-red-600">
                {content.rules}
              </button>

              <div className="absolute left-1/2 top-full z-20 hidden 
              -translate-x-1/2 rounded-xl bg-linear-to-b from-[#2a1414] to-[#1a0f0f]
                border border-red-900/50 shadow-xl group-hover:block"> 
                <ul className="min-w-45 py-3 text-base">
                  {/* <li>
                    <Link to="/rules/races" className="block px-5 py-2 transition-colors duration-500 hover:text-red-500">
                      {content.races}
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/rules/classes" className="block px-5 py-2 transition-colors duration-500 hover:text-red-500">
                      {content.classes}
                    </Link>
                  </li>
                  <li>
                    <Link to="/rules/spells" className="block px-5 py-2 transition-colors duration-500 hover:text-red-500">
                      {content.spells}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <a href="/dice" className="transition-colors duration-500 hover:text-red-600">
              {content.dice}
            </a> 
            Desarrollar despues de entrega
            */}
          {user && (
            <Link to="/underDevelopment" className="transition-colors duration-500 hover:text-red-600">
              {content.myCharacter}
            </Link>
          )}
          </div>

          {/* NavBar derecho */}

          <div className="flex items-center gap-6 text-white text-lg">

            {/* Language selector */}
            {/* <div className="relative group">
              <button className="transition-colors duration-500 hover:text-red-600">
                🌍
              </button>
              //gestionar idiomas mas tarde
              <div className="absolute right-0 top-full z-20 mt-3 hidden
                rounded-xl bg-linear-to-b from-[#2a1414] to-[#1a0f0f]
                border border-red-900/50 shadow-xl group-hover:block">
                <ul className="py-2">
                  <li>
                    <button onClick={() => handleLanguageChange("en")}
                      className="flex w-full items-center gap-2 px-4 py-2 hover:bg-orange-900/30">
                      🇬🇧 English
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleLanguageChange("es")}
                      className="flex w-full items-center gap-2 px-4 py-2 hover:bg-orange-900/30">
                      🇪🇸 Español
                    </button>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* Sign in */}
            {!user ? (
              <Link
                to="/auth?auth=signIn"
                className="rounded-lg border border-red-700 px-4 py-1.5
                transition-all duration-500 hover:bg-red-700 hover:text-white">
                {content.signIn}
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-300">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="rounded-lg border border-red-700 px-4 py-1.5
                  transition-all duration-500 hover:bg-red-700 hover:text-white">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}