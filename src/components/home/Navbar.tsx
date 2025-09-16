"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const pathname = usePathname();
  const sections = useRef<NodeListOf<HTMLElement> | null>(null);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "open source Contributions", href: "#contributions" },
    { name: "Contact Me", href: "#contact" },
  ];

  // Handle scroll effect for navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar scroll effect
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle active section detection
      if (!sections.current) {
        sections.current = document.querySelectorAll("section[id]");
      }

      let currentSection = "";
      const scrollPosition = window.scrollY + 100;

      sections.current?.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Close mobile menu when clicking on a nav item
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed w-full z-50 transition-all duration-500 border-b-2 border-primary/30 bg-background/95 backdrop-blur-md"
      style={{
        borderImage: 'linear-gradient(90deg, transparent, hsl(var(--primary)) 20%, hsl(var(--primary)) 80%, transparent 100%) 1',
      }}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                onClick={handleNavClick}
              >
                OD
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                          activeSection === item.href.substring(1)
                            ? "scale-x-100"
                            : ""
                        }`}
                      ></span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                          activeSection === item.href.substring(1)
                            ? "scale-x-100"
                            : ""
                        }`}
                      ></span>
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <div key={item.name} className="relative overflow-hidden group">
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                          activeSection === item.href.substring(1)
                            ? "text-primary bg-gradient-to-r from-primary/5 to-purple-500/5 border-l-4 border-primary pl-3 ml-1"
                            : "text-foreground/80 hover:bg-accent/20"
                        }`}
                        onClick={handleNavClick}
                      >
                        <span className="flex items-center">
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                              activeSection === item.href.substring(1)
                                ? "bg-primary scale-125"
                                : "bg-foreground/30 group-hover:bg-primary group-hover:scale-125"
                            }`}
                          ></span>
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;