import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function MiniFooter() {
  return (
    <footer className="w-full bg-unilen-black text-white">
      <div className="content-container py-8">
        <div className="flex flex-col small:flex-row items-center justify-between gap-4">
          <LocalizedClientLink href="/">
            <span className="font-display text-2xl tracking-tight">
              UNILEN<span className="text-unilen-red">.</span>
            </span>
          </LocalizedClientLink>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-wide text-white/70">
            <LocalizedClientLink href="/contact" className="hover:text-unilen-red">
              Contacto
            </LocalizedClientLink>
            <LocalizedClientLink href="/faq" className="hover:text-unilen-red">
              Preguntas frecuentes
            </LocalizedClientLink>
            <LocalizedClientLink href="/returns" className="hover:text-unilen-red">
              Cambios y devoluciones
            </LocalizedClientLink>
            <LocalizedClientLink href="/terms_conditions" className="hover:text-unilen-red">
              Términos
            </LocalizedClientLink>
            <LocalizedClientLink href="/privacy" className="hover:text-unilen-red">
              Privacidad
            </LocalizedClientLink>
          </div>

          <span className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Óptica Unilem
          </span>
        </div>
      </div>
    </footer>
  )
}
