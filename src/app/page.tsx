import { HeroSection } from "@/components/home/Hero";
import { TechStack } from "@/components/home/tech-stack";
import { ServicesSection } from "@/components/home/Services";
import { PortfolioSection } from "@/components/home/protfolio";
import Contributions from "@/components/home/Contribution";
import { ContactSection } from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="bg-background">
 
      <section id="home">
        <HeroSection />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="contributions">
        <Contributions />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
