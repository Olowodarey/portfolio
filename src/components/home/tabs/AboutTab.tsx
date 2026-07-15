"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  Sparkles,
  Zap,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import {
  fadeInDown,
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBg: string;
};

const services: Service[] = [
  {
    icon: Smartphone,
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces built with React, Next.js and Tailwind CSS.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "REST APIs, custom authentication and databases with Node.js, NestJS, Prisma and PostgreSQL.",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: Code,
    title: "Smart Contracts",
    description:
      "Secure contract development in Solidity and Cairo for Ethereum and Starknet.",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Web3 Integration",
    description:
      "Wallet connections, contract interactions and reliable transaction handling.",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Full online stores with product management, cart, checkout and payments.",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/10",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "AI-powered product features — from on-chain wallet analytics to assistants built on LLM APIs.",
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10",
  },
];

const stats = [
  { value: "8+", label: "Live projects shipped" },
  { value: "6", label: "Blockchains built on" },
  { value: "2+", label: "Years shipping to production" },
];

export function AboutTab() {
  return (
    <div>
      <SectionHeading title="About Me" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        <motion.p variants={fadeInUp}>
          I&apos;m a frontend developer and Web3 engineer who ships. My recent
          work includes a live blockchain payment protocol on Celo that lets
          anyone receive crypto with just a Gmail login, a zero-knowledge
          credit platform on Stellar that scores gig workers without exposing
          their data, and a production music-platform dashboard with its own
          custom auth system.
        </motion.p>
        <motion.p variants={fadeInUp}>
          My home base is the frontend — React, Next.js and TypeScript — and I
          write smart contracts in Solidity, Cairo and Soroban for Ethereum,
          Starknet and Stellar, including privacy-preserving apps powered by
          zero-knowledge proofs. I also bring hands-on backend experience with
          Node.js, NestJS, Prisma and PostgreSQL when a project needs the full
          stack.
        </motion.p>
        <motion.p variants={fadeInUp}>
          I also build enterprise solutions with the Microsoft Power Platform,
          helping teams automate workflows and ship internal tools faster.
          Whether it&apos;s a Web3 protocol or an internal business tool, I hold
          the same bar: clean architecture, fast interfaces, and features real
          users actually rely on.
        </motion.p>
      </motion.div>

      {/* Quick stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-8 grid grid-cols-3 gap-3"
      >
        {stats.map(({ value, label }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            className="rounded-xl border border-border bg-foreground/5 p-4 text-center transition-colors hover:border-primary/30"
          >
            <p className="font-heading bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              {value}
            </p>
            <p className="mt-1 text-[11px] leading-snug text-muted-foreground md:text-xs">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* What I'm Doing */}
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInDown}
        className="font-heading mt-10 text-lg font-semibold text-foreground"
      >
        What I&apos;m Doing
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-5 grid gap-4 sm:grid-cols-2"
      >
        {services.map(
          ({ icon: Icon, title, description, iconColor, iconBg }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="group flex gap-4 rounded-xl border border-border bg-foreground/5 p-5 transition-colors hover:border-primary/30"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconColor} transition-transform group-hover:scale-105`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">
                  {title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            </motion.div>
          ),
        )}
      </motion.div>
    </div>
  );
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="relative inline-block">
      <motion.h2
        key={title}
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 18 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="font-heading text-2xl font-bold text-foreground md:text-3xl"
      >
        {title}
      </motion.h2>
      <motion.span
        key={`${title}-underline`}
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="mt-2 block h-1 rounded-full bg-gradient-to-r from-primary to-blue-400"
      />
    </div>
  );
}
