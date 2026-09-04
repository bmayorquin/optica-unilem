"use client"

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react"
import { XMark } from "@medusajs/icons"
import { Text, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { HttpTypes } from "@medusajs/types"
import { Locale } from "@lib/data/locales"

const SideMenuItems = {
  Inicio: "/",
  Colección: "/store",
  Cuenta: "/account",
  Carrito: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({
  regions,
  locales,
  currentLocale,
}: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <Popover className="h-full flex">
        {({ open, close }) => (
          <>
            {/* MENU BUTTON */}
            <PopoverButton
              data-testid="nav-menu-button"
              className="group h-full flex items-center gap-3 focus:outline-none"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-unilen-black">
                Menú
              </span>

              <span className="relative flex flex-col gap-[5px] w-7">
                <span className="block h-[1px] w-7 bg-unilen-black transition-all duration-300 group-hover:w-4" />
                <span className="block h-[1px] w-5 bg-unilen-red transition-all duration-300 group-hover:w-7" />
              </span>
            </PopoverButton>

            {/* BACKDROP */}
            {open && (
              <div
                className="fixed inset-0 z-[50] bg-black/30 backdrop-blur-sm"
                onClick={close}
              />
            )}

            {/* MENU */}
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 -translate-x-8"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 -translate-x-8"
            >
              <PopoverPanel
                static
                className="fixed left-0 top-0 z-[51] h-screen w-full small:w-[480px]"
              >
                <div
                  data-testid="nav-menu-popup"
                  className="relative flex h-full flex-col justify-between overflow-hidden bg-unilen-black p-7 small:p-10"
                >

                  {/* DECORACIÓN */}
                  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.06]" />
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-unilen-red/[0.15]" />

                  {/* HEADER */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-display text-xl tracking-tight text-white">
                      UNILEN<span className="text-unilen-red">.</span>
                    </span>

                    <button
                      data-testid="close-menu-button"
                      onClick={close}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-unilen-red hover:bg-unilen-red"
                    >
                      <XMark className="text-white transition-transform duration-300 group-hover:rotate-90" />
                    </button>
                  </div>

                  {/* NAVIGATION */}
                  <nav className="relative z-10">
                    <span className="mb-7 block text-[9px] uppercase tracking-[0.4em] text-white/30">
                      Explora Unilem
                    </span>

                    <ul className="flex flex-col">
                      {Object.entries(SideMenuItems).map(
                        ([name, href], index) => (
                          <li key={name} className="group">
                            <LocalizedClientLink
                              href={href}
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                              className="flex items-center gap-5 border-b border-white/[0.08] py-5 transition-all duration-300 hover:pl-3"
                            >
                              <span className="text-[9px] tracking-widest text-unilen-red">
                                0{index + 1}
                              </span>

                              <span className="font-display text-4xl tracking-tight text-white transition-colors duration-300 group-hover:text-unilen-red">
                                {name}
                              </span>
                            </LocalizedClientLink>
                          </li>
                        )
                      )}
                    </ul>
                  </nav>

                  {/* FOOTER */}
                  <div className="relative z-10 flex flex-col gap-6">

                    {!!locales?.length && (
                      <div
                        className="flex items-center justify-between border-b border-white/10 pb-4 text-white"
                        onMouseEnter={languageToggleState.open}
                        onMouseLeave={languageToggleState.close}
                      >
                        <LanguageSelect
                          toggleState={languageToggleState}
                          locales={locales}
                          currentLocale={currentLocale}
                        />
                      </div>
                    )}

                    {regions && (
                      <div
                        className="flex items-center justify-between border-b border-white/10 pb-4 text-white"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        <CountrySelect
                          toggleState={countryToggleState}
                          regions={regions}
                        />
                      </div>
                    )}

                    <div className="flex items-end justify-between">
                      <div>
                        <span className="block text-[9px] uppercase tracking-[0.3em] text-white/30">
                          Óptica Unilem
                        </span>
                        <span className="mt-2 block text-xs text-white/40">
                          Tu mirada, tu esencia.
                        </span>
                      </div>

                      <Text className="text-[9px] text-white/20">
                        © {new Date().getFullYear()}
                      </Text>
                    </div>
                  </div>

                  {/* RED ACCENT */}
                  <div className="absolute bottom-0 left-0 h-1 w-24 bg-unilen-red" />

                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default SideMenu