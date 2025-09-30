import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { WhatIs } from "@/components/WhatIs";
import { Projects } from "@/components/Projects";
import { Results } from "@/components/Results";
import { FinalCta } from "@/components/FinalCta";

const Index = () => {



  return (
    <div className="scroll-snap-container bg-background">
      {/* Hero Section */}
      <div className="scroll-snap-section">
        <Header />
        <Hero />
      </div>
      
      {/* How we work section */}
      <div className="scroll-snap-section">
        <WhatIs />
      </div>
      
      {/* Projects Section */}
      <div className="scroll-snap-section">
        <Projects />
      </div>
      
      {/* Results Section */}
      <div className="scroll-snap-section">
        <Results />
      </div>
      
      {/* Testimonials Section */}
      <div className="scroll-snap-section">
        <Testimonials />
      </div>
      
      {/* Final CTA Section */}
      <div className="scroll-snap-section">
        <FinalCta />
      </div>
    </div>
  );
};

export default Index;