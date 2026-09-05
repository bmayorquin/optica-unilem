import { listRegions } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const branchGroups = [
  {
    department: "Francisco Morazán",
    branches: [
      {
        name: "City Mall Tegucigalpa",
        location: "2do. Nivel, contiguo a Claro",
      },
      {
        name: "Col. San Carlos",
        location:
          "Salida CC Novacentro, esquina opuesta a la Yamaha por el Blvd. Morazán",
      },
      {
        name: "Metro Mall Tegucigalpa",
        location: "Contiguo a Variedades Chicocell, 1er. Nivel",
      },
      {
        name: "Mall Premier Tegucigalpa",
        location: "2do. Nivel, contiguo a Farmacia Siman",
      },
      {
        name: "Cascadas Mall",
        location: "Contiguo a Almacenes El Titán, 2do. Nivel",
      },
      {
        name: "City Mall Tegucigalpa · Sunglasses Store",
        location: "1er. Nivel, frente a Tommy Hilfiger",
      },
    ],
  },

  {
    department: "Cortés",
    branches: [
      {
        name: "City Mall San Pedro Sula",
        location: "1er. Nivel, contiguo a Hush",
      },
      {
        name: "Mall Megaplaza Villanueva",
        location: "Contiguo a Farmacia Kielsa",
      },
      {
        name: "Mall Megaplaza El Progreso",
        location: "Contiguo a Banco Ficohsa",
      },
    ],
  },

  {
    department: "El Paraíso",
    branches: [
      {
        name: "Plaza Milho · Danlí",
        location: "Frente al Supermercado La Colonia #2",
      },
    ],
  },

  {
    department: "Comayagua",
    branches: [
      {
        name: "Mall Premier Comayagua",
        location: "2do. Nivel, contiguo a Jetstero",
      },
    ],
  },

  {
    department: "Atlántida",
    branches: [
      {
        name: "Mall Megaplaza La Ceiba",
        location: "2do. Nivel, contiguo a Farmacia Siman",
      },
    ],
  },

  {
    department: "Colón",
    branches: [
      {
        name: "Mall Megaplaza Tocoa",
        location: "Contiguo a Payless",
      },
    ],
  },

  {
    department: "Islas de la Bahía",
    branches: [
      {
        name: "Mall Megaplaza Roatán",
        location: "Contiguo a tiendas Katriní y YadiKiss",
      },
    ],
  },

  {
    department: "Olancho",
    branches: [
      {
        name: "Mall Uniplaza Juticalpa",
        location: "Contiguo a Tigo",
      },
      {
        name: "Mall Premier Catacamas",
        location: "Contiguo a Farmacia Siman y Banpaís, 2do. Nivel",
      },
    ],
  },
]

