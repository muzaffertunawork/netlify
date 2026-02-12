import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Placeholder sections for scroll targets */}
      <section
        id="projeler"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16"
      >
        <h2 className="font-serif text-4xl md:text-6xl tracking-wide text-foreground text-balance text-center">
          Projeler
        </h2>
        <p className="mt-6 text-muted-foreground text-center max-w-xl tracking-wide leading-relaxed">
          {"Vorde'nin mimarlık ve iç mimarlık alanındaki seçkin projeleri."}
        </p>
      </section>

      <section
        id="hakkimizda"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 bg-card"
      >
        <h2 className="font-serif text-4xl md:text-6xl tracking-wide text-card-foreground text-balance text-center">
          {"Hakkımızda"}
        </h2>
        <p className="mt-6 text-muted-foreground text-center max-w-xl tracking-wide leading-relaxed">
          Vurgu, oran, ritim ve denge ilkelerimizle tasarlıyoruz.
        </p>
      </section>

      <section
        id="iletisim"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16"
      >
        <h2 className="font-serif text-4xl md:text-6xl tracking-wide text-foreground text-balance text-center">
          {"İletişim"}
        </h2>
        <p className="mt-6 text-muted-foreground text-center max-w-xl tracking-wide leading-relaxed">
          Bornova, İzmir
        </p>
      </section>

      <section
        id="blog"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 bg-card"
      >
        <h2 className="font-serif text-4xl md:text-6xl tracking-wide text-card-foreground text-balance text-center">
          Blog
        </h2>
        <p className="mt-6 text-muted-foreground text-center max-w-xl tracking-wide leading-relaxed">
          Mimarlık ve tasarım üzerine yazılar.
        </p>
      </section>
    </main>
  )
}
