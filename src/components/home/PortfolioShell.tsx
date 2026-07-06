"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { AboutTab } from "./tabs/AboutTab";
import { ResumeTab } from "./tabs/ResumeTab";
import { PortfolioTab } from "./tabs/PortfolioTab";
import { ContactTab } from "./tabs/ContactTab";

const tabs = [
  { id: "about", label: "About", Component: AboutTab },
  { id: "resume", label: "Resume", Component: ResumeTab },
  { id: "portfolio", label: "Portfolio", Component: PortfolioTab },
  { id: "contact", label: "Contact", Component: ContactTab },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function PortfolioShell() {
  const [active, setActive] = useState<TabId>("about");
  const ActiveComponent =
    tabs.find((t) => t.id === active)?.Component ?? AboutTab;

  return (
    <div className="relative min-h-screen">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/5 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:py-10">
        <Sidebar />

        {/* Main content panel */}
        <main className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
          {/* Tab navigation */}
          <div className="sticky top-0 z-10 flex justify-center overflow-x-auto border-b border-border bg-card/80 px-2 backdrop-blur-md thin-scrollbar sm:justify-end sm:px-4">
            <nav className="flex gap-1 py-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active === tab.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === tab.id && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab content */}
          <div className="p-5 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
