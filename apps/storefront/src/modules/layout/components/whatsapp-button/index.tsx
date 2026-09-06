"use client"

const WhatsAppButton = () => {
  const phoneNumber = "50487954789"
  const message = "Hola, tengo una consulta sobre sus productos."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-unilen-red shadow-lg hover:scale-105 transition-transform"
      aria-label="Chatear por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38c1.44.78 3.06 1.2 4.75 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C22 6.45 17.55 2 12.04 2zm0 18.14h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.13.82.84-3.05-.19-.31a8.14 8.14 0 01-1.25-4.36c0-4.51 3.67-8.18 8.19-8.18 4.51 0 8.18 3.67 8.18 8.18-.01 4.51-3.68 8.23-8.13 8.23zm4.48-6.13c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31s-.85.83-.85 2.02.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
