/* Desarrollar despues de entrega
import { useMemo, useState } from "react"
import { Race } from "../types/dnd"
import Card from "../../components/ui/card"
import db from "../../../public/data/db_en.json"

export default function RacesView() {
  const [ascending, setAscending] = useState(true)

  const sortedRaces = useMemo(() => {
    return [...db.races].sort((a: Race, b: Race) =>
      ascending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
  }, [ascending])

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Races</h1>

        <button
          onClick={() => setAscending(!ascending)}
          className="px-4 py-2 bg-indigo-600 rounded-lg"
        >
          Sort {ascending ? "Z-A" : "A-Z"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedRaces.map((race: Race) => (
          <Card
            key={race.id}
            title={race.name}
            description={race.description}
          />
        ))}
      </div>
    </div>
  )
}
