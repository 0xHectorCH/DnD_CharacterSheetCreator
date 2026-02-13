import Card from "../../components/ui/card"
import db from "../../../public/data/db_en.json"
import type { Class } from "../../configs/rules_config"

export default function ClassesPage() {
  const classes = db.classes.slice(0, 15)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Classes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((cls: Class, index) => (
          <Card
            key={cls.id}
            title={cls.name}
            description={cls.description}
            image={`/images/classes/class-${index + 1}.jpg`}
          />
        ))}
      </div>
    </div>
  )
}