import { Text } from "@medusajs/ui"

export default function AboutPage() {
  return (
    <main className="w-full bg-unilen-cream text-unilen-ink overflow-hidden">

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center px-6">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[28vw] leading-none tracking-[-0.08em] text-unilen-black/[0.025]">
            U
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            Óptica Unilen
          </span>

          <h1 className="mt-8 font-display text-6xl small:text-8xl medium:text-[10rem] leading-[0.82] tracking-[-0.06em] text-unilen-black">
            Una forma
            <br />
            <span className="text-unilen-red">de mirar.</span>
          </h1>

          <p className="mx-auto mt-10 max-w-xl text-sm small:text-base leading-relaxed text-unilen-ink/70">
            Creemos que ver bien y sentirse bien pueden formar parte
            de la misma experiencia.
          </p>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-unilen-ink/30">
            Descubre Unilen
          </span>
        </div>
      </section>


      {/* INTRO */}
      <section className="border-t border-unilen-ink/10 px-6 py-24 small:py-36">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-[10px] uppercase tracking-[0.4em] text-unilen-red">
            Nuestra historia
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl small:text-6xl leading-[0.95] tracking-[-0.04em] text-unilen-black">
            No se trata solamente
            <br />
            <span className="text-unilen-red">de unos lentes.</span>
          </h2>

          <div className="mx-auto mt-10 max-w-2xl space-y-6 text-sm small:text-base leading-relaxed text-unilen-ink/75">
            <p>
              En Unilen Óptica creemos que elegir unos lentes es una
              experiencia personal. Es encontrar ese diseño que se siente
              propio y que acompaña la manera en que cada persona ve el mundo.
            </p>

            <p>
              Por eso buscamos combinar diseño, comodidad y visión para
              ofrecer opciones pensadas para diferentes estilos, rostros
              y necesidades.
            </p>

            <p>
              Hoy estamos presentes en diferentes ciudades de Honduras,
              acercando nuestra propuesta a más personas y haciendo de la
              experiencia óptica algo más sencillo, moderno y cercano.
            </p>
          </div>

        </div>
      </section>


      {/* STATEMENT */}
      <section className="bg-unilen-black px-6 py-28 small:py-40">
        <div className="mx-auto max-w-6xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            Nuestra manera de verlo
          </span>

          <h2 className="mt-8 font-display text-5xl small:text-7xl medium:text-8xl leading-[0.88] tracking-[-0.05em] text-white">
            Tu mirada
            <br />
            <span className="text-unilen-red">habla de ti.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-white/55">
            Cada rostro es diferente. Cada estilo también.
            Nuestro objetivo es ayudarte a encontrar el lente
            que encaje contigo.
          </p>

        </div>
      </section>


      {/* VALUES */}
      <section className="px-6 py-24 small:py-36">

        <div className="mx-auto max-w-6xl">

          <div className="mb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.45em] text-unilen-red">
              Lo que nos define
            </span>

            <h2 className="mt-6 font-display text-4xl small:text-6xl tracking-[-0.04em] text-unilen-black">
              Diseñados para ti.
            </h2>
          </div>


          <div className="grid grid-cols-1 small:grid-cols-3 border-t border-unilen-ink/10">

            {/* STYLE */}
            <div className="group border-b small:border-b-0 small:border-r border-unilen-ink/10 px-5 py-12 small:px-10 text-center">

              <span className="font-display text-5xl text-unilen-red transition-transform duration-500 group-hover:scale-110">
                01
              </span>

              <h3 className="mt-7 font-display text-3xl text-unilen-black">
                Estilo
              </h3>

              <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-unilen-ink/60">
                Diseños que reflejan tu personalidad y acompañan
                tu forma de expresarte.
              </p>

            </div>


            {/* VISION */}
            <div className="group border-b small:border-b-0 small:border-r border-unilen-ink/10 px-5 py-12 small:px-10 text-center">

              <span className="font-display text-5xl text-unilen-red transition-transform duration-500 group-hover:scale-110">
                02
              </span>

              <h3 className="mt-7 font-display text-3xl text-unilen-black">
                Visión
              </h3>

              <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-unilen-ink/60">
                Soluciones ópticas pensadas para que disfrutes
                de una visión clara y cómoda.
              </p>

            </div>


            {/* CLOSE */}
            <div className="group px-5 py-12 small:px-10 text-center">

              <span className="font-display text-5xl text-unilen-red transition-transform duration-500 group-hover:scale-110">
                03
              </span>

              <h3 className="mt-7 font-display text-3xl text-unilen-black">
                Cercanía
              </h3>

              <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-unilen-ink/60">
                Una presencia cada vez más cerca de ti en diferentes
                ciudades de Honduras.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* NATIONAL PRESENCE */}
      <section className="border-t border-unilen-ink/10 px-6 py-28 small:py-40">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            Honduras
          </span>

          <h2 className="mt-8 font-display text-5xl small:text-7xl leading-[0.9] tracking-[-0.05em] text-unilen-black">
            Más cerca
            <br />
            <span className="text-unilen-red">de tu mirada.</span>
          </h2>

          <p className="mx-auto mt-9 max-w-lg text-sm leading-relaxed text-unilen-ink/65">
            Nuestra presencia continúa creciendo para llevar nuestra
            experiencia a más lugares y acompañarte donde estés.
          </p>

        </div>

      </section>


      {/* FINAL BRAND */}
      <section className="bg-unilen-red px-6 py-28 small:py-40 text-center">

        <span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
          Unilen
        </span>

        <h2 className="mt-8 font-display text-6xl small:text-8xl leading-[0.85] tracking-[-0.06em] text-white">
          Ve.
          <br />
          Siente.
          <br />
          <span className="text-unilen-black">
            Sé tú.
          </span>
        </h2>

        <Text className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-white/75">
          Porque la mejor forma de mirar el mundo
          es hacerlo siendo tú mismo.
        </Text>

      </section>

    </main>
  )
}