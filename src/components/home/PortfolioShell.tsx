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
  { id: "portfolio", label: "Portfolio", Component: PortfolioTab },
  { id: "resume", label: "Resume", Component: ResumeTab },
  { id: "contact", label: "Contact", Component: ContactTab },
] as const;

type TabId = (typeof tabs)[number]["id"];

const tabOrder = tabs.map((t) => t.id);

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -48 : 48,
  }),
};

export function PortfolioShell() {
  const [active, setActive] = useState<TabId>("about");
  const [direction, setDirection] = useState(0);
  const ActiveComponent =
    tabs.find((t) => t.id === active)?.Component ?? AboutTab;

  const handleTabChange = (id: TabId) => {
    if (id === active) return;
    const newIndex = tabOrder.indexOf(id);
    const oldIndex = tabOrder.indexOf(active);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActive(id);
  };

  return (
    <div className="relative min-h-screen">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/5 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:h-[calc(110vh-5rem)] lg:flex-row lg:py-10">
        <Sidebar />

        {/* Main content panel — fixed height on desktop so every tab is the same size */}
        <main className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm lg:h-full">
          {/* Tab navigation — rounded block notched into the top-right corner */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute right-0 top-0 z-20 flex w-full justify-center px-3 pt-3 sm:w-auto sm:justify-end sm:px-0 sm:pt-0"
          >
            <nav className="flex gap-1 overflow-x-auto rounded-b-2xl border border-t-0 border-border bg-secondary/70 px-2 py-2 shadow-md backdrop-blur-md thin-scrollbar sm:overflow-visible sm:rounded-b-none sm:rounded-bl-2xl sm:rounded-tr-2xl sm:border-r-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    active === tab.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === tab.id && (
                    <motion.span
                      layoutId="active-tab"
                      className="absolute inset-0 rounded-lg bg-primary/15"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Tab content — scrolls internally so the panel height never changes between tabs */}
          <div className="thin-scrollbar flex-1 overflow-y-auto px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
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
