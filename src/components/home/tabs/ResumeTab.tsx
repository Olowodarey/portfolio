"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Download,
  GraduationCap,
  Workflow,
} from "lucide-react";
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

type Skill = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
};
type SkillGroup = { category: string; skills: Skill[] };

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

type EducationItem = {
  qualification: string;
  school: string;
  period: string;
};

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
      {
        name: "Microsoft Power Platform",
        icon: Workflow,
        color: "text-blue-400",
      },
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

const experience: ExperienceItem[] = [
  {
    role: "Open-Source Contributor & Freelance Frontend Developer",
    company: "Freelance / Open Source",
    location: "Remote",
    period: "2024 — Present",
    bullets: [
      "Shipped responsive UI components across 3+ open-source and freelance web projects, improving cross-device usability for real-world user bases.",
      "Developed smart contracts and Web3 integrations across Stellar (Soroban), Starknet (Cairo), and EVM chains as part of open-source ecosystem contributions.",
      "Collaborated with distributed teams via Git & GitHub — managing branches, pull requests, and code reviews to maintain code quality.",
      "Integrated REST API endpoints into frontend interfaces, enabling dynamic data rendering and improved interactivity.",
      "Diagnosed and resolved 10+ bugs across active repositories using structured debugging, cutting reported UI defects by an estimated 30%.",
    ],
  },
  {
    role: "Service Teacher (NYSC)",
    company: "Best Solution International",
    location: "Abuja, Nigeria",
    period: "Jun 2022 — Jun 2023",
    bullets: [
      "Delivered technical science curriculum to 30+ students, sharpening the ability to communicate complex concepts clearly — directly applicable to stand-ups, code reviews, and client interactions.",
      "Designed structured lesson plans and performance records, reinforcing organisational skills now applied to project planning and task management.",
    ],
  },
  {
    role: "Production Assistant",
    company: "Tower Galvanised Products",
    location: "Kaduna, Nigeria",
    period: "Mar 2019 — Dec 2019",
    bullets: [
      "Maintained detailed daily production records with zero data-entry errors over an 8-month tenure, cultivating precision now applied to code and technical documentation.",
      "Identified and escalated 15+ recurring production anomalies using root-cause analysis — a methodology directly transferable to debugging.",
    ],
  },
];

const education: EducationItem[] = [
  {
    qualification: "Higher National Diploma (HND) — Mechanical Engineering",
    school: "Federal Polytechnic Bida",
    period: "2018 — 2021",
  },
  {
    qualification: "National Diploma (ND) — Mechanical Engineering",
    school: "Federal Polytechnic Bida",
    period: "2015 — 2017",
  },
];

export function ResumeTab() {
  return (
    <div>
      <SectionHeading title="Resume" />

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        Frontend and Web3 developer building secure, production-grade web
        applications and on-chain products across Celo, Base, Stellar and
        Starknet — including a live blockchain payment protocol and a Solana
        Telegram bot studio with real users. I care about clean architecture,
        low-friction user experiences, and building things people actually
        want to use.
      </motion.p>

      <motion.a
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        href="/Darey_Olowo_CV.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
      >
        <Download className="h-4 w-4" />
        Download CV
      </motion.a>

      {/* Experience */}
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInDown}
        className="font-heading mt-12 flex items-center gap-3 text-lg font-semibold text-foreground"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Briefcase className="h-5 w-5" />
        </span>
        Experience
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-5 space-y-4 border-l border-border pl-6"
      >
        {experience.map((job) => (
          <motion.div
            key={`${job.company}-${job.period}`}
            variants={staggerItem}
            className="relative rounded-xl border border-border bg-foreground/5 p-5 transition-colors hover:border-primary/30"
          >
            <span className="absolute -left-[1.9rem] top-6 h-3 w-3 rounded-full border-2 border-background bg-primary" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h4 className="font-heading font-semibold text-foreground">
                  {job.role}
                </h4>
                <p className="text-sm text-primary">
                  {job.company}
                  <span className="text-muted-foreground">
                    {" "}
                    — {job.location}
                  </span>
                </p>
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {job.period}
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInDown}
        className="font-heading mt-12 flex items-center gap-3 text-lg font-semibold text-foreground"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <GraduationCap className="h-5 w-5" />
        </span>
        Education
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-5 grid gap-4 sm:grid-cols-2"
      >
        {education.map((item) => (
          <motion.div
            key={item.qualification}
            variants={staggerItem}
            className="rounded-xl border border-border bg-foreground/5 p-5 transition-colors hover:border-primary/30"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {item.period}
            </p>
            <h4 className="font-heading mt-2 font-semibold text-foreground">
              {item.qualification}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills */}
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInDown}
        className="font-heading mt-12 text-lg font-semibold text-foreground"
      >
        Skills & Technologies
      </motion.h3>

      <div className="mt-6 space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <motion.h4
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInDown}
              className="font-heading mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              {group.category}
              <span className="h-px flex-1 bg-border" />
            </motion.h4>
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
