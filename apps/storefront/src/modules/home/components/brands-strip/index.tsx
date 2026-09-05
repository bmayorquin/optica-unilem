const brands = [
  "Ray-Ban",
  "Oakley",
  "Vogue",
  "Guess",
  "Police",
  "Bolon",
]

export default function BrandsStrip() {
  return (
    <div className="w-full bg-unilen-black py-14">
      <div className="content-container">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-white/50 mb-8">
          Marcas que trabajamos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl small:text-2xl tracking-tight text-white/80"
            >
              {brand}
            </span>
          ))}
          <span className="font-display text-xl small:text-2xl tracking-tight text-unilen-red">
            ...y más
          </span>
        </div>
      </div>
    </div>
  )
}
