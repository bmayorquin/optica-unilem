import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Archivo } from "next/font/google"
import "styles/globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light" className={archivo.variable}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
