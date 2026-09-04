import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center gap-x-2 flex-wrap">
      <Text
        className={clx("text-ui-fg-muted font-semibold", {
          "text-unilen-red": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>

      {price.price_type === "sale" && (
        <>
          <Text
            className="line-through text-ui-fg-muted text-sm"
            data-testid="original-price"
          >
            {price.original_price}
          </Text>

          <span className="bg-unilen-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm uppercase">
            {price.percentage_diff}% Dcto
          </span>
        </>
      )}
    </div>
  )
}