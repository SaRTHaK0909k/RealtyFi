"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, TrendingUp, MessageSquare, CheckCircle2 } from "lucide-react"

export default function FutureWork() {
  const futureFeatures = [
    {
      icon: ShieldCheck,
      title: "KYC Integration",
      description: "Comprehensive Know Your Customer verification system to ensure legal compliance and secure transactions for all users.",
      status: "Planned",
      benefits: [
        "Enhanced security and fraud prevention",
        "Legal compliance across jurisdictions",
        "Verified user identity management",
        "Automated document verification"
      ]
    },
    {
      icon: TrendingUp,
      title: "AI-Based Value Prediction",
      description: "Advanced machine learning algorithms to predict property values and market trends with high accuracy.",
      status: "In Development",
      benefits: [
        "Real-time property valuation",
        "Market trend forecasting",
        "Investment risk assessment",
        "Personalized investment recommendations"
      ]
    },
    {
      icon: MessageSquare,
      title: "Chatbase AI Assistant",
      description: "Intelligent chatbot powered by AI to provide instant support, answer queries, and guide users through the platform.",
      status: "Planned",
      benefits: [
        "24/7 customer support",
        "Instant property information",
        "Investment guidance",
        "Multilingual support"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">Coming Soon</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Future Enhancements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're constantly innovating to bring you the best real estate investment experience with cutting-edge technology and enhanced security features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {futureFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant={feature.status === "In Development" ? "default" : "secondary"}>
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Benefits:</h4>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Stay tuned for these exciting features that will make RealtyFi the most secure and intelligent real estate investment platform.
          </p>
        </div>
      </div>
    </section>
  )
}
