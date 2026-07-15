"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./AboutTab";
import {
  alternateSlide,
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

type Category = "web3" | "webapp" | "ecommerce";

interface Project {
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  detail: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  /** Static screenshot in /public. Falls back to a gradient tile if omitted. */
  image?: string;
}

const categories: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web3", label: "Web3" },
  { id: "webapp", label: "Web App" },
  { id: "ecommerce", label: "E-commerce" },
];

const projects: Project[] = [



  {
    title: "PMovies",
    category: "webapp",
    categoryLabel: "Web App",
    description: "Discover, search and stream movies and TV shows.",
    detail:
      "A movie and TV discovery hub powered by the TMDB API. Browse trending, popular and top-rated titles, filter by genre, search across the full catalog, and open full details — cast, ratings, trailers and similar recommendations — for every title. Built with the Next.js App Router for fast, cached pages and a responsive UI that works from phone to desktop.",
    tags: ["Next.js", "TMDB API", "Tailwind", "TypeScript"],
    liveUrl: "https://pmovies-hub.vercel.app/",
    sourceUrl: "https://github.com/Olowodarey/pmovies",
    image: "/projects/pmovies.png",
  },

    {
    title: "Beathub",
    category: "webapp",
    categoryLabel: "Web App",
    description: "Admin dashboard for a modern music platform.",
    detail:
      "A full-stack, production-deployed workspace for running the business side of a music catalogue. Admins moderate uploaded tracks, labels manage their signed artists, creators apply for upgraded roles and promote releases through a self-serve ad marketplace, and everyone collaborates on playlists — behind a fast, keyboard-friendly (⌘K) pure-dark interface. Built as a pnpm monorepo with a Next.js 16 front end and a NestJS + Prisma API, featuring a fully custom auth system (email/password and Google OAuth) issuing its own JWT sessions.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
    liveUrl: "https://beathub-six.vercel.app",
    sourceUrl: "https://github.com/Olowodarey/Beathub",
    image: "/projects/beathub.png",
  },

  {
    title: "Megastore",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    description: "E-commerce platform with catalog and checkout.",
    detail:
      "A full online store with product catalog, cart and checkout flow, built to handle real-world retail purchase journeys end to end.",
    tags: ["Next.js", "E-commerce", "Payments"],
    liveUrl: "https://megastore-snowy.vercel.app/",
    sourceUrl: "https://github.com/Olowodarey/megastore",
    image: "/projects/megastore.png",
  },
  {
    title: "SaveCircle",
    category: "web3",
    categoryLabel: "Web3",
    description: "Decentralized personal finance and savings management.",
    detail:
      "A decentralized savings and personal-finance dashboard that lets users track and manage group or individual savings circles on-chain.",
    tags: ["React", "Finance", "Web3"],
    liveUrl: "https://savecircle.vercel.app/",
    image: "/projects/savecircle.png",
  },

    {
    title: "DegenHub — Solana Wallet Tracker",
    category: "web3",
    categoryLabel: "Web3",
    description: "Real-time Solana wallet tracker with AI-powered insights.",
    detail:
      "DegenHub is a Solana wallet-tracking dashboard for traders and degens. Paste any wallet address to watch swaps, transfers and token activity in real time, get AI-assisted summaries of what a wallet is actually doing on-chain, and follow multiple wallets side-by-side — no more tab-switching between block explorers. Built for people who copy-trade smart-money wallets and need signal, not raw transaction noise.",
    tags: ["Solana", "AI", "Next.js", "TypeScript"],
    liveUrl: "https://degenhub.vercel.app/",
    sourceUrl: "https://github.com/DegenbotTr/Solanawallettracker-",
    image: "/projects/degenhub.png",
  },

  {
    title: "Zava",
    category: "web3",
    categoryLabel: "Web3",
    description: "Zero-knowledge credit platform for gig workers.",
    detail:
      "A privacy-first credit platform for freelancers and gig workers. Borrowers get a private USDC wallet on Stellar with automated savings tracking, and zero-knowledge proofs (UltraHonk on Stellar Protocol 26) generate a cryptographic credit score — proving financial discipline without exposing raw transaction data or requiring traditional KYC.",
    tags: ["Stellar", "Zero-Knowledge", "Fintech"],
    liveUrl: "https://zava-eta.vercel.app/",
    sourceUrl: "https://github.com/Zavapa/Zava",
    image: "/projects/zava.png",
  },
  {
    title: "FarmLink",
    category: "webapp",
    categoryLabel: "Web App",
    description: "Sales console for agricultural field representatives.",
    detail:
      "A field sales console for agricultural sales teams: Gmail-based sign-in, GPS-enabled mobile capture, offline data collection for areas with poor connectivity, and manager-facing reporting and analytics.",
    tags: ["Next.js", "GPS", "Offline-first"],
    liveUrl: "https://farmlink-virid.vercel.app/",
    sourceUrl: "https://github.com/Olowodarey/Farmlink",
    image: "/projects/farmlink.png",
  },
  {
    title: "Gigipay",
    category: "web3",
    categoryLabel: "Web3",
    description: "Send crypto to anyone using just a Gmail login.",
    detail:
      "A blockchain payments app that removes the wallet-setup barrier: senders share a claim-code voucher, recipients redeem it with a Gmail login into an auto-generated embedded wallet. Supports batch payments, airtime top-ups for Nigerian carriers, and multiple assets (CELO, cUSD, USDC, ETH) settled on Celo and Base.",
    tags: ["Celo", "Base", "Payments"],
    liveUrl: "https://gigipay-app.vercel.app/",
    image: "/projects/gigipay.png",
  },
   
];

