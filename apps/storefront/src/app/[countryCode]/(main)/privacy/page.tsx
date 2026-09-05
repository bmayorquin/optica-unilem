export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-unilen-cream text-unilen-ink">
      {/* HERO */}
      <section className="border-b border-unilen-ink/10">
        <div className="content-container py-20 small:py-32">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-unilen-red" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-unilen-red">
              Información legal
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 medium:grid-cols-[1fr_300px]">
            <div>
              <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.05em] text-unilen-black small:text-8xl">
                Política
                <br />
                <span className="text-unilen-red">de privacidad.</span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-unilen-ink/70">
                En Óptica Unilen valoramos tu privacidad. Esta política
                explica qué información podemos recopilar, cómo la utilizamos
                y las medidas que aplicamos para protegerla.
              </p>
            </div>

            <div className="flex items-end medium:justify-end">
              <div className="border-l border-unilen-red pl-5">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-unilen-red">
                  Última actualización
                </span>

                <span className="mt-2 block font-display text-2xl text-unilen-black">
                  Septiembre 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="content-container py-16 small:py-24">
        <div className="grid grid-cols-1 gap-16 medium:grid-cols-[220px_1fr]">

          {/* INDEX */}
          <aside className="medium:sticky medium:top-10 medium:self-start">
            <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
              Contenido
            </span>

            <nav className="mt-5 space-y-3">
              <a
                href="#informacion"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                01 — Información
              </a>

              <a
                href="#uso"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                02 — Uso de datos
              </a>

              <a
                href="#proteccion"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                03 — Protección
              </a>

              <a
                href="#cookies"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                04 — Cookies
              </a>

              <a
                href="#terceros"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                05 — Terceros
              </a>

              <a
                href="#derechos"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                06 — Tus derechos
              </a>

              <a
                href="#contacto"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                07 — Contacto
              </a>
            </nav>
          </aside>

          {/* TEXT */}
          <div className="max-w-3xl">

            <section
              id="informacion"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                01
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Información que recopilamos
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Podemos recopilar información que proporcionas directamente
                al crear una cuenta, realizar una compra, completar un
                formulario o comunicarte con nosotros.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Esta información puede incluir tu nombre, dirección de
                entrega, información de contacto y datos necesarios para
                procesar tus pedidos.
              </p>
            </section>

            <section
              id="uso"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                02
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Uso de la información
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Utilizamos la información recopilada para gestionar pedidos,
                procesar pagos, coordinar entregas, brindar atención al
                cliente y mejorar nuestros productos y servicios.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                También podemos utilizarla para comunicarnos contigo en
                relación con tus compras, solicitudes o actualizaciones
                importantes del servicio.
              </p>
            </section>

            <section
              id="proteccion"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                03
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Protección de datos
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Aplicamos medidas razonables de seguridad para proteger la
                información personal frente a accesos no autorizados,
                alteraciones, divulgación o destrucción.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Sin embargo, ningún sistema de transmisión o almacenamiento
                electrónico puede garantizar una seguridad absoluta.
              </p>
            </section>

            <section
              id="cookies"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                04
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Cookies
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Nuestro sitio puede utilizar cookies y tecnologías similares
                para mejorar la experiencia de navegación, recordar
                determinadas preferencias y comprender cómo se utiliza el
                sitio.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Puedes configurar tu navegador para aceptar, rechazar o
                eliminar cookies según tus preferencias.
              </p>
            </section>

            <section
              id="terceros"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                05
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Servicios de terceros
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Para ofrecer determinados servicios, podemos trabajar con
                proveedores externos que participan en procesos como pagos,
                envíos, alojamiento, análisis o herramientas tecnológicas.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Estos proveedores únicamente deberían acceder a la información
                necesaria para prestar los servicios correspondientes y están
                sujetos a sus propias políticas y obligaciones.
              </p>
            </section>

            <section
              id="derechos"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                06
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Tus derechos
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Puedes solicitar información sobre los datos personales que
                conservamos, así como solicitar su actualización o corrección
                cuando corresponda.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Las solicitudes estarán sujetas a las obligaciones legales
                aplicables y a los procedimientos de verificación necesarios
                para proteger tu información.
              </p>
            </section>

            <section
              id="contacto"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                07
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Contacto
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Si tienes preguntas sobre esta política de privacidad o sobre
                el tratamiento de tus datos personales, puedes comunicarte
                con Óptica Unilen a través de nuestros canales oficiales.
              </p>

              <div className="mt-8 border border-unilen-ink/10 bg-white/40 p-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
                  Óptica Unilen
                </span>

                <p className="mt-3 text-sm text-unilen-black">
                  Tu mirada, tu esencia.
                </p>

                <p className="mt-2 text-xs text-unilen-ink/60">
                  Para consultas relacionadas con privacidad, utiliza
                  nuestros canales oficiales de contacto.
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-unilen-ink/10">
        <div className="content-container py-10">
          <div className="flex flex-col gap-3 small:flex-row small:items-center small:justify-between">
            <span className="font-display text-2xl text-unilen-black">
              UNILEN
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-unilen-ink/40">
              Política de privacidad
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}