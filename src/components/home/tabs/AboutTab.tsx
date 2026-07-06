"use client";

import { Code, Smartphone, Zap, ShoppingCart, type LucideIcon } from "lucide-react";

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
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: Code,
    title: "Smart Contracts",
    description:
      "Secure contract development in Solidity and Cairo for Ethereum and Starknet.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
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
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
];

export function AboutTab() {
  return (
    <div>
      <SectionHeading title="About Me" />

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        <p>
          I&apos;m a frontend software developer with a strong passion for
          building seamless and responsive web applications. My expertise lies
          in creating modern, user-friendly interfaces using React, Next.js and
          Tailwind CSS.
        </p>
        <p>
          I also work with smart contracts in Solidity and Cairo, integrating
          blockchain functionality directly into applications. I specialize in
          connecting decentralized logic with intuitive interfaces.
        </p>
        <p>
          I&apos;ve collaborated with global teams across the Starknet ecosystem
          to ship real-world, production-grade solutions.
        </p>
      </div>

      {/* What I'm Doing */}
      <h3 className="mt-10 text-lg font-semibold text-foreground">
        What I&apos;m Doing
      </h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, description, iconColor, iconBg }) => (
          <div
            key={title}
            className="group flex gap-4 rounded-xl border border-border bg-background/40 p-5 transition-colors hover:border-primary/30"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconColor} transition-transform group-hover:scale-105`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="relative inline-block">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      <span className="mt-2 block h-1 w-12 rounded-full bg-gradient-to-r from-primary to-purple-500" />
    </div>
  );
}
