import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="w-full bg-unilen-black relative overflow-hidden">
      <div className="content-container py-20 small:py-32">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-12 items-center">
          {/* Left: brand mark echo — bracket motif from the logo */}
          <div className="relative order-2 small:order-1">
            <div className="relative aspect-square max-w-md mx-auto small:mx-0">
              {/* Red bracket frame, echoing the Unilen logo */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-unilen-red" />
              <div className="absolute left-0 top-0 w-16 h-[3px] bg-unilen-red" />
              <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-unilen-red" />
              <div className="absolute right-0 top-0 w-16 h-[3px] bg-unilen-red" />
              <div className="w-full h-full flex items-center justify-center p-10">
                <span className="font-display text-unilen-cream text-[13vw] small:text-7xl tracking-tight leading-none">
                  UNILEN
                </span>
              </div>
            </div>
          </div>

          {/* Right: message */}
          <div className="order-1 small:order-2 flex flex-col gap-6 text-center small:text-left items-center small:items-start">
            <Heading
              level="h1"
              className="font-display text-4xl small:text-5xl text-unilen-cream leading-tight"
            >
              Ve el mundo
              <br />
              con estilo.
            </Heading>
            <Text className="text-grey-30 text-lg max-w-sm">
              Armazones y lentes seleccionados para cada rostro, en todo
              Honduras.
            </Text>
            <LocalizedClientLink href="/store">
              <Button className="bg-unilen-red hover:bg-unilen-red-dark border-none rounded-none px-8 py-4 text-base">
                Ver colección
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero