import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "VR School Platform",
    description:
      "An immersive educational platform built with Next.js and Three.js for virtual learning experiences",
    image: "/vr-school-preview.jpg",
    tags: ["Next.js", "Three.js", "Tailwind CSS"],
    liveUrl: "https://vr-sch-oictgg.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 45, forks: 12 },
  },
  {
    title: "PMovies - Movie Discovery App",
    description:
      "A modern movie discovery platform with search, filtering, and movie details",
    image: "/pmovies-preview.jpg",
    tags: ["Next.js", "TMDB API", "Tailwind CSS"],
    liveUrl: "https://pmovies-two.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 68, forks: 15 },
  },
  {
    title: "Virtual Aid - Health Assistant",
    description:
      "An AI-powered health assistant providing medical information and support",
    image: "/virtual-aid-preview.jpg",
    tags: ["Next.js", "AI Integration", "Health Tech"],
    liveUrl: "https://virtual-aid.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 92, forks: 24 },
  },
  {
    title: "Megastore - E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart, and checkout",
    image: "/megastore-preview.jpg",
    tags: ["Next.js", "E-commerce", "Payment Integration"],
    liveUrl: "https://megastore-snowy.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 87, forks: 31 },
  },
  {
    title: "SaveCircle - Financial Planning",
    description: "A modern platform for personal finance management and savings goals",
    image: "/savecircle-preview.jpg",
    tags: ["React", "Financial Tech", "Dashboard"],
    liveUrl: "https://savecircle.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 64, forks: 18 },
  },
  {
    title: "Web3 E-commerce Platform",
    description: "A decentralized e-commerce platform with cryptocurrency payments",
    image: "/web3-ecommerce-preview.jpg",
    tags: ["Web3", "Ethereum", "Next.js"],
    liveUrl: "https://web3-ecommerce-roan.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 52, forks: 12 },
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/5 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-white bg-primary px-4 py-2 rounded-full border border-primary/20">
              Recent Work
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group glass-effect card-hover-effect border-border/50 hover:border-primary/30 overflow-hidden relative ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
             

              <div className="relative overflow-hidden">
                {project.liveUrl !== "#" ? (
                  <div className="w-full h-48 overflow-hidden relative">
                    <iframe
                      src={project.liveUrl}
                      className="w-full h-full border-0 overflow-hidden"
                      loading="lazy"
                      title={`${project.title} Preview`}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      referrerPolicy="no-referrer"
                      scrolling="no"
                      style={{ overflow: "hidden" }}
                    />
                    <div className="absolute inset-0 pointer-events-none" />
                  </div>
                ) : (
                  <img
                    src={
                      project.image ||
                      "/placeholder.svg?height=300&width=400&query=modern dashboard interface"
                    }
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-slide-up"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      vist link
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-card/90 hover:bg-card shadow-lg animate-slide-up"
                    style={{ animationDelay: "0.1s" }}
                    asChild
                  >
                  
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 text-balance">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Github className="w-3 h-3" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      style={{ animationDelay: `${tagIndex * 0.05}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
