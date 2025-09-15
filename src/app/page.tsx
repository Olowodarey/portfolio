import { HeroSection } from "@/components/home/Hero";
import { TechStack } from "@/components/home/tech-stack";
import { ServicesSection } from "@/components/home/Services";
import { PortfolioSection } from "@/components/home/protfolio";


export default function Home() {
  return (
    <div className=" bg-background">
      <HeroSection />
      <TechStack />
      <ServicesSection />
      <PortfolioSection />
    
    </div>
   
  );
}
