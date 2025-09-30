import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const WhatIs = () => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation({ delay: 200 });
  const leftCardTitleAnimation = useScrollAnimation({ delay: 400 });
  const rightCardTitleAnimation = useScrollAnimation({ delay: 500 });
  
  // Individual line animations for left card
  const leftLine1Animation = useScrollAnimation({ delay: 600 });
  const leftLine2Animation = useScrollAnimation({ delay: 700 });
  const leftLine3Animation = useScrollAnimation({ delay: 800 });
  const leftLine4Animation = useScrollAnimation({ delay: 900 });
  
  // Individual line animations for right card
  const rightLine1Animation = useScrollAnimation({ delay: 1000 });
  const rightLine2Animation = useScrollAnimation({ delay: 1100 });
  const rightLine3Animation = useScrollAnimation({ delay: 1200 });
  const rightLine4Animation = useScrollAnimation({ delay: 1300 });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-0 bg-white">
      {/* Subtle animated geometric shapes */}
      <div className="absolute top-16 left-20 w-36 h-36 border-2 border-primary/20 rounded-lg -rotate-12 animate-slow-float" style={{ animationDuration: '19s' }}></div>
      <div className="absolute bottom-20 right-24 w-20 h-20 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '14s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="text-center mb-12 sm:mb-16 w-full max-w-7xl mx-auto">
              <div ref={titleAnimation.ref} className={titleAnimation.className}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-4 font-ultra-thick px-4">
                  How we <span className="text-gradient">work</span>
                </h2>
              </div>
              <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
                <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-tight sm:leading-relaxed">
                  To deliver real impact, we limit ourselves to one or two projects at a time. This allows us to work closely with clients and maintain a quality-first mindset.
                </p>
              </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - positioned to run through center of dots with flicker effect */}
          <div className="hidden md:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 animate-pulse" style={{top: 'calc(-0.5rem + 0.4375rem)'}}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Step 1: Spot the problem */}
            <div className="p-3 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '0s' }}></div>
              
                  <div ref={leftCardTitleAnimation.ref} className={leftCardTitleAnimation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Scope the<br className="hidden md:block" /> <span className="text-gradient">Problem</span>
                    </h3>
                  </div>
                  <div ref={leftLine1Animation.ref} className={leftLine1Animation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      Identify your operational bottlenecks, design a smart solution, pick the best technology to build it.
                    </p>
                  </div>
            </div>
            
            {/* Step 2: Build the solution */}
            <div className="p-3 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '1s' }}></div>
              
                  <div ref={rightCardTitleAnimation.ref} className={rightCardTitleAnimation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Build the<br className="hidden md:block" /> <span className="text-gradient">Solution</span>
                    </h3>
                  </div>
                  <div ref={leftLine2Animation.ref} className={leftLine2Animation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      AI-enhanced development of robust and effective solutions in any tech stack your team needs.
                    </p>
                  </div>
            </div>
            
            {/* Step 3: Deploy & Empower */}
            <div className="p-3 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '2s' }}></div>
              
                  <div ref={leftLine3Animation.ref} className={leftLine3Animation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Deploy &<br className="hidden md:block" /> <span className="text-gradient">Empower</span>
                    </h3>
                  </div>
                  <div ref={leftLine4Animation.ref} className={leftLine4Animation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      Ship and iterate until results are undeniable. Transfer knowledge to empower your team.
                    </p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};