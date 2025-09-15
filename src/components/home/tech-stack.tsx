import { Badge } from "@/components/ui/badge";

type TechItem = {
  name: string;
  icon: string;
};

const techStack: TechItem[] = [
  { name: "HTML", icon: "🐳" },
  { name: "CSS", icon: "☁️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Cairo", icon: "🟢" },
  { name: "Git", icon: "📝" },
];

export function TechStack() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech) => (
            <Badge
              key={tech.name}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-card hover:bg-primary/10 transition-colors"
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
