import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  const totalStock = (product.variants || []).reduce((sum: number, v: any) => {
    if (!v.manage_inventory) {
      return sum
    }
    return sum + (v.inventory_quantity || 0)
  }, 0)

  const anyManagesInventory = (product.variants || []).some(
    (v: any) => v.manage_inventory
  )

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group" target="_blank" rel="noopener noreferrer">
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col mt-4 gap-y-1">
          {product.type?.value && (
            <Text
              className="text-xs font-bold uppercase tracking-wide text-unilen-black"
              data-testid="product-brand"
            >
              {product.type.value}
            </Text>
          )}
          <Text
            className="text-ui-fg-subtle text-base uppercase"
            data-testid="product-title"
          >
            {product.title}
          </Text>
          <div className="mt-1">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
          {anyManagesInventory && (
            <Text
              className="text-xs text-unilen-ink/60 mt-1"
              data-testid="product-stock"
            >
              {totalStock > 0
                ? `${totalStock} disponible${totalStock === 1 ? "" : "s"}`
                : "Sin existencias"}
            </Text>
          )}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
