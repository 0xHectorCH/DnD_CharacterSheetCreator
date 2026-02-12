//Importaremos el navbar en prácticamente todos los views. Esta es la versión española.
import { BienvenidaConfig } from "../../configs/bienvenida_config"

type Language = "en" | "es"

interface NavbarProps {
  lang?: Language
  onLanguageChange?: (lang: Language) => void
}

export default function Bienvenida({ 
  lang = "en" ,
  onLanguageChange,
  }: NavbarProps) {
  const content = BienvenidaConfig[lang]

  const handleLanguageChange = (newLang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLang)
    }
    // mas tarfe: window.location.reload() o router logic
    //revisar ya que aquí no aplico el language change
  }
  return (
    <section>     
        <h1>{content.title}</h1>
        <p>{content.welcome}</p>
        <div>
            {/* Con js cambiar si el usuario esta iniciado con boton de tus personajes/crear personaje */}
            <button>
                {content.signIn}
            </button>
            <button>
                {content.register}
            </button>
        </div>
        <p>{content.rules}</p>
        <div>
            <a href="">
                <div></div>
            </a>
            <a href="">
                <div></div>
            </a>
            <a href="">
                <div></div>
            </a>
        </div>
    </section>
  )
}