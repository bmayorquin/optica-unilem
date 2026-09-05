import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cambios y Devoluciones | Óptica Unilen",
  description: "Política de cambios y devoluciones de Óptica Unilen.",
}

export default function ReturnsPage() {
  return (
    <div className="content-container py-16 max-w-3xl mx-auto">
      <div className="mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-unilen-red">
          Atención al cliente
        </span>
        <h1 className="mt-3 font-display text-4xl small:text-5xl text-unilen-black">
          Cambios y devoluciones
        </h1>
      </div>

      <div className="flex flex-col gap-y-8 text-base leading-relaxed text-unilen-ink">
        <section>
          <h2 className="font-display text-xl text-unilen-black mb-2">
            Plazo para devoluciones
          </h2>
          <p>
            Contás con 7 días calendario a partir de la fecha de entrega para
            solicitar un cambio o devolución de tu producto.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-unilen-black mb-2">
            Condiciones
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-y-1">
            <li>El producto debe estar sin uso y en su empaque original.</li>
            <li>Debe incluir el comprobante de compra.</li>
            <li>
              Los lentes de contacto no aplican para devolución por razones de
              higiene, salvo defecto de fábrica.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-unilen-black mb-2">
            ¿Cómo solicitar un cambio o devolución?
          </h2>
          <p>
            Escribinos a través de nuestro{" "}
            <a href="/contact" className="text-unilen-red underline">
              formulario de contacto
            </a>{" "}
            o visitá cualquiera de nuestras tiendas con tu producto y
            comprobante de compra.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-unilen-black mb-2">
            Reembolsos
          </h2>
          <p>
            Una vez aprobada la devolución, el reembolso se procesa en un
            plazo de 5 a 10 días hábiles, utilizando el mismo método de pago
            original.
          </p>
        </section>
      </div>
    </div>
  )
}
