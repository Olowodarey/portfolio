"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./AboutTab";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "VR School Platform",
    description: "Immersive educational platform.",
    tags: ["React", "JS", "Tailwind"],
    liveUrl: "https://vr-sch-oictgg.vercel.app/",
  },
  {
    title: "PMovies",
    description: "Discover and explore movies with search and filtering.",
    tags: ["Next.js", "TMDB API", "Tailwind"],
    liveUrl: "https://pmovies-two.vercel.app/",
  },
  {
    title: "Virtual Aid",
    description: "AI-powered health assistant for medical information.",
    tags: ["Next.js", "AI", "Health"],
    liveUrl: "https://virtual-aid.vercel.app/",
  },
  {
    title: "Megastore",
    description: "E-commerce platform with catalog and checkout.",
    tags: ["Next.js", "E-commerce", "Payments"],
    liveUrl: "https://megastore-snowy.vercel.app/",
  },
  {
    title: "SaveCircle",
    description: "Decentralized personal finance and savings management.",
    tags: ["React", "Finance", "Web3"],
    liveUrl: "https://savecircle.vercel.app/",
  },
  {
    title: "Web3 E-commerce",
    description: "Decentralized store with crypto payments.",
    tags: ["Web3", "Ethereum", "Next.js"],
    liveUrl: "https://web3-ecommerce-roan.vercel.app/",
  },
];

export function PortfolioTab() {
  return (
    <div>
      <SectionHeading title="Portfolio" />

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
        A selection of recent projects. Each card previews the live site — click
        to open it in a new tab.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background/40 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Live preview */}
            <div className="relative h-40 w-full overflow-hidden border-b border-border bg-muted/20">
              <iframe
                src={project.liveUrl}
                className="pointer-events-none h-[200%] w-[200%] origin-top-left scale-50 border-0"
                loading="lazy"
                title={`${project.title} preview`}
                sandbox="allow-same-origin allow-scripts"
                referrerPolicy="no-referrer"
                tabIndex={-1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 text-primary opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <ExternalLink className="h-4 w-4" />
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-500 text-sm font-semibold text-white">
                  {project.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-snug text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/30 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
