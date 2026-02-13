export type NavLink = {
  label: string
  href?: string
  hidden?: boolean
  children?: { label: string; href: string }[]
}

export const BienvenidaConfig = {
  en: {
    title: "¡Welcome to DnD character sheet creator!",
    rules: "Stories and more stories, we all want to start creating them as soon as possible, but first every wise adventurer should know the basics:",
    races: "Races",
    classes: "Classes",
    spells: "Spells",
    signIn: "Sign In",
    welcome: "To start with this journey, you will want to start creating a character but for that you must:",
    welcomeSignedIn: "Welcome wanderer, we see each other again, ¡let us remember old heroes, and create new villains!",
    register: "Register"
  },
  es: {
    title: "Bienvenido/a al creador de fichas de personaje de DnD!",
    rules: "Historias y mas historias, todos queremos comenzar cuanto antes a crearlas pero previamente todo sabio aventurero deberia saber lo básico:",
    races: "Razas",
    classes: "Clases",
    spells: "Conjuros",
    signIn: "Iniciar sesión",
    welcome: "Para comenzar con esta travesía, querrás comenzar creando un personaje pero para eso primero debes: ",
    welcomeSignedIn: "Bienvenido errante, nos volvemos a ver, ¡vamos, recordemos a antiguos heroes y creemos nuevos villanos!",
    register: "Registrarse"
  },
}