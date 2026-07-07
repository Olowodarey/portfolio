"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./AboutTab";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const details = [
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
  { icon: MapPin, label: "Location", value: "Nigeria", href: null },
];

export function ContactTab() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:Olowodarey@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <SectionHeading title="Contact" />

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        Ready to start your project? Reach out directly or drop a message below.
      </motion.p>

      {/* Contact details */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-8 grid gap-4 sm:grid-cols-3"
      >
        {details.map(({ icon: Icon, label, value, href }) => {
          const inner = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="truncate text-sm font-medium text-foreground">
                  {value}
                </p>
              </div>
            </>
          );
          return href ? (
            <motion.div key={label} variants={staggerItem}>
              <Link
                href={href}
                className="flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-4 transition-colors hover:border-primary/40"
              >
                {inner}
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key={label}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-4"
            >
              {inner}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Message form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full rounded-lg border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-lg border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
          />
        </div>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-full resize-none rounded-lg border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
        />
        <motion.button
          type="submit"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scaleIn}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30"
        >
          <Send className="h-4 w-4" />
          Send Message
        </motion.button>
      </form>
    </div>
  );
}
