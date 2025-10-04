"use client"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sep-gradient rounded-full flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-white rounded-sm"></div>
                <div className="w-1 h-4 bg-white rounded-sm"></div>
                <div className="w-1 h-5 bg-white rounded-sm"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">SEP</span>
              <span className="text-sm text-muted-foreground -mt-1">South East Partners</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
