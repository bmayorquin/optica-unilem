export default function TermsConditionsPage() {
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
                Términos
                <br />
                <span className="text-unilen-red">y condiciones.</span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-unilen-ink/70">
                Queremos que tu experiencia en Óptica Unilen sea clara,
                segura y transparente. Aquí encontrarás las condiciones
                que aplican al utilizar nuestro sitio web y realizar
                compras con nosotros.
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
                href="#aceptacion"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                01 — Aceptación
              </a>

              <a
                href="#productos"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                02 — Productos
              </a>

              <a
                href="#pedidos"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                03 — Pedidos
              </a>

              <a
                href="#pagos"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                04 — Pagos
              </a>

              <a
                href="#responsabilidad"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                05 — Responsabilidad
              </a>

              <a
                href="#contacto"
                className="block text-xs text-unilen-ink/60 transition-colors hover:text-unilen-red"
              >
                06 — Contacto
              </a>
            </nav>
          </aside>

          {/* TEXT */}
          <div className="max-w-3xl">

            <section
              id="aceptacion"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                01
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Aceptación de los términos
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Al acceder y utilizar este sitio web, realizar una compra
                o utilizar cualquiera de nuestros servicios, aceptas
                cumplir con estos términos y condiciones.
              </p>
            </section>

            <section
              id="productos"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                02
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Productos y precios
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Nos esforzamos por proporcionar información precisa sobre
                nuestros productos, precios, características y disponibilidad.
                Sin embargo, esta información puede actualizarse o modificarse
                sin previo aviso.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Las imágenes utilizadas en el sitio tienen fines ilustrativos
                y pueden presentar pequeñas diferencias respecto al producto
                recibido.
              </p>
            </section>

            <section
              id="pedidos"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                03
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Pedidos
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Al completar una compra, confirmas que la información
                proporcionada es correcta y que deseas realizar el pedido.
              </p>

              <p className="mt-4 text-sm leading-7 text-unilen-ink/70">
                Óptica Unilen se reserva el derecho de cancelar o rechazar
                un pedido cuando exista un error evidente en el precio,
                disponibilidad del producto o información proporcionada.
              </p>
            </section>

            <section
              id="pagos"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                04
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Pagos
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Los pagos se procesan mediante los métodos disponibles
                durante el proceso de compra. La confirmación del pedido
                estará sujeta a la aprobación correspondiente del método
                de pago seleccionado.
              </p>
            </section>

            <section
              id="responsabilidad"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                05
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Responsabilidad
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                El usuario se compromete a utilizar este sitio de manera
                responsable y conforme a las leyes aplicables. No está
                permitido utilizar el sitio para actividades fraudulentas,
                ilícitas o que puedan afectar su funcionamiento.
              </p>
            </section>

            <section
              id="contacto"
              className="scroll-mt-10 border-t border-unilen-ink/10 py-10"
            >
              <span className="text-[10px] tracking-[0.3em] text-unilen-red">
                06
              </span>

              <h2 className="mt-3 font-display text-3xl text-unilen-black">
                Contacto
              </h2>

              <p className="mt-5 text-sm leading-7 text-unilen-ink/70">
                Si tienes preguntas sobre estos términos y condiciones,
                puedes comunicarte con Óptica Unilen a través de nuestros
                canales oficiales de atención.
              </p>

              <div className="mt-8 border border-unilen-ink/10 bg-white/40 p-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
                  Óptica Unilen
                </span>

                <p className="mt-3 text-sm text-unilen-black">
                  Tu mirada, tu esencia.
                </p>

                <p className="mt-2 text-xs text-unilen-ink/60">
                  Para consultas, utiliza nuestros canales oficiales de
                  contacto.
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
              Términos y condiciones
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
