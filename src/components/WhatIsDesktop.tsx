import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FloatingLinkedInLogos } from "@/components/FloatingLinkedInLogos";

export const WhatIsDesktop = () => {
  const leftCardTitleAnimation = useScrollAnimation({ delay: 250 });
  const rightCardTitleAnimation = useScrollAnimation({ delay: 350 });
  
  // Individual line animations for left card
  const leftLine1Animation = useScrollAnimation({ delay: 450 });
  const leftLine2Animation = useScrollAnimation({ delay: 550 });
  const leftLine3Animation = useScrollAnimation({ delay: 650 });
  const leftLine4Animation = useScrollAnimation({ delay: 750 });
  
  // Individual line animations for right card
  const rightLine1Animation = useScrollAnimation({ delay: 850 });
  const rightLine2Animation = useScrollAnimation({ delay: 950 });
  const rightLine3Animation = useScrollAnimation({ delay: 1050 });
  const rightLine4Animation = useScrollAnimation({ delay: 1150 });

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Step 1: Spot the problem */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={leftCardTitleAnimation.ref} className={leftCardTitleAnimation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Spot the problem</span>
              </h3>
            </div>
            <div ref={leftLine1Animation.ref} className={leftLine1Animation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                Identify your operational bottlenecks, design a smart solution, pick the best technology to build it.
              </p>
            </div>
          </div>
          
          {/* Step 2: Build the solution */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={rightCardTitleAnimation.ref} className={rightCardTitleAnimation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Build the solution</span>
              </h3>
            </div>
            <div ref={leftLine2Animation.ref} className={leftLine2Animation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                AI-enhanced development of robust and effective solutions in any tech stack your team needs.
              </p>
            </div>
          </div>
          
          {/* Step 3: Deploy & Empower */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={leftLine3Animation.ref} className={leftLine3Animation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Deploy & Empower</span>
              </h3>
            </div>
            <div ref={leftLine4Animation.ref} className={leftLine4Animation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                Ship, measure, and iterate until results are undeniable. Transfer knowledge to empower your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