export default async function Footer() {
  const regions = await listRegions()
  const honduras = regions?.find((r: any) => r.name === "Honduras")
  const promoImageUrl = honduras?.metadata?.promo_image_url || "/promo/banner.jpg"
  const promoVideoUrl = honduras?.metadata?.promo_video_url || "/promo/video.mp4"
  const { collections } = await listCollections({
    fields: "*products",
  })

  const productCategories = await listCategories()

  return (
    <footer className="w-full bg-unilen-cream text-unilen-ink">
      <div className="content-container">

        {/* =====================================================
            BRAND + PROMO
        ====================================================== */}
        <div className="border-b border-unilen-ink/10 py-16 small:py-24">
          <div className="grid grid-cols-1 medium:grid-cols-[1.3fr_1fr_1.3fr] gap-10 medium:gap-8 items-center">

            {/* LEFT — VIDEO */}
            <div className="group overflow-hidden aspect-[4/5]">
              <video
                src={promoVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* CENTER — BRAND */}
            <div className="flex flex-col items-center text-center">
              <LocalizedClientLink href="/">
                <span className="font-display text-5xl small:text-6xl tracking-[-0.04em] text-unilen-black">
                  UNILEN<span className="text-unilen-red">.</span>
                </span>
              </LocalizedClientLink>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-unilen-ink">
                Tu mirada, tu esencia. Lentes pensados para tu estilo,
                tu rostro y tu visión.
              </p>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="group overflow-hidden aspect-[4/5]">
              <img
                src={promoImageUrl}
                alt="Promoción Unilen"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid grid-cols-1 gap-14 py-16 small:grid-cols-2 medium:grid-cols-4">

          {/* CATEGORIES */}
          {productCategories && productCategories.length > 0 && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
                Explora
              </span>

              <h3 className="mt-4 font-display text-xl text-unilen-black">
                Categorías
              </h3>

              <ul
                className="mt-5 flex flex-col gap-2.5"
                data-testid="footer-categories"
              >
                {productCategories.slice(0, 6).map((c) => {
                  if (c.parent_category) return null

                  return (
                    <li key={c.id}>
                      <LocalizedClientLink
                        href={`/categories/${c.handle}`}
                        className="text-sm text-unilen-ink/70 transition-colors hover:text-unilen-red"
                        data-testid="category-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* COLLECTIONS */}
          {collections && collections.length > 0 && (
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
                Descubre
              </span>

              <h3 className="mt-4 font-display text-xl text-unilen-black">
                Colecciones
              </h3>

              <ul className="mt-5 flex flex-col gap-2.5">
                {collections.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/collections/${c.handle}`}
                      className="text-sm text-unilen-ink/70 transition-colors hover:text-unilen-red"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INFORMATION */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
              Unilen
            </span>

            <h3 className="mt-4 font-display text-xl text-unilen-black">
              Información
            </h3>

            <ul className="mt-5 flex flex-col gap-2.5">
              <li>
                <LocalizedClientLink
                  href="/about"
                  className="text-sm text-unilen-ink/70 hover:text-unilen-red"
                >
                  Acerca de nosotros
                </LocalizedClientLink>
              </li>

              <li>
                <LocalizedClientLink
                  href="/contact"
                  className="text-sm text-unilen-ink/70 hover:text-unilen-red"
                >
                  Contacto
                </LocalizedClientLink>
              </li>

              <li>
                <LocalizedClientLink
                  href="/faq"
                  className="text-sm text-unilen-ink/70 hover:text-unilen-red"
                >
                  Preguntas frecuentes
                </LocalizedClientLink>
              </li>

              <li>
                <LocalizedClientLink
                  href="/shipping"
                  className="text-sm text-unilen-ink/70 hover:text-unilen-red"
                >
                  Envíos
                </LocalizedClientLink>
              </li>

              <li>
                <LocalizedClientLink
                  href="/returns"
                  className="text-sm text-unilen-ink/70 hover:text-unilen-red"
                >
                  Cambios y devoluciones
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
              Conecta
            </span>

            <h3 className="mt-4 font-display text-xl text-unilen-black">
              Síguenos
            </h3>

            <ul className="mt-5 flex flex-col gap-2.5">

              <li>
                <a
                  href="https://www.instagram.com/unilenoptica/?hl=es"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-unilen-ink/70 transition-colors hover:text-unilen-red"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/UnilenOptica/?locale=es_LA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-unilen-ink/70 transition-colors hover:text-unilen-red"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@opticaunilen"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-unilen-ink/70 transition-colors hover:text-unilen-red"
                >
                  TikTok
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/50487954789"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-unilen-ink/70 transition-colors hover:text-unilen-red"
                >
                  WhatsApp
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* =====================================================
            STORE LOCATOR
        ====================================================== */}
        <section className="relative border-t border-unilen-ink/10 py-20 small:py-24">

          {/* DECORATIVE BACKGROUND */}
          <div className="pointer-events-none absolute right-0 top-10 select-none overflow-hidden">
            <span className="font-display text-[15vw] leading-none tracking-[-0.08em] text-unilen-black/[0.025]">
              UNILEN
            </span>
          </div>

          {/* HEADING */}
          <div className="relative mb-14">

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-unilen-red" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-unilen-red">
                Presencia nacional
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl font-display text-5xl small:text-7xl leading-[0.9] tracking-[-0.04em] text-unilen-black">
              Encuentra
              <br />
              <span className="text-unilen-red">tu Unilen.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-relaxed text-unilen-ink">
              Estamos más cerca de ti. Visita cualquiera de nuestras
              tiendas y descubre el lente perfecto para tu estilo.
            </p>
          </div>

          {/* DEPARTMENTS */}
          <div className="relative grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 gap-x-12 gap-y-14">

            {branchGroups.map((group) => (
              <section key={group.department}>

                {/* DEPARTMENT HEADER */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-unilen-black text-[9px] text-white">
                    {group.branches.length}
                  </span>

                  <h3 className="text-[11px] uppercase tracking-[0.25em] text-unilen-black">
                    {group.department}
                  </h3>
                </div>

                {/* BRANCHES */}
                <div className="flex flex-col">

                  {group.branches.map((branch, index) => (
                    <div
                      key={branch.name}
                      className="group border-t border-unilen-ink/10 py-3 transition-colors duration-300 hover:border-unilen-red"
                    >
                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h4 className="text-sm font-medium text-unilen-black transition-colors group-hover:text-unilen-red">
                            {branch.name}
                          </h4>

                          <p className="mt-1 text-xs leading-relaxed text-unilen-ink/80">
                            {branch.location}
                          </p>
                        </div>

                        <span className="pt-0.5 text-[9px] text-unilen-ink/30 transition-colors duration-300 group-hover:text-unilen-red">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>
                    </div>
                  ))}

                </div>
              </section>
            ))}

          </div>
        </section>

        {/* =====================================================
            LEGAL
        ====================================================== */}
        <div className="border-t border-unilen-ink/10 py-8">

          <div className="flex flex-col gap-5 small:flex-row small:items-center small:justify-between">

            <div className="flex flex-wrap gap-x-6 gap-y-2">

              <LocalizedClientLink
                href="/terms_conditions"
                className="text-[11px] text-unilen-ink/50 transition-colors hover:text-unilen-red"
              >
                Términos y condiciones
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/privacy"
                className="text-[11px] text-unilen-ink/50 transition-colors hover:text-unilen-red"
              >
                Política de privacidad
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/returns"
                className="text-[11px] text-unilen-ink/50 transition-colors hover:text-unilen-red"
              >
                Cambios y devoluciones
              </LocalizedClientLink>

            </div>

            <Text className="text-[11px] text-unilen-ink/40">
              © {new Date().getFullYear()} Óptica Unilen. Todos los derechos
              reservados.
            </Text>

          </div>
        </div>

      </div>
    </footer>
  )
}
