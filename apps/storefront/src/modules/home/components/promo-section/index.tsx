import { listRegions } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PromoImageCarousel from "@modules/layout/components/promo-image-carousel"

export default async function PromoSection() {
  const regions = await listRegions()
  const honduras = regions?.find((r: any) => r.name === "Honduras")

  const promoImages = [
    honduras?.metadata?.promo_image_url_1,
    honduras?.metadata?.promo_image_url_2,
    honduras?.metadata?.promo_image_url_3,
    honduras?.metadata?.promo_image_url_4,
  ].filter(Boolean) as string[]

  return (
    <div className="pt-4 pb-16 small:pt-6 small:pb-24">
      <div className="w-full">
        <PromoImageCarousel images={promoImages} />
      </div>

      <div className="content-container">
        <div className="flex flex-col items-center text-center mt-10">
          <LocalizedClientLink href="/">
            <span className="font-display text-5xl small:text-6xl tracking-[-0.04em] text-unilen-black">
              UNILEN
            </span>
          </LocalizedClientLink>

          <p className="mt-5 max-w-md text-base leading-relaxed text-unilen-ink">
            Tu mirada, tu esencia. Lentes pensados para tu estilo,
            tu rostro y tu visión.
          </p>
        </div>
      </div>
    </div>
  )
}
