"use client"

import { useEffect, useState } from "react"

type PromoImageCarouselProps = {
  images: string[]
}

const PromoImageCarousel = ({ images }: PromoImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  if (!images.length) {
    return null
  }

  return (
    <div className="group overflow-hidden aspect-[3/4] relative bg-unilen-cream">
      {images.map((url, index) => (
        <img
          key={url}
          src={url}
          alt="Promoción Unilen"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PromoImageCarousel
