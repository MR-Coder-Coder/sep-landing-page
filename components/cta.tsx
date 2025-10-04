"use client"
import { Mail, MapPin, Instagram } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">
            Ready to Transform Your <span className="text-sep-gradient">Info Product Business</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how South East Partners can help scale your info product business. 
            Get in touch today and start your growth journey.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-sep-gradient rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
              <a 
                href="mailto:southeastpartners.ltd@gmail.com" 
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                southeastpartners.ltd@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-sep-gradient rounded-lg flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
              <a 
                href="https://instagram.com/southeastpartners" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                @southeastpartners
              </a>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-sep-gradient rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Our Locations</h3>
              <p className="text-muted-foreground text-sm">UK & US Virgin Islands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
