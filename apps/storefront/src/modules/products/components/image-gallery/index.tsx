"use client"

import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: {
    id: string
    url: string
  }[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const currentImage = images[currentIndex]

  return (
    <div className="flex items-center gap-x-4 max-w-[400px] mx-auto small:mx-16">
      {images.length > 1 && (
        <div className="flex flex-col items-center gap-y-3 shrink-0">
          <button
            onClick={goToPrevious}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ui-border-base bg-white shadow-sm hover:bg-ui-bg-subtle transition-colors"
            aria-label="Imagen anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 text-unilen-black"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-y-2 py-1">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full border transition-colors ${
                  index === currentIndex
                    ? "bg-unilen-black border-unilen-black"
                    : "bg-white border-ui-border-base"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ui-border-base bg-white shadow-sm hover:bg-ui-bg-subtle transition-colors"
            aria-label="Imagen siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 text-unilen-black"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}

      <Container className="relative aspect-square w-full overflow-hidden bg-white">
        {!!currentImage.url && (
          <Image
            src={currentImage.url}
            priority={true}
            className="absolute inset-0 rounded-rounded"
            alt={`Imagen del producto ${currentIndex + 1}`}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 400px"
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </Container>
    </div>
  )
}

export default ImageGallery