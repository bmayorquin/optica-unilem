import { Metadata } from "next"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Footer from "@modules/layout/templates/footer"
import PromoSection from "@modules/home/components/promo-section"
import FeaturesRow from "@modules/home/components/features-row"
import BrandsStrip from "@modules/home/components/brands-strip"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Óptica Unilen",
  description:
    "Óptica Unilen — lentes de sol, oftálmicos, de contacto y accesorios en Honduras.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <PromoSection />
      <FeaturesRow />
      <BrandsStrip />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <Footer />
    </>
  )
}
