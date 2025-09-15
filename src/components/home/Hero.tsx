"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20" >  
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col items-center text-center"
        >
          {/* Greeting */}
          <motion.div
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 mb-8 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider text-primary">HELLO THERE, MY NAME IS</span>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-6 mb-10">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Darey Olowo
       
            </motion.h1>

            <motion.div
              className="text-lg text-muted-foreground max-w-3xl leading-relaxed mx-auto space-y-4"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="text-foreground/90">
                I'm a frontend software developer with a strong passion
                for building seamless and responsive web applications. My
                expertise lies in creating modern, user-friendly interfaces using
                React, Next.js, and Tailwind CSS.
              </p>
              <p className="text-foreground/80">
                I also work with smart contracts in Solidity and Cairo, integrating
                blockchain functionality directly into applications. I specialize in
                connecting decentralized logic with intuitive interfaces.
              </p>
              <p className="text-foreground/70">
                I've contributed to multiple open source Web3 projects through OnlyDust,
                collaborating with global teams to ship real-world solutions.
              </p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 mb-16 mt-8"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                icon: <Github className="w-5 h-5" />,
                url: "https://github.com/yourusername",
                name: "GitHub",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                url: "https://linkedin.com/in/yourusername",
                name: "LinkedIn",
              },
              {
                icon: <Twitter className="w-5 h-5" />,
                url: "https://twitter.com/yourusername",
                name: "Twitter",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>

     

          {/* CTA Buttons */}
          <motion.div
            className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-0 sm:space-x-6 mt-10 flex flex-col items-center"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="#projects" className="flex-1 group">
                <Button 
                  size="lg" 
                  className="w-full h-14 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  View My Work
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
              <Link href="#contact" className="flex-1">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full h-14 text-base font-medium border-2 border-foreground/20 hover:border-primary/50 hover:bg-foreground/5 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
