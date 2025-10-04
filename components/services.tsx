"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Megaphone, Layout, Zap, Target } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Client Onboarding",
      description:
        "Seamless onboarding systems that convert prospects into loyal customers with automated workflows and personalized touchpoints. Reliable systems that work 24/7 to welcome your new clients.",
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description:
        "Complete course platform setup, content organization, and student engagement systems that scale with your business. We handle the tech so you can focus on teaching.",
    },
    {
      icon: Megaphone,
      title: "Advert Management",
      description:
        "Data-driven advertising campaigns across all platforms, optimized for maximum ROI and customer acquisition. We scale your reach while you scale your impact.",
    },
    {
      icon: Layout,
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture attention and drive action with proven psychological principles. Fast, beautiful, and optimized for conversions.",
    },
    {
      icon: Zap,
      title: "Automation Systems",
      description:
        "End-to-end automation that handles repetitive tasks, email sequences, and customer journeys—freeing you to focus on creating exceptional content and growing your brand.",
    },
    {
      icon: Target,
      title: "Growth Strategy",
      description:
        "Strategic planning and growth roadmaps tailored to your info product business. We identify opportunities, optimize funnels, and help you scale sustainably.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Everything You Need to <span className="text-sep-gradient">Scale Your Info Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We provide comprehensive, reliable solutions for info product creators who want to grow without the 
            operational headaches. Focus on your content while we handle the growth infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
