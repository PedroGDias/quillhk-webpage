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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* What Quill HK Is */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={leftCardTitleAnimation.ref} className={leftCardTitleAnimation.className}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-1 font-ultra-thick text-center sm:text-left">
                What Quill HK <span className="text-gradient">Is</span>
              </h3>
              <div className="w-full h-px bg-gray-100 mb-4 sm:mb-6"></div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div ref={leftLine1Animation.ref} className={leftLine1Animation.className}>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">A unique combo of software and 1:1 personalised mentoring.</span>
                </div>
              </div>
              <div ref={leftLine2Animation.ref} className={leftLine2Animation.className}>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">A WhatsApp content agent that turns ideas into posts.</span>
                </div>
              </div>
              <div ref={leftLine3Animation.ref} className={leftLine3Animation.className}>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">A 1:1 mentoring program for your growth goals.</span>
                </div>
              </div>
              <div ref={leftLine4Animation.ref} className={leftLine4Animation.className}>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">The solution for your pipeline and hiring needs.</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* What Quill HK Is Not */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={rightCardTitleAnimation.ref} className={rightCardTitleAnimation.className}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-1 font-ultra-thick text-center sm:text-left">
                What Quill HK <span className="text-gradient">Is Not</span>
              </h3>
              <div className="w-full h-px bg-gray-100 mb-4 sm:mb-6"></div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div ref={rightLine1Animation.ref} className={rightLine1Animation.className}>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">AI ghostwriting that hurts your brand.</span>
                </div>
              </div>
              <div ref={rightLine2Animation.ref} className={rightLine2Animation.className}>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">An expensive ghostwriter that you have to manage.</span>
                </div>
              </div>
              <div ref={rightLine3Animation.ref} className={rightLine3Animation.className}>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Generic LinkedIn coaching you can find online.</span>
                </div>
              </div>
              <div ref={rightLine4Animation.ref} className={rightLine4Animation.className}>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Just another AI tool without strategy or direction.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
