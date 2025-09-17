import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    description: "Immersive educational platform",
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
    description: " Decentralized Personal finance and savings management",
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
              Sample Works
            </span>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/30 hover:border-primary/20 bg-card/50 backdrop-blur-sm ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10" />
                  {project.liveUrl !== "#" ? (
                    <div className="w-full h-24 sm:h-28 overflow-hidden relative">
                      <iframe
                        src={project.liveUrl}
                        className="w-full h-full border-0"
                        loading="lazy"
                        title={`${project.title} Preview`}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        referrerPolicy="no-referrer"
                        scrolling="no"
                        style={{ overflow: "hidden" }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-24 sm:h-28 relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <CardContent className="p-3 sm:p-4 sm:pt-3">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs sm:text-sm font-medium">
                        {project.title.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          Project
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/80 mb-3 line-clamp-2 leading-snug">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1.5 sm:-space-x-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-muted border sm:border-2 border-background flex items-center justify-center text-[9px] sm:text-[10px] font-medium text-muted-foreground"
                            style={{ zIndex: 3 - i }}
                          >
                            {tag.charAt(0)}
                          </div>
                        ))}
                        {project.tags.length > 3 && (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-muted/80 border sm:border-2 border-background flex items-center justify-center text-[9px] sm:text-[10px] font-medium text-muted-foreground">
                            +{project.tags.length - 3}
                          </div>
                        )}
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[10px] sm:text-xs h-7 sm:h-8 px-2 sm:px-3 rounded-full border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-colors pointer-events-none"
                        asChild
                      >
                        <span>View Project</span>
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </Link>
          ))}
        </div>

        {/* <div className="text-center mt-10">
          <Button
            size="default"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium px-6 py-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-primary/20 text-sm"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
}
