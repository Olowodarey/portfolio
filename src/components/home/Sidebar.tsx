"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { slideInLeft } from "@/lib/motion";
import { AvailableBadge } from "./AvailableBadge";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Olowodarey@gmail.com",
    href: "mailto:Olowodarey@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 814 229 3610",
    href: "tel:+2348142293610",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria",
    href: null,
  },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Olowodarey",
    label: "GitHub",
    color: "text-foreground",
    bg: "bg-foreground/10",
    hoverBg: "hover:bg-foreground",
    hoverText: "hover:text-background",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/darey-olowo-213859169/",
    label: "LinkedIn",
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/15",
    hoverBg: "hover:bg-[#0A66C2]",
    hoverText: "hover:text-white",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/Dareyolowo",
    label: "Twitter",
    color: "text-foreground",
    bg: "bg-foreground/10",
    hoverBg: "hover:bg-foreground",
    hoverText: "hover:text-background",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2348142293610",
    label: "WhatsApp",
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/15",
    hoverBg: "hover:bg-[#25D366]",
    hoverText: "hover:text-white",
  },
  {
    icon: FaTelegram,
    href: "https://t.me/Darey56",
    label: "Telegram",
    color: "text-[#0088CC]",
    bg: "bg-[#0088CC]/15",
    hoverBg: "hover:bg-[#0088CC]",
    hoverText: "hover:text-white",
  },
];

export function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <motion.aside
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 lg:sticky lg:top-6 lg:h-full lg:w-[330px] lg:shrink-0"
    >
      {/* subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-white/5 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      {/* Header: avatar + name */}
      <div className="flex items-center gap-4 lg:flex-col lg:text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 lg:h-28 lg:w-28"
        >
          <Image
            src="/olowoDp.png"
            alt="Darey Olowo"
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="lg:mt-4">
          <h1 className="font-heading text-lg font-bold text-foreground lg:text-xl">
            Darey Olowo
          </h1>
          <span className="mt-2 inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Frontend &amp; Web3 Developer
          </span>
        </div>

        {/* Mobile toggle for contact details */}
        <button
          onClick={() => setShowContacts((v) => !v)}
          aria-expanded={showContacts}
          aria-label="Toggle contact details"
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-primary/10 lg:hidden"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              showContacts ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Divider */}
      <div className="my-5 hidden h-px bg-border lg:block" />

      {/* Contact details */}
      <div
        className={`${
          showContacts ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-1`}
      >
        <div className="mt-5 flex flex-1 flex-col justify-center gap-5 lg:mt-0 lg:gap-6">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-primary/5 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <Link
                    href={href}
                    className="block truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {value}
                  </Link>
                ) : (
                  <p className="truncate text-sm font-medium text-foreground">
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Availability + socials pinned to the bottom of the card */}
        <div className="lg:mt-auto">
          <AvailableBadge />

          <div className="mt-5 flex items-center justify-center gap-3">
            {socials.map(
              ({ icon: Icon, href, label, color, bg, hoverBg, hoverText }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:border-transparent ${color} ${bg} ${hoverBg} ${hoverText}`}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
