// export interface Race {
//   id: number
//   name: string
//   description: string
//   speed: number
//   abilityBonuses: string
// }

export interface Class {
  id: number
  name: string
  description: string
  hitDie: string
  primaryAbility: string
  savingThrows: string[]
  skills: string[]
  numberOfSkills: number
  armorProficiencies: string[]
  weaponProficiencies: string[]
}

export interface Spell {
  id: number
  name: string
  level: number
  school: string
  castingTime: string
  range: string
  components: string
  duration: string
  concentration: boolean
  description: string
  spellLists: string
}