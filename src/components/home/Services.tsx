import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Palette, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive web applications with clean design and scalable architecture.",
    features: [
      "React & Next.js",
      "Tailwind CSS",
      "API & Database integration"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Code,
    title: "Web3 Development",
    description: "Creating decentralized applications and integrating smart contracts seamlessly with frontend apps.",
    features: [
      "Solidity & Cairo",
      "StarkNet & Ethereum",
      "Smart contract integration with frontend",
      "DeFi applications"
    ],
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and visually engaging interfaces for seamless user experiences.",
    features: [
      "Wireframing & Prototyping",
      "User-centered design",
      "Responsive layouts",
      "Design systems"
    ],
    gradient: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Zap,
    title: "E-Commerce Solutions",
    description: "Developing scalable online stores with smooth product flows and optimized performance.",
    features: [
      "Product & cart systems",
      "Supabase integration",
      "Redux state management",
      "Secure payment workflows"
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconColor: "text-orange-400",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              What I Offer
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Things I do for you that simplify making your business grow and stand out from the competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group glass-effect card-hover-effect border-border/50 hover:border-primary/30 relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 animate-pulse-glow`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor} transition-colors duration-300`} />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-pulse-glow" />
                      <span className="font-medium">{feature}</span>
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
