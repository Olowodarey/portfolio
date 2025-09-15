import { HeroSection } from "@/components/home/Hero";
import { TechStack } from "@/components/home/tech-stack";
import { ServicesSection } from "@/components/home/Services";
import { PortfolioSection } from "@/components/home/protfolio";
import  Contributions  from "@/components/home/Contribution";
import { ContactSection } from "@/components/home/Contact";


export default function Home() {
  return (
    <div className=" bg-background">
      <HeroSection />
      <TechStack />
      <ServicesSection />
      <PortfolioSection />
      <Contributions />
      <ContactSection />
    
    </div>
   
  );
}
