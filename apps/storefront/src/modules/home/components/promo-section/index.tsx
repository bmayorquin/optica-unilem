import { listRegions } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import PromoImageCarousel from "@modules/layout/components/promo-image-carousel"

export default async function PromoSection() {
  const regions = await listRegions()
  const honduras = regions?.find((r: any) => r.name === "Honduras")

  const promoVideoUrl =
    honduras?.metadata?.promo_video_url || "/promo/video.mp4"

  const promoImages = [
    honduras?.metadata?.promo_image_url_1,
    honduras?.metadata?.promo_image_url_2,
    honduras?.metadata?.promo_image_url_3,
  ].filter(Boolean) as string[]

  return (
    <div className="content-container pt-4 pb-16 small:pt-6 small:pb-24">
      <div className="flex flex-col items-center gap-y-10 max-w-4xl mx-auto">
        <div className="group overflow-hidden aspect-video w-full bg-black">
          <video
            src={promoVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <LocalizedClientLink href="/">
            <span className="font-display text-5xl small:text-6xl tracking-[-0.04em] text-unilen-black">
              UNILEN<span className="text-unilen-red">.</span>
            </span>
          </LocalizedClientLink>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-unilen-ink">
            Tu mirada, tu esencia. Lentes pensados para tu estilo,
            tu rostro y tu visión.
          </p>
        </div>

        <div className="w-full max-w-md">
          <PromoImageCarousel images={promoImages} />
        </div>
      </div>
    </div>
  )
}
