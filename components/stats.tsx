"use client"

export function Stats() {
  const stats = [
    { value: "500+", label: "Clients Onboarded", company: "Monthly" },
    { value: "98%", label: "Satisfaction Rate", company: "Client Feedback" },
    { value: "10M+", label: "Revenue Generated", company: "For Our Clients" },
    { value: "24/7", label: "Support Available", company: "Always Reliable" },
  ]

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-lg font-medium mb-1 text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
