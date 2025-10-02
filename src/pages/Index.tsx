import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HiddenCosts } from "@/components/HiddenCosts";
import { Testimonials } from "@/components/Testimonials";
import { WhatIs } from "@/components/WhatIs";
import { Projects } from "@/components/Projects";
import { Results } from "@/components/Results";
import { FinalCta } from "@/components/FinalCta";

const Index = () => {



  return (
    <div className="scroll-snap-container">
      {/* Hero Section */}
      <div className="scroll-snap-section">
        <Header />
        <Hero />
      </div>
      
      {/* Hidden Costs Section */}
      <div className="scroll-snap-section">
        <HiddenCosts />
      </div>
      
      {/* How we can help section */}
      <div className="scroll-snap-section">
        <WhatIs />
      </div>
      
      {/* Results Section */}
      <div className="scroll-snap-section">
        <Results />
      </div>
      
      {/* Projects Section */}
      <div className="scroll-snap-section">
        <Projects />
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