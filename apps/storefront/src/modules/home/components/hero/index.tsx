import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="w-full bg-unilen-black relative overflow-hidden">
      <div className="content-container min-h-[55vh] flex items-center py-12 small:py-16">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-12 small:gap-20 items-center w-full">

          {/* Typography */}
          <div className="order-1 flex flex-col gap-7 small:items-start items-center text-center small:text-left z-10">
            <span className="text-unilen-red text-xs tracking-[0.35em] uppercase font-medium">
              Óptica Unilem
            </span>

            <Heading
              level="h1"
              className="font-display text-5xl small:text-7xl text-white leading-[0.95] tracking-tight"
            >
              Una nueva
              <br />
              <span className="text-unilen-red">forma de mirar.</span>
            </Heading>

            <Text className="text-white/60 text-base small:text-lg max-w-md leading-relaxed">
              Diseños y lentes pensados para tu estilo, tu rostro y tu visión.
            </Text>

            <LocalizedClientLink href="/store">
              <Button className="bg-unilen-red hover:bg-unilen-red-dark border-none rounded-none px-9 py-4 text-base uppercase tracking-widest">
                Ver colección
              </Button>
            </LocalizedClientLink>
          </div>

          {/* UNILEN typography composition */}
          <div className="order-2 relative flex items-center justify-center min-h-[320px] small:min-h-[500px]">

            <div className="absolute text-[18vw] small:text-[11vw] font-display font-bold text-white/[0.035] leading-none select-none">
              U
            </div>

            <div className="relative flex flex-col items-center">
              <span className="font-display text-[17vw] small:text-[9vw] font-bold tracking-[-0.08em] leading-[0.75] text-white">
                UNILEN
              </span>

              <div className="w-full h-px bg-unilen-red mt-8" />

              <span className="mt-4 text-white/40 text-[9px] tracking-[0.5em] uppercase">
                Visión · Estilo · Precisión
              </span>
            </div>

            <div className="absolute -right-5 small:right-0 top-1/2 -translate-y-1/2 w-24 h-24 small:w-40 small:h-40 border border-unilen-red/40 rounded-full" />

            <div className="absolute -right-1 small:right-7 top-1/2 -translate-y-1/2 w-16 h-16 small:w-28 small:h-28 border border-white/10 rounded-full" />
          </div>

        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </div>
  )
}

export default Hero
