"use client"

import { useState } from "react"

const faqSections = [
  {
    title: "PEDIDOS",
    subtitle: "Todo sobre tu compra.",
    questions: [
      {
        question: "¿Cómo puedo realizar un pedido?",
        answer:
          "Puedes explorar nuestra tienda en línea, seleccionar los productos que deseas y seguir los pasos indicados para completar tu compra.",
      },
      {
        question: "¿Cómo puedo saber dónde está mi pedido?",
        answer:
          "Una vez procesada tu compra, recibirás la información correspondiente sobre el estado y seguimiento de tu pedido.",
      },
      {
        question: "¿Cuánto tarda en llegar mi pedido?",
        answer:
          "Los tiempos de entrega pueden variar dependiendo de la ubicación y disponibilidad del producto. La información correspondiente se proporcionará durante el proceso de compra.",
      },
    ],
  },
  {
    title: "PRODUCTOS",
    subtitle: "Conoce nuestros lentes.",
    questions: [
      {
        question: "¿Qué tipo de lentes puedo encontrar?",
        answer:
          "Contamos con diferentes opciones de lentes para distintos estilos, necesidades visuales y tipos de rostro.",
      },
      {
        question: "¿Los lentes graduados se elaboran según mi fórmula?",
        answer:
          "Sí. Los lentes graduados se elaboran de acuerdo con la fórmula óptica proporcionada por cada cliente.",
      },
      {
        question: "¿Puedo encontrar lentes de sol?",
        answer:
          "Sí. Contamos con opciones de lentes de sol disponibles en diferentes diseños y estilos.",
      },
    ],
  },
  {
    title: "PAGOS",
    subtitle: "Formas de pago y cobros.",
    questions: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Los métodos de pago disponibles se mostrarán durante el proceso de compra, antes de confirmar tu pedido.",
      },
      {
        question: "¿Los precios están expresados en lempiras?",
        answer:
          "Sí. Los precios de nuestra tienda están expresados en Lempiras e incluyen los impuestos correspondientes.",
      },
      {
        question: "¿Cuándo se realiza el cobro?",
        answer:
          "El pago se procesa de acuerdo con el método seleccionado durante la confirmación de tu pedido.",
      },
    ],
  },
  {
    title: "CAMBIOS",
    subtitle: "Cambios, devoluciones y garantía.",
    questions: [
      {
        question: "¿Puedo cambiar mis lentes?",
        answer:
          "Los lentes sin graduación, lentes de sol y accesorios pueden cambiarse por otro modelo, color o talla, sujeto a disponibilidad.",
      },
      {
        question: "¿Cuánto tiempo tengo para solicitar un cambio?",
        answer:
          "Tienes hasta 7 días calendario después de recibir tu pedido para solicitar un cambio, sujeto a las condiciones establecidas.",
      },
      {
        question: "¿Los lentes graduados tienen devolución?",
        answer:
          "Por tratarse de productos elaborados a la medida, los lentes graduados no aplican para devolución, salvo en casos de error de fabricación o defecto comprobado.",
      },
      {
        question: "¿Los productos tienen garantía?",
        answer:
          "Nuestros productos cuentan con garantía contra defectos de fabricación. Si detectas algún problema de este tipo, contáctanos para coordinar una solución.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleQuestion = (question: string) => {
    setOpenQuestion(
      openQuestion === question ? null : question
    )
  }

  return (
    <main className="w-full overflow-hidden bg-unilen-cream text-unilen-ink">

      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-center justify-center px-6">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[35vw] leading-none tracking-[-0.12em] text-unilen-black/[0.025]">
            ?
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.55em] text-unilen-red">
            FAQ
          </span>

          <h1 className="mt-8 font-display text-6xl leading-[0.78] tracking-[-0.07em] text-unilen-black small:text-8xl medium:text-[9rem]">
            Lo que quieres
            <br />
            <span className="text-unilen-red">
              saber.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-unilen-ink/60 small:text-base">
            Información clara sobre tus pedidos, pagos,
            productos y cambios.
          </p>

        </div>

      </section>


      {/* FAQ EDITORIAL */}
      <section className="border-t border-unilen-ink/10 px-6 py-24 small:py-36">

        <div className="mx-auto max-w-6xl">

          {/* TITLE */}
          <div className="mb-20">

            <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
              Información
            </span>

            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.82] tracking-[-0.06em] text-unilen-black small:text-7xl">
              Todo lo que
              <br />
              <span className="text-unilen-red">
                necesitas saber.
              </span>
            </h2>

          </div>


          {/* GRID */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-20 small:grid-cols-2">

            {faqSections.map((section) => (

              <div key={section.title}>

                {/* SECTION HEADER */}
                <div className="mb-8">

                  <div className="flex items-center gap-5">

                    <h3 className="font-display text-3xl tracking-[-0.04em] text-unilen-black small:text-4xl">
                      {section.title}
                    </h3>

                    <div className="h-px flex-1 bg-unilen-red/40" />

                  </div>

                  <p className="mt-3 text-xs text-unilen-ink/50 small:text-sm">
                    {section.subtitle}
                  </p>

                </div>


                {/* QUESTIONS */}
                <div>

                  {section.questions.map((item) => {

                    const isOpen = openQuestion === item.question

                    return (
                      <div
                        key={item.question}
                        className="border-b border-unilen-ink/10"
                      >

                        <button
                          type="button"
                          onClick={() =>
                            toggleQuestion(item.question)
                          }
                          className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                          aria-expanded={isOpen}
                        >

                          <span
                            className={`text-sm leading-relaxed transition-colors duration-300 small:text-base ${
                              isOpen
                                ? "text-unilen-red"
                                : "text-unilen-black group-hover:text-unilen-red"
                            }`}
                          >
                            {item.question}
                          </span>

                          <span
                            className={`mt-0.5 shrink-0 text-xl font-light text-unilen-red transition-transform duration-300 ${
                              isOpen
                                ? "rotate-45"
                                : "rotate-0"
                            }`}
                          >
                            +
                          </span>

                        </button>


                        {/* ANSWER */}
                        <div
                          className={`grid transition-all duration-400 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >

                          <div className="overflow-hidden">

                            <p className="max-w-lg pb-6 pr-10 text-sm leading-relaxed text-unilen-ink/60">
                              {item.answer}
                            </p>

                          </div>

                        </div>

                      </div>
                    )
                  })}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="bg-unilen-black px-6 py-28 small:py-40">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-[10px] uppercase tracking-[0.5em] text-unilen-red">
            ¿Todavía tienes preguntas?
          </span>

          <h2 className="mt-8 font-display text-5xl leading-[0.85] tracking-[-0.06em] text-white small:text-7xl">
            Hablemos
            <br />
            <span className="text-unilen-red">
              contigo.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-white/50">
            Si no encontraste la respuesta que buscabas,
            puedes comunicarte directamente con nosotros.
          </p>

          <a
            href="https://wa.me/50487954789"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-4 border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-unilen-red hover:bg-unilen-red"
          >
            WhatsApp
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* FINAL BRAND */}
      <section className="relative overflow-hidden bg-unilen-red px-6 py-32 text-center small:py-44">

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

          <span className="font-display text-[35vw] leading-none tracking-[-0.1em] text-white/[0.05]">
            U
          </span>

        </div>

        <div className="relative z-10">

          <span className="text-[10px] uppercase tracking-[0.5em] text-white/70">
            Óptica Unilen
          </span>

          <h2 className="mt-8 font-display text-7xl leading-[0.78] tracking-[-0.08em] text-white small:text-[10rem]">
            Mira
            <br />
            diferente
            <span className="text-unilen-black">
              .
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-sm text-sm leading-relaxed text-white/75">
            Tu mirada, tu esencia.
          </p>

        </div>

      </section>

    </main>
  )
}
