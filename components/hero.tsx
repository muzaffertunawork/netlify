"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-12 lg:px-16 md:pb-14">
        <div className="flex flex-col items-start gap-3">
          <p className="font-serif text-lg md:text-xl tracking-wide text-foreground/90">
            Vurgu - Oran - Ritim - Denge
          </p>
          <p className="text-sm md:text-base text-foreground/70 tracking-wide max-w-lg font-sans italic">
            Vorde is an architecture and interior design studio based in Bornova, Izmir
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-14">
          <button
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }}
            className="text-foreground/70 hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  )
}
