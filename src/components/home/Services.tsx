import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Zap, ShoppingCart } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Frontend Dev",
    description: "Modern React & Next.js",
    features: [
      "Responsive design",
      "Performance optimized",
      "Tailwind CSS"
    ],
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Code,
    title: "Smart Contracts",
    description: "Secure Solidity & Cairo development",
    features: [
      "Ethereum & Starknet",
      "Gas optimization",
      "Security audits"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
  },

  {
    icon: Zap,
    title: "Web3 Integration",
    description: "Seamless blockchain connectivity",
    features: [
      "Wallet connections",
      "Smart contract interaction",
      "Transaction handling"
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online store solutions",
    features: [
      "Product management",
      "Cart & checkout",
      "Payment integration"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              What I Offer
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Expert solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-0">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/30 max-w-sm mx-auto w-full`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <CardHeader className="relative z-10 p-4 pb-2 text-center">
                <div
                  className={`w-10 h-10 ${service.iconBg} rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105 mx-auto`}
                >
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 p-4 pt-0">
                <ul className="space-y-1.5">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 bg-primary/80 rounded-full mr-2 group-hover:animate-pulse flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