export function PortfolioTab() {
  const [activeCategory, setActiveCategory] = useState<"all" | Category>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div>
      <SectionHeading title="Portfolio" />

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        A selection of recent projects. Hover a card and click the eye icon to
        see details before opening the live site.
      </motion.p>

      {/* Category filters */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const count =
            cat.id === "all"
              ? projects.length
              : projects.filter((p) => p.category === cat.id).length;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? "border-primary/50 text-primary shadow-sm shadow-primary/10"
                  : "border-border bg-foreground/5 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-category"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.label}
                <span
                  className={`rounded-full px-1.5 text-[10px] tabular-nums leading-4 ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "bg-foreground/10 text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        {filtered.map((project, index) => (
          <motion.button
            key={project.title}
            variants={staggerItem}
            onClick={() => setSelected(project)}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-foreground/5 text-left transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Preview */}
            <motion.div
              variants={alternateSlide(index)}
              className="relative h-40 w-full overflow-hidden border-b border-border bg-muted/20"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-blue-500/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-lg font-semibold text-white">
                    {project.title.charAt(0)}
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    Preview unavailable
                  </span>
                </div>
              )}

              {/* Hover overlay with "view details" eye */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
                  <Eye className="h-3.5 w-3.5" />
                  View Details
                </span>
              </div>
            </motion.div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-blue-500 text-sm font-semibold text-white">
                  {project.title.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground">
                    {project.categoryLabel}
                  </p>
                </div>
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
          </motion.button>
        ))}
      </motion.div>

      {/* Details modal — portaled to document.body so it isn't trapped inside the
          animated tab container (transforms on ancestors break position: fixed). */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-black/70 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              >
                <div className="flex min-h-full items-end justify-center p-3 sm:items-center sm:p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-5 shadow-xl sm:p-6"
                  >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="text-xs font-medium text-primary">
                {selected.categoryLabel}
              </span>
              <h3 className="font-heading mt-1 text-xl font-bold text-foreground">
                {selected.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {selected.detail}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/30 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {selected.liveUrl && (
                  <Link
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </Link>
                )}
                {selected.sourceUrl && (
                  <Link
                    href={selected.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-muted/20"
                  >
                    <FaGithub className="h-4 w-4" />
                    Code
                  </Link>
                )}
              </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
