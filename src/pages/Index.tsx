import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogosMarquee } from "@/components/LogosMarquee";
import { WhatIs } from "@/components/WhatIs";
import { Results } from "@/components/Results";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { JoinWaitlistModal } from "@/components/JoinWaitlistModal";

const Index = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleJoinWaitlist = () => {
    setIsWaitlistModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onJoinWaitlist={handleJoinWaitlist} />
      
      <main>
        <Hero onJoinWaitlist={handleJoinWaitlist} />
        <LogosMarquee />
        <WhatIs />
        <Results />
        <FinalCta onJoinWaitlist={handleJoinWaitlist} />
      </main>
      
      <Footer />
      
      <JoinWaitlistModal 
        open={isWaitlistModalOpen}
        onOpenChange={setIsWaitlistModalOpen}
      />
    </div>
  );
};

export default Index;