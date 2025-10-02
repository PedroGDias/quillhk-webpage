import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const WhatIs = () => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation({ delay: 200 });
  
  // Step 1: Identify Inefficiencies
  const step1TitleAnimation = useScrollAnimation({ delay: 400 });
  const step1DescAnimation = useScrollAnimation({ delay: 500 });
  
  // Step 2: Implement Solutions
  const step2TitleAnimation = useScrollAnimation({ delay: 650 });
  const step2DescAnimation = useScrollAnimation({ delay: 750 });
  
  // Step 3: Deploy & Empower
  const step3TitleAnimation = useScrollAnimation({ delay: 900 });
  const step3DescAnimation = useScrollAnimation({ delay: 1000 });
  
  // Step 4: Monitor & Support
  const step4TitleAnimation = useScrollAnimation({ delay: 1150 });
  const step4DescAnimation = useScrollAnimation({ delay: 1250 });
  
  // Bottom text
  const bottomTextAnimation = useScrollAnimation({ delay: 1400 });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden sm:py-0">
      {/* Subtle animated geometric shapes */}
      <div className="absolute top-16 left-1 sm:left-20 w-10 h-10 sm:w-36 sm:h-36 border-2 border-primary/20 rounded-lg -rotate-12 animate-slow-float" style={{ animationDuration: '19s' }}></div>
      <div className="absolute bottom-20 right-24 w-20 h-20 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '14s' }}></div>
      
      <div className="container mx-auto sm:px-8 lg:px-16 relative -mt-8 sm:mt-0">
        <div className="text-center mb-4 sm:mb-16 w-full max-w-7xl mx-auto px-4 sm:px-0">
              <div ref={titleAnimation.ref} className={titleAnimation.className}>
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-4 font-ultra-thick">
                  How we can <span className="text-gradient">help</span>
                </h2>
              </div>
              <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
                <p className="text-xs sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-tight sm:leading-relaxed">
                  We uncover hidden inefficiencies, pinpoint opportunities for improvement, and apply AI and automation to design elegant, practical solutions.
                </p>
              </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line - positioned to run through center of dots with flicker effect */}
          <div className="hidden md:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 animate-pulse" style={{top: 'calc(-0.5rem + 0.4375rem)'}}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-6">
            {/* Step 1: Identify Inefficiencies */}
            <div className="p-2 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '0s', left: 'calc(50% - 0.6rem)' }}></div>
              
                  <div ref={step1TitleAnimation.ref} className={step1TitleAnimation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Identify<br className="hidden md:block" /> <span className="text-gradient">Inefficiencies</span>
                    </h3>
                  </div>
                  <div ref={step1DescAnimation.ref} className={step1DescAnimation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      Find bottlenecks and opportunities for improving efficiency, then draw an execution plan.
                    </p>
                  </div>
            </div>
            
            {/* Step 2: Implement Solutions */}
            <div className="p-2 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '1s', left: 'calc(50% - 0.6rem)' }}></div>
              
                  <div ref={step2TitleAnimation.ref} className={step2TitleAnimation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Implement<br className="hidden md:block" /> <span className="text-gradient">Solutions</span>
                    </h3>
                  </div>
                  <div ref={step2DescAnimation.ref} className={step2DescAnimation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      Select the best tech, craft effective solutions, and deliver with AI-powered automation.
                    </p>
                  </div>
            </div>
            
            {/* Step 3: Deploy & Empower */}
            <div className="p-2 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '2s', left: 'calc(50% - 0.6rem)' }}></div>
              
                  <div ref={step3TitleAnimation.ref} className={step3TitleAnimation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Deploy &<br className="hidden md:block" /> <span className="text-gradient">Empower</span>
                    </h3>
                  </div>
                  <div ref={step3DescAnimation.ref} className={step3DescAnimation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      Ship and iterate until results are undeniable. Transfer knowledge to empower your team.
                    </p>
                  </div>
            </div>
            
            {/* Step 4: Monitor & Support */}
            <div className="p-2 sm:p-4 lg:p-6 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute -top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-dot-flicker" style={{ animationDelay: '3s', left: 'calc(50% - 0.6rem)' }}></div>
              
                  <div ref={step4TitleAnimation.ref} className={step4TitleAnimation.className}>
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-3 text-center font-ultra-thick">
                      Monitor &<br className="hidden md:block" /> <span className="text-gradient">Support</span>
                    </h3>
                  </div>
                  <div ref={step4DescAnimation.ref} className={step4DescAnimation.className}>
                    <p className="text-foreground text-xs sm:text-sm text-center leading-tight sm:leading-relaxed">
                      Ongoing support for monitoring, fixes, and improvements to keep your solutions running smoothly.
                    </p>
                  </div>
            </div>
          </div>
          
          {/* Bottom text */}
          <div ref={bottomTextAnimation.ref} className={`text-center mt-4 sm:mt-12 px-4 ${bottomTextAnimation.className}`}>
            <p className="text-xs sm:text-base text-muted-foreground max-w-3xl mx-auto leading-tight sm:leading-relaxed">
              From first insight to full implementation, <span className="text-gradient font-bold">we stay hands-on</span> to make sure<br className="hidden sm:block" /> improvements stick and deliver real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};