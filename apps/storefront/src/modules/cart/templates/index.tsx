import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="py-12 bg-unilen-cream min-h-screen">
      <div className="content-container" data-testid="cart-container">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-unilen-red" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-unilen-red">
            Tu selección
          </span>
        </div>
        <h1 className="font-display text-3xl small:text-4xl text-unilen-black mb-10">
          Carrito
        </h1>

        {cart?.items?.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
            <div className="flex flex-col bg-white py-6 gap-y-6 border border-unilen-ink/10 rounded-lg overflow-hidden">
              {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )}
              <ItemsTemplate cart={cart} />
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (
                  <>
                    <div className="bg-white py-6 px-6 border-t-2 border-unilen-red border-x border-b border-unilen-ink/10 rounded-lg">
                      <Summary cart={cart as any} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate