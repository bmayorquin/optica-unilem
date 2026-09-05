import { listProducts } from "@lib/data/products"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  const allPrices = pricedProducts
    .flatMap((p: any) =>
      (p.variants || [])
        .filter((v: any) => !!v.calculated_price)
        .map((v: any) => v.calculated_price.calculated_amount)
    )
    .filter((amount: number) => typeof amount === "number")

  const minPrice = allPrices.length ? Math.min(...allPrices) : null
  const maxPrice = allPrices.length ? Math.max(...allPrices) : null
  const currencyCode = pricedProducts[0]?.variants?.[0]?.calculated_price?.currency_code

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display text-3xl small:text-4xl text-unilen-black">
            {collection.title}
          </h2>
          {minPrice !== null && maxPrice !== null && currencyCode && (
            <p className="mt-2 text-base text-ui-fg-subtle">
              Lentes desde{" "}
              {convertToLocale({ amount: minPrice, currency_code: currencyCode })}
              {" "}hasta{" "}
              {convertToLocale({ amount: maxPrice, currency_code: currencyCode })}
            </p>
          )}
        </div>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          Ver todo
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} />
            </li>
          ))}
      </ul>
    </div>
  )
}
