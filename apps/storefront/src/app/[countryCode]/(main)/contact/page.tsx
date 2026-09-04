import { Text } from "@medusajs/ui"

const departments = [
  "Francisco Morazán",
  "Cortés",
  "El Paraíso",
  "Comayagua",
  "Atlántida",
  "Colón",
  "Islas de la Bahía",
  "Olancho",
]

export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden bg-unilen-cream text-unilen-ink">

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-6">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[32vw] leading-none tracking-[-0.08em] text-unilen-black/[0.025]">
            ?
          </span>
        </div>

        <div className="relative z-10 max-w-4xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            Contacto
          </span>

          <h1 className="mt-7 font-display text-6xl leading-[0.85] tracking-[-0.06em] text-unilen-black small:text-8xl">
            Hablemos.
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-unilen-ink/70 small:text-base">
            ¿Tienes alguna pregunta sobre nuestros lentes,
            pedidos o tiendas? Estamos aquí para ayudarte.
          </p>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-unilen-ink/30">
            Estamos para ayudarte
          </span>
        </div>

      </section>


      {/* MAIN CONTACT */}
      <section className="border-t border-unilen-ink/10 px-6 py-24 small:py-32">

        <div className="mx-auto max-w-6xl">

          <div className="grid grid-cols-1 gap-16 small:grid-cols-2">

            {/* WHATSAPP */}
            <div className="text-center small:text-left">

              <span className="text-[10px] uppercase tracking-[0.4em] text-unilen-red">
                Atención
              </span>

              <h2 className="mt-5 font-display text-4xl leading-none text-unilen-black small:text-5xl">
                Estamos
                <br />
                para ayudarte.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-relaxed text-unilen-ink/65">
                Escríbenos directamente por WhatsApp para resolver
                tus dudas, consultar productos o recibir orientación.
              </p>

              <a
                href="https://wa.me/50487954789"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-4"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-unilen-red text-white transition-transform duration-300 group-hover:scale-110">
                  →
                </span>

                <span className="text-sm font-medium text-unilen-black transition-colors group-hover:text-unilen-red">
                  Escribir por WhatsApp
                </span>
              </a>

            </div>


            {/* SOCIAL */}
            <div className="border-t border-unilen-ink/10 pt-10 small:border-l small:border-t-0 small:pl-16 small:pt-0">

              <span className="text-[10px] uppercase tracking-[0.4em] text-unilen-red">
                Redes sociales
              </span>

              <h2 className="mt-5 font-display text-4xl leading-none text-unilen-black small:text-5xl">
                Síguenos
                <br />
                de cerca.
              </h2>

              <div className="mt-8 flex flex-col">

                <a
                  href="https://www.instagram.com/unilenoptica/?hl=es"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-t border-unilen-ink/10 py-4"
                >
                  <span className="text-sm text-unilen-black">
                    Instagram
                  </span>

                  <span className="text-unilen-red transition-transform group-hover:translate-x-2">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/UnilenOptica/?locale=es_LA"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-t border-unilen-ink/10 py-4"
                >
                  <span className="text-sm text-unilen-black">
                    Facebook
                  </span>

                  <span className="text-unilen-red transition-transform group-hover:translate-x-2">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.tiktok.com/@UnilenOptica"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-t border-unilen-ink/10 py-4"
                >
                  <span className="text-sm text-unilen-black">
                    TikTok
                  </span>

                  <span className="text-unilen-red transition-transform group-hover:translate-x-2">
                    ↗
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* DARK CONTACT SECTION */}
      <section className="bg-unilen-black px-6 py-24 small:py-32">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            Unilen
          </span>

          <h2 className="mt-7 font-display text-5xl leading-[0.9] tracking-[-0.05em] text-white small:text-7xl">
            Tu mirada
            <br />
            <span className="text-unilen-red">
              importa.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-white/50">
            Estamos disponibles para acompañarte en la elección
            de tus próximos lentes.
          </p>

          <a
            href="https://wa.me/50487954789"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-unilen-red hover:bg-unilen-red"
          >
            Contáctanos
          </a>

        </div>

      </section>


      {/* NATIONAL PRESENCE */}
      <section className="relative overflow-hidden px-6 py-24 small:py-36">

        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
          <span className="font-display text-[20vw] leading-none tracking-[-0.08em] text-unilen-black/[0.035]">
            HONDURAS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-[10px] uppercase tracking-[0.45em] text-unilen-red">
              Presencia nacional
            </span>

            <h2 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.05em] text-unilen-black small:text-7xl">
              Estamos
              <br />
              <span className="text-unilen-red">
                cerca de ti.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-unilen-ink/65">
              Encuentra una tienda Unilen en diferentes departamentos
              de Honduras.
            </p>

          </div>


          {/* DEPARTMENTS */}
          <div className="mt-16 grid grid-cols-1 border-t border-unilen-ink/10 small:grid-cols-2">

            {departments.map((department) => (

              <div
                key={department}
                className="group flex items-center justify-between border-b border-unilen-ink/10 px-5 py-6 transition-colors duration-300 hover:bg-unilen-black"
              >

                <span className="font-display text-xl text-unilen-black transition-colors duration-300 group-hover:text-white small:text-2xl">
                  {department}
                </span>

                <span className="text-unilen-red transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL */}
      <section className="bg-unilen-red px-6 py-28 text-center small:py-40">

        <span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
          Óptica Unilen
        </span>

        <h2 className="mt-8 font-display text-7xl leading-[0.8] tracking-[-0.07em] text-white small:text-[9rem]">
          Hablemos
          <span className="text-unilen-black">
            .
          </span>
        </h2>

        <Text className="mx-auto mt-8 max-w-sm text-sm leading-relaxed text-white/75">
          Estamos aquí para ayudarte a encontrar
          el lente perfecto para ti.
        </Text>

      </section>

    </main>
  )
}
