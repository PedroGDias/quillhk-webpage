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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-0">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="text-center mb-12 sm:mb-16 w-full max-w-7xl mx-auto">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-ultra-thick px-4">
              Crafted builds a <span className="text-gradient">content-first culture</span><br className="hidden sm:block" />
              <span className="sm:hidden"> </span>in your leadership team.
            </h2>
          </div>
          <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Crafted delivers the mentoring and software your leadership team needs to build a long-term 
              LinkedIn presence, in just 10 minutes per post.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* What Crafted Is */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={leftCardTitleAnimation.ref} className={leftCardTitleAnimation.className}>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                What Crafted <span className="text-gradient">Is</span>:
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
          
          {/* What Crafted Is Not */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={rightCardTitleAnimation.ref} className={rightCardTitleAnimation.className}>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                What Crafted <span className="text-gradient">Is Not</span>:
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