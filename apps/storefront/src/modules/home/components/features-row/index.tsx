const features = [
  {
    title: "Lentes de calidad",
    description: "Variedad de estilos y marcas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M9 12h6M3 12h0M21 12h0" />
      </svg>
    ),
  },
  {
    title: "Examen de la vista",
    description: "Cuidado profesional para tus ojos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Garantía y respaldo",
    description: "Productos con garantía y respaldo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Atención personalizada",
    description: "Te ayudamos a encontrar lo perfecto para ti.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function FeaturesRow() {
  return (
    <div className="content-container py-16 border-t border-unilen-ink/10">
      <div className="grid grid-cols-2 medium:grid-cols-4 gap-y-12 gap-x-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center gap-y-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-unilen-red/30 text-unilen-red">
              {feature.icon}
            </div>
            <h3 className="font-display text-sm uppercase tracking-wide text-unilen-black">
              {feature.title}
            </h3>
            <p className="text-xs text-unilen-ink/70 max-w-[160px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
