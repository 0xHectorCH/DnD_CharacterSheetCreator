interface CardProps {
  title: string
  description?: string
  image?: string
  onClick?: () => void
}

export default function Card({
  title,
  description,
  image,
  onClick
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 bg-linear-to-r from-[#1a0f0f]
     via-[#2a1414] to-[#1a0f0f]"
    >
      {image && (
        <div
          className="h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-bold text-neutral-50 mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-neutral-50 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}