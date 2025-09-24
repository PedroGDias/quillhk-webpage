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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Same background as FinalCta section */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;