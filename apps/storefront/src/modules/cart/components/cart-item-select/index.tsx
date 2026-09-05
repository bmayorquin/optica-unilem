"use client"

import { Fragment } from "react"
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react"
import ChevronDown from "@modules/common/icons/chevron-down"

type CartItemSelectProps = {
  value: number
  onChange: (value: number) => void
  maxQuantity: number
  className?: string
  "data-testid"?: string
}

const CartItemSelect = ({
  value,
  onChange,
  maxQuantity,
  className,
  "data-testid": dataTestId,
}: CartItemSelectProps) => {
  const options = Array.from(
    { length: Math.max(maxQuantity, 1) },
    (_, i) => i + 1
  )

  return (
    <div className={`relative ${className ?? ""}`}>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          data-testid={dataTestId}
          className="flex items-center justify-between gap-x-2 h-10 w-16 px-3 border-2 border-unilen-red text-sm text-unilen-black hover:border-unilen-black transition-colors focus:outline-none"
        >
          <span>{value}</span>
          <ChevronDown className="text-unilen-ink/60" />
        </ListboxButton>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            static
            className="absolute z-20 mt-1 max-h-48 w-16 overflow-y-auto bg-white border border-unilen-ink/10 shadow-md text-sm"
          >
            {options.map((n) => (
              <ListboxOption
                key={n}
                value={n}
                className="px-3 py-2 cursor-pointer text-center text-unilen-black hover:bg-unilen-red hover:text-white transition-colors"
              >
                {n}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  )
}

export default CartItemSelect
