"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        {/* Left nav links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#projeler"
            className="text-sm tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
          >
            Projeler
          </Link>
          <Link
            href="#hakkimizda"
            className="text-sm tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
          >
            Hakkimizda
          </Link>
        </div>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] text-foreground">
            VORDE
          </h1>
        </Link>

        {/* Right nav links */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <Link
            href="#iletisim"
            className="text-sm tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
          >
            {"İletişim"}
          </Link>
          <Link
            href="#blog"
            className="text-sm tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-foreground z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden z-40">
          <Link
            href="#projeler"
            className="text-lg tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Projeler
          </Link>
          <Link
            href="#hakkimizda"
            className="text-lg tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Hakkimizda
          </Link>
          <Link
            href="#iletisim"
            className="text-lg tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {"İletişim"}
          </Link>
          <Link
            href="#blog"
            className="text-lg tracking-[0.25em] uppercase text-foreground/90 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  )
}
