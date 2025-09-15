import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  stats?: {
    stars: number;
    forks: number;
  };
}

const projects: Project[] = [
  {
    title: "VR School Platform",
    description: "Immersive educational platform with Next.js & Three.js",
    image: "/vr-school-preview.jpg",
    tags: ["react", "JS", "Tailwind"],
    liveUrl: "https://vr-sch-oictgg.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 45, forks: 12 },
  },
  {
    title: "PMovies - Movie Discovery",
    description: "Discover and explore movies with search and filtering",
    image: "/pmovies-preview.jpg",
    tags: ["Next.js", "TMDB API", "Tailwind"],
    liveUrl: "https://pmovies-two.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 68, forks: 15 },
  },
  {
    title: "Virtual Aid",
    description: "AI-powered health assistant for medical information",
    image: "/virtual-aid-preview.jpg",
    tags: ["Next.js", "AI", "Health"],
    liveUrl: "https://virtual-aid.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 92, forks: 24 },
  },
  {
    title: "Megastore",
    description: "E-commerce platform with catalog and checkout",
    image: "/megastore-preview.jpg",
    tags: ["Next.js", "E-commerce", "Payments"],
    liveUrl: "https://megastore-snowy.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 87, forks: 31 },
  },
  {
    title: "SaveCircle",
    description: "Personal finance and savings management",
    image: "/savecircle-preview.jpg",
    tags: ["React", "Finance", "Dashboard"],
    liveUrl: "https://savecircle.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 64, forks: 18 },
  },
  {
    title: "Web3 E-commerce",
    description: "Decentralized store with crypto payments",
    image: "/web3-ecommerce-preview.jpg",
    tags: ["Web3", "Ethereum", "Next"],
    liveUrl: "https://web3-ecommerce-roan.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 52, forks: 12 },
  },
];

export function PortfolioSection() {
  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/5 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              Recent Work
            </span>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/30 hover:border-primary/20 bg-card/50 backdrop-blur-sm ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10" />
                {project.liveUrl !== "#" ? (
                  <div className="w-full h-32 overflow-hidden relative rounded-t-lg">
                    <iframe
                      src={project.liveUrl}
                      className="w-full h-full border-0 scale-[1.01] origin-top"
                      loading="lazy"
                      title={`${project.title} Preview`}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      referrerPolicy="no-referrer"
                      scrolling="no"
                      style={{ overflow: "hidden" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="w-full h-32 overflow-hidden relative rounded-t-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                    {project.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">Project</p>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <div 
                        key={i}
                        className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-medium text-muted-foreground"
                        style={{ zIndex: 3 - i }}
                      >
                        {tag.charAt(0)}
                      </div>
                    ))}
                    {project.tags.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-muted/80 border-2 border-background flex items-center justify-center text-[10px] font-medium text-muted-foreground">
                        +{project.tags.length - 3}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs h-8 px-3 rounded-full border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="default"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium px-6 py-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-primary/20 text-sm"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
