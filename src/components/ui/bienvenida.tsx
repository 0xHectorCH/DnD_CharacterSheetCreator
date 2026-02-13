import { BienvenidaConfig } from "../../configs/bienvenida_config"
import { Link } from "react-router-dom"
import { getCurrentUser } from "../../services/auth/authService"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../components/ui/card"

type Language = "en" | "es"

interface BienvenidaProps {
  lang?: Language
}

export default function Bienvenida({ 
  lang = "en",
}: BienvenidaProps) {

  const content = BienvenidaConfig[lang]
  const navigate = useNavigate()
  const [user, setUser] = useState(getCurrentUser())

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const isSignedIn = !!user

  return (
    <section className="min-h-[calc(100vh-80px)] bg-neutral-900 text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-300 text-center space-y-12">

        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          {content.title}
        </h1>

        <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
          {isSignedIn
            ? `${content.welcomeSignedIn} ${user?.name}`
            : content.welcome}
        </p>

        <div className="flex justify-center gap-6 pt-6">
          {!isSignedIn ? (
            <>
              <Link
                to="/auth?auth=signIn"
                className="px-10 py-4 text-lg font-semibold bg-red-700 
                hover:bg-red-600 transition-all duration-300 rounded-lg shadow-lg hover:scale-105">
                {content.signIn}
              </Link>

              <Link
                to="/auth?auth=register"
                className="px-10 py-4 text-lg font-semibold border-2 border-red-700 
                hover:bg-red-700 transition-all duration-300 rounded-lg shadow-lg hover:scale-105">
                {content.register}
              </Link>
            </>
          ) : (
            <Link
              to="/underDevelopment"
              className="px-10 py-4 text-lg font-semibold bg-red-700 
              hover:bg-red-600 transition-all duration-300 rounded-lg shadow-lg hover:scale-105">
              My Characters
            </Link>
          )}
        </div>

        <p className="text-xl md:text-2xl text-neutral-300 pt-12">
          {content.rules}
        </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8">

        <Card
          title={content.classes}
          description="Explore all available D&D classes and discover their abilities, features and progression."
          image="/images/classes.jpg"
          onClick={() => navigate("/rules/classes")}
        />

        <Card
          title={content.spells}
          description="Browse the spell compendium and learn powerful arcane and divine magic."
          image="/images/spells.jpg"
          onClick={() => navigate("/rules/spells")}
        />

      </div>
      </div>
    </section>
  )
}
