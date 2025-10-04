import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <CTA />
    </main>
  )
}
