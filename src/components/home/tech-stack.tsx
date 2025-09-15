"use client";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRust,
  SiGit,
  SiGithub,
} from "react-icons/si";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for smoother sequential appearance
      delayChildren: 0.3, // Initial delay before first item appears
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Start slightly below
    scale: 0.9, // Start slightly smaller
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5, // Smooth fade duration
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -5, // Slight lift on hover
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Cairo", icon: <SiRust className="text-green-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
];

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I'm passionate about staying current with the latest technologies
            and frameworks. With experience in frontend and web development, I
            specialize in creating dynamic, responsive, and accessible
            applications. Here are the technologies I work with:
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover="hover"
              className="w-32 h-32"
            >
              <Badge
                variant="secondary"
                className="px-10 py-10 text-base font-medium bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 w-full h-full flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <span className="text-4xl transition-transform duration-200">
                    {tech.icon}
                  </span>
                  <span className="font-semibold text-lg">{tech.name}</span>
                </div>
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
