import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogosMarquee } from "@/components/LogosMarquee";
import { WhatIs } from "@/components/WhatIs";
import { Results } from "@/components/Results";
import { FinalCta } from "@/components/FinalCta";
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal";

const Index = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistModalOpen(true);
  };

  return (
    <div className="scroll-snap-container bg-background">
      <div className="h-screen flex flex-col scroll-snap-section">
        <Header onJoinWaitlist={handleJoinWaitlist} />
        <Hero onJoinWaitlist={handleJoinWaitlist} />
        <LogosMarquee />
      </div>
      
      <main>
        <div className="scroll-snap-section">
          <WhatIs />
        </div>
        <div className="scroll-snap-section">
          <Results />
        </div>
        <div className="scroll-snap-section">
          <FinalCta onJoinWaitlist={handleJoinWaitlist} />
        </div>
      </main>
      
      <JoinWaitlistModal 
        open={isWaitlistModalOpen}
        onOpenChange={setIsWaitlistModalOpen}
      />
    </div>
  );
};

export default Index;