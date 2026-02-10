export type NavLink = {
  label: string
  href?: string
  hidden?: boolean
  children?: { label: string; href: string }[]
}

export const navConfig = {
  en: {
    home: "Home",
    characterSheets: "Character Sheets",
    rules: "Rules",
    races: "Races",
    classes: "Classes",
    spells: "Spells",
    dice: "Throw a Die",
    about: "About Us",
    signIn: "Sign In"
  },
  es: {
    home: "Inicio",
    characterSheets: "Hojas de Personaje",
    rules: "Reglas",
    races: "Razas",
    classes: "Clases",
    spells: "Conjuros",
    dice: "Tirar un Dado",
    about: "Sobre Nosotros",
    signIn: "Iniciar sesión"
  },
}