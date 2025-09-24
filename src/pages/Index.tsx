import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PersonalBrands } from "@/components/PersonalBrands";
import { WhatIsTitle } from "@/components/WhatIsTitle";
import { WhatIsCard } from "@/components/WhatIsCard";
import { WhatIsDesktop } from "@/components/WhatIsDesktop";
import { Results } from "@/components/Results";
import { FinalCta } from "@/components/FinalCta";
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal";

const Index = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistModalOpen(true);
  };

  const whatIsItems = [
    "A unique combo of software and 1:1 personalised mentoring.",
    "A WhatsApp content agent that turns ideas into posts.",
    "A 1:1 mentoring program for your growth goals.",
    "The solution for your pipeline and hiring needs."
  ];

  const whatIsNotItems = [
    "AI ghostwriting that hurts your brand.",
    "An expensive ghostwriter that you have to manage.",
    "Generic LinkedIn coaching you can find online.",
    "Just another AI tool without strategy or direction."
  ];

  return (
    <div className="scroll-snap-container bg-background">
      {/* Hero Section */}
      <div className="scroll-snap-section">
        <Header onJoinWaitlist={handleJoinWaitlist} />
        <Hero onJoinWaitlist={handleJoinWaitlist} />
      </div>
      
      {/* Personal Brands Section */}
      <div className="scroll-snap-section">
        <PersonalBrands />
      </div>
      
      {/* WhatIs Sections - Desktop: Side by side, Mobile: Separate sections */}
      <div className="scroll-snap-section">
        <WhatIsTitle />
      </div>
      
      {/* Desktop: Side by side layout */}
      <div className="scroll-snap-section hidden lg:block">
        <WhatIsDesktop />
      </div>
      
      {/* Mobile: Separate sections */}
      <div className="scroll-snap-section lg:hidden">
        <WhatIsCard type="is" title="Is" items={whatIsItems} />
      </div>
      
      <div className="scroll-snap-section lg:hidden">
        <WhatIsCard type="not" title="Is Not" items={whatIsNotItems} />
      </div>
      
      {/* Results Section */}
      <div className="scroll-snap-section">
        <Results />
      </div>
      
      {/* Final CTA Section */}
      <div className="scroll-snap-section">
        <FinalCta onJoinWaitlist={handleJoinWaitlist} />
      </div>
      
      <JoinWaitlistModal 
        open={isWaitlistModalOpen}
        onOpenChange={setIsWaitlistModalOpen}
      />
    </div>
  );
};

export default Index;