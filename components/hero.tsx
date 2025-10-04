"use client"

import { Button } from "@/components/ui/button"
import { CSS3DBackground } from "@/components/css-3d-background"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <CSS3DBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-medium">Info Product Growth Agency</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
            Scale Your Info Products <span className="text-sep-gradient">Effortlessly</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            From client onboarding to course management and advertising, we handle everything so you can focus on 
            creating exceptional content. Your growth is our mission.
          </p>

          <div className="mb-12 p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">£2k</div>
                <div className="text-sm text-muted-foreground">Startup Fee</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Commission on Sales</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Dedicated Support</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-sep-gradient text-accent-foreground hover:opacity-90 text-lg px-8 py-6">
              Start Growing Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-transparent text-foreground hover:bg-accent/10"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
