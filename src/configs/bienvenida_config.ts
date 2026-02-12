export type NavLink = {
  label: string
  href?: string
  hidden?: boolean
  children?: { label: string; href: string }[]
}

export const BienvenidaConfig = {
  en: {
    title: "Welcome to",
    rules: "",
    races: "Races",
    classes: "Classes",
    spells: "Spells",
    signIn: "Sign In",
    welcome: "",
    register: ""
  },
  es: {
    title: "Bienvenido/a a",
    rules: "Reglas",
    races: "Razas",
    classes: "Clases",
    spells: "Conjuros",
    signIn: "Iniciar sesión",
    welcome: "",
    register: ""
  },
}