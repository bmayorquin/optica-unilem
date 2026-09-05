import { Text } from "@medusajs/ui"

const shippingInfo = [
  {
    title: "Cobertura",
    text: "Realizamos envíos a diferentes ciudades y departamentos de Honduras.",
  },
  {
    title: "Tiempo de entrega",
    text: "El tiempo puede variar según la ubicación, disponibilidad del producto y tipo de pedido.",
  },
  {
    title: "Preparación",
    text: "Cada pedido es preparado cuidadosamente antes de ser enviado para garantizar que llegue en las mejores condiciones.",
  },
  {
    title: "Seguimiento",
    text: "Una vez procesado tu pedido, recibirás la información disponible para conocer el estado de tu envío.",
  },
]

export default function ShippingPage() {
  return (
    <main className="w-full overflow-hidden bg-unilen-cream text-unilen-ink">

      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-center justify-center px-6">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[30vw] leading-none tracking-[-0.1em] text-unilen-black/[0.025]">
            →
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.55em] text-unilen-red">
            Envíos
          </span>

          <h1 className="mt-8 font-display text-6xl leading-[0.8] tracking-[-0.07em] text-unilen-black small:text-8xl medium:text-[9rem]">
            Tu pedido
            <br />
            <span className="text-unilen-red">
              va contigo.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-unilen-ink/60 small:text-base">
            Queremos que recibir tus lentes sea tan sencillo
            como elegirlos. Conoce cómo funcionan nuestros envíos.
          </p>

        </div>

      </section>


      {/* INTRO */}
      <section className="border-t border-unilen-ink/10 px-6 py-24 small:py-36">

        <div className="mx-auto max-w-5xl">

          <div className="grid grid-cols-1 gap-14 small:grid-cols-2 small:items-end">

            <div>

              <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
                Antes de recibirlo
              </span>

              <h2 className="mt-6 font-display text-5xl leading-[0.85] tracking-[-0.06em] text-unilen-black small:text-7xl">
                Del carrito
                <br />
                <span className="text-unilen-red">
                  hasta ti.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-base leading-relaxed text-unilen-ink/65 small:text-base">
              Trabajamos para que cada pedido sea preparado con cuidado
              y llegue de forma segura hasta tu destino.
            </p>

          </div>

        </div>

      </section>


      {/* SHIPPING INFORMATION */}
      <section className="px-6 pb-24 small:pb-36">

        <div className="mx-auto max-w-6xl">

          <div className="grid grid-cols-1 border-t border-unilen-ink/10 small:grid-cols-2">

            {shippingInfo.map((item, index) => (

              <div
                key={item.title}
                className={`group px-6 py-12 transition-colors duration-500 hover:bg-unilen-black small:px-10 ${
                  index % 2 === 0
                    ? "small:border-r"
                    : ""
                } border-b border-unilen-ink/10`}
              >

                <div className="flex items-start justify-between gap-6">

                  <h3 className="font-display text-3xl tracking-[-0.04em] text-unilen-black transition-colors duration-300 group-hover:text-white small:text-4xl">
                    {item.title}
                  </h3>

                  <span className="text-xl text-unilen-red transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <p className="mt-6 max-w-md text-base leading-relaxed text-unilen-ink/60 transition-colors duration-300 group-hover:text-white/55">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* IMPORTANT */}
      <section className="bg-unilen-black px-6 py-28 small:py-36">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            Importante
          </span>

          <h2 className="mt-8 font-display text-5xl leading-[0.85] tracking-[-0.06em] text-white small:text-7xl">
            Cada pedido
            <br />
            <span className="text-unilen-red">
              es diferente.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/55 small:text-base">
            Los tiempos y condiciones de entrega pueden variar dependiendo
            del producto, disponibilidad y ubicación. La información
            correspondiente se indicará durante el proceso de compra.
          </p>

        </div>

      </section>


      {/* NATIONAL COVERAGE */}
      <section className="px-6 py-24 small:py-36">

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
              Presencia nacional
            </span>

            <h2 className="mt-6 font-display text-5xl leading-[0.85] tracking-[-0.06em] text-unilen-black small:text-7xl">
              Más cerca
              <br />
              <span className="text-unilen-red">
                de ti.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-unilen-ink/60">
              Nuestra presencia en diferentes ciudades de Honduras
              nos permite estar cerca de nuestros clientes.
            </p>

          </div>


          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-unilen-ink/10 pt-10">

            {[
              "Tegucigalpa",
              "San Pedro Sula",
              "Danlí",
              "Comayagua",
              "La Ceiba",
              "Villanueva",
              "Tocoa",
              "Roatán",
              "Juticalpa",
              "Catacamas",
              "El Progreso",
            ].map((city) => (

              <span
                key={city}
                className="text-base text-unilen-ink/60 transition-colors duration-300 hover:text-unilen-red"
              >
                {city}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="bg-unilen-red px-6 py-28 text-center small:py-36">

        <div className="mx-auto max-w-4xl">

          <span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
            ¿Necesitas ayuda?
          </span>

          <h2 className="mt-8 font-display text-6xl leading-[0.8] tracking-[-0.07em] text-white small:text-8xl">
            Hablemos
            <br />
            <span className="text-unilen-black">
              contigo.
            </span>
          </h2>

          <Text className="mx-auto mt-8 max-w-md text-base leading-relaxed text-white/75">
            Si tienes alguna pregunta sobre tu pedido o envío,
            estamos aquí para ayudarte.
          </Text>

          <a
            href="https://wa.me/50487954789"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-4 border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-unilen-black hover:bg-unilen-black"
          >
            WhatsApp
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  )
}
