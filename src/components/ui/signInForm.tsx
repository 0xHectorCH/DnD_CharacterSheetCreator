//Importaremos el navbar en prácticamente todos los views. Esta es la versión española.
import { signInConfig } from "../../configs/signIn_config"

type Language = "en" | "es"

interface NavbarProps {
  lang?: Language
  onLanguageChange?: (lang: Language) => void
}

export default function Bienvenida({ 
  lang = "en" ,
  onLanguageChange,
  }: NavbarProps) {
  const content = signInConfig[lang]

  const handleLanguageChange = (newLang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLang)
    }
    // mas tarfe: window.location.reload() o router logic
    //revisar ya que aquí no aplico el language change
  }
  return (
    <form action="">
        <input type="text" />
        <input type="text" />
        <button></button>
    </form>
  )
}