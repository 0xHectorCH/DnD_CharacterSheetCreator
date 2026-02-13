import { useMemo, useState } from "react"
import db from "../../../public/data/db_en.json"
import type { Spell } from "../../types/rules_types"
import Card from "../../components/ui/card"

type FilterMode = "none" | "class" | "level" | "school"

export default function SpellsPage() {
    const schools = [
        "Abjuration",
        "Conjuration",
        "Divination",
        "Enchantment",
        "Evocation",
        "Illusion",
        "Necromancy",
        "Transmutation"
    ]

    const magicClasses = [
        "Artificer",
        "Arcane Trickster",
        "Bard",
        "Cleric",
        "Druid",
        "Eldritch Knight",
        "Paladin",
        "Ranger",
        "Sorcerer",
        "Warlock",
        "Wizard"
    ]
    // 1️⃣ State
    const [mode, setMode] = useState<FilterMode>("none")
    const [selectedValue, setSelectedValue] = useState<string | number | null>(null)

    // 2️⃣ Data
    const spells: Spell[] = db.spells

    // 3️⃣ Derived data
    const filteredSpells = useMemo(() => {
        let result = [...spells]

        if (mode === "class" && selectedValue) {
        result = result.filter(spell =>
            spell.spellLists.includes(String(selectedValue))
        )
        result.sort((a, b) => a.level - b.level)
        }

        if (mode === "school" && selectedValue) {
        result = result.filter(spell =>
            spell.school === selectedValue
        )
        result.sort((a, b) => a.level - b.level)
        }

        if (mode === "level" && selectedValue !== null) {
        result = result.filter(spell =>
            spell.level === selectedValue
        )
        }

        return result
    }, [mode, selectedValue, spells])

    // ⬇️⬇️⬇️ RIGHT HERE. Inside the component.

    if (mode === "none") {
        return (
        <section className="min-h-screen w-full bg-neutral-800 py-8">
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card title="By Class" onClick={() => setMode("class")} />
                <Card title="By Level" onClick={() => setMode("level")} />
                <Card title="By School" onClick={() => setMode("school")} />
            </div>
        </section>
        )
    }

    if (mode === "level" && selectedValue === null) {
        const levels = Array.from({ length: 10 }, (_, i) => i)

        return (
        <section className="min-h-screen w-full bg-neutral-800 py-8">
            <div className="p-8">
                <button onClick={() => {
                setSelectedValue(null)
                setMode("none")
                }} className="mb-6 px-4 py-2 bg-linear-to-r from-[#1a0f0f]
     via-[#2a1414] to-[#1a0f0f] text-neutral-50 rounded">
                Back
                </button>
                <div className="p-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                    {levels.map(level => (
                    <Card
                        key={level}
                        title={level === 0 ? "Cantrips" : `Level ${level}`}
                        onClick={() => setSelectedValue(level)}
                    />
                    ))}
                </div>
            </div>
        </section>
        )
    }

    if (mode === "school" && selectedValue === null) {
        return (
        <section className="min-h-screen w-full bg-neutral-800 py-8">
            <div className="p-8">
                <button onClick={() => {
                setSelectedValue(null)
                setMode("none")
                }} className="mb-6 px-4 py-2 bg-linear-to-r from-[#1a0f0f]
     via-[#2a1414] to-[#1a0f0f] text-neutral-50 rounded">
                Back
                </button>
                <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {schools.map(school => (
                <Card
                    key={school}
                    title={school}
                    onClick={() => setSelectedValue(school)}
                />
                ))}
                </div>
            </div>
        </section>
        )
    }

    if (mode === "class" && selectedValue === null) {
        return (
        <section className="min-h-screen w-full bg-neutral-800 py-8">
        <div className="p-8">
            <button onClick={() => {
            setSelectedValue(null)
            setMode("none")
            }} className="mb-6 px-4 py-2 bg-linear-to-r from-[#1a0f0f]
     via-[#2a1414] to-[#1a0f0f] text-neutral-50 rounded">
            Back
            </button>
            <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {magicClasses.map(cls => (
                <Card
                    key={cls}
                    title={cls}
                    onClick={() => setSelectedValue(cls)}
                />
                ))}
            </div>
        </div>
        </section>
        )
    }

    // Final result screen
    return (
        <section className="min-h-screen w-full bg-neutral-800 py-8">
            <div className="p-8">
                <button onClick={() => {
                    setSelectedValue(null)
                }} className="mb-6 px-4 py-2 bg-linear-to-r from-[#1a0f0f]
     via-[#2a1414] to-[#1a0f0f] text-neutral-50 rounded ">
                    Back
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredSpells.map(spell => (
                    <Card
                        key={spell.id}
                        title={spell.name}
                        description={spell.description}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
    }
