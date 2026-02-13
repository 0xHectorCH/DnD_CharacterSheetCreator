//Importaremos el navbar en prácticamente todos los views. Esta es la versión española.
import { BienvenidaConfig } from "../../configs/bienvenida_config"

type Language = "en" | "es"

interface NavbarProps {
  lang?: Language
  isSignedIn?: boolean
  onLanguageChange?: (lang: Language) => void
}

export default function Bienvenida({ 
  lang = "en" ,
  onLanguageChange,
  }: NavbarProps) {
  const content = BienvenidaConfig[lang]
  const isSignedIn=false

  const handleLanguageChange = (newLang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLang)
    }
    // mas tarfe: window.location.reload() o router logic
    //revisar ya que aquí no aplico el language change
  }
  return (
    <section className="min-h-[calc(100vh-80px)] bg-neutral-900 text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[1200px] text-center space-y-12">

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          {content.title}
        </h1>

        {/* Welcome text */}
        <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
          {isSignedIn ? content.welcomeSignedIn : content.welcome}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex justify-center gap-6 pt-6">
          {!isSignedIn ? (
            <>
              <a
                href="/signin"
                className="px-10 py-4 text-lg font-semibold bg-red-700 hover:bg-red-600 transition-all duration-300 rounded-lg shadow-lg hover:scale-105"
              >
                {content.signIn}
              </a>

              <a
                href="/register"
                className="px-10 py-4 text-lg font-semibold border-2 border-red-700 hover:bg-red-700 transition-all duration-300 rounded-lg shadow-lg hover:scale-105"
              >
                {content.register}
              </a>
            </>
          ) : (
            <a
              href="/characters"
              className="px-10 py-4 text-lg font-semibold bg-red-700 hover:bg-red-600 transition-all duration-300 rounded-lg shadow-lg hover:scale-105"
            >
              My Characters
            </a>
          )}
        </div>

        {/* Rules intro */}
        <p className="text-xl md:text-2xl text-neutral-300 pt-12">
          {content.rules}
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <a
            href="/classes"
            className="group relative h-56 rounded-xl overflow-hidden shadow-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/classes.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300" />
            <div className="relative h-full flex items-center justify-center">
              <span className="text-3xl font-bold tracking-wide">
                {content.classes}
              </span>
            </div>
          </a>

          <a
            href="/races"
            className="group relative h-56 rounded-xl overflow-hidden shadow-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/races.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300" />
            <div className="relative h-full flex items-center justify-center">
              <span className="text-3xl font-bold tracking-wide">
                {content.races}
              </span>
            </div>
          </a>

          <a
            href="/spells"
            className="group relative h-56 rounded-xl overflow-hidden shadow-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/spells.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-300" />
            <div className="relative h-full flex items-center justify-center">
              <span className="text-3xl font-bold tracking-wide">
                {content.spells}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}