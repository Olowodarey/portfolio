"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { SectionHeading } from "./AboutTab";
import {
  fadeInDown,
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSolidity,
  SiEthereum,
  SiRust,
  SiStellar,
  SiSolana,
  SiNodedotjs,
  SiNestjs,
  SiGit,
  SiGithub,
} from "react-icons/si";

type Skill = { name: string; icon: ComponentType<{ className?: string }>; color: string };
type SkillGroup = { category: string; skills: Skill[] };

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "NestJS", icon: SiNestjs, color: "text-rose-500" },
    ],
  },
  {
    category: "Blockchain & Web3",
    skills: [
      { name: "Solidity", icon: SiSolidity, color: "text-slate-300" },
      { name: "Cairo", icon: SiRust, color: "text-orange-400" },
      { name: "Ethereum", icon: SiEthereum, color: "text-indigo-400" },
      { name: "Stellar", icon: SiStellar, color: "text-purple-300" },
      { name: "Solana", icon: SiSolana, color: "text-fuchsia-400" },
    ],
  },
  {
    category: "Enterprise & Automation",
    skills: [
      { name: "Microsoft Power Platform", icon: Workflow, color: "text-blue-400" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-red-500" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
    ],
  },
];

export function ResumeTab() {
  return (
    <div>
      <SectionHeading title="Skills & Technologies" />

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        I focus on building dynamic, responsive and accessible applications, and
        I enjoy staying current with the tools shaping modern web and web3
        development. Here&apos;s the stack I work with day to day.
      </motion.p>

      <div className="mt-8 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInDown}
              className="font-heading mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              {group.category}
              <span className="h-px flex-1 bg-border" />
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {group.skills.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  variants={staggerItem}
                  className="group flex items-center gap-2.5 rounded-xl border border-border bg-foreground/5 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <Icon
                    className={`h-5 w-5 ${color} transition-transform group-hover:scale-110`}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
