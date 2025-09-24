import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const WhatIs = () => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation({ delay: 200 });
  const leftCardAnimation = useScrollAnimation({ delay: 400 });
  const rightCardAnimation = useScrollAnimation({ delay: 600 });

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 lg:px-16 relative">
        <div className="text-center mb-16">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-ultra-thick">
              Crafted builds a <span className="text-gradient">content-first culture</span><br />in your leadership team.
            </h2>
          </div>
          <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Crafted delivers the mentoring and software your leadership team needs to build a long-term 
              LinkedIn presence, in just 10 minutes per post.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What Crafted Is */}
          <div ref={leftCardAnimation.ref} className={leftCardAnimation.className}>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-1">
                What Crafted <span className="text-gradient">Is</span>:
              </h3>
              <div className="w-full h-px bg-gray-100 mb-6"></div>
              <div className="space-y-4">
                {[
                  "A unique combo of software and 1:1 personalised mentoring.",
                  "A WhatsApp content agent that turns ideas into posts.",
                  "A 1:1 mentoring program for your growth goals.",
                  "The solution for your pipeline and hiring needs."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* What Crafted Is Not */}
          <div ref={rightCardAnimation.ref} className={rightCardAnimation.className}>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-1">
                What Crafted <span className="text-gradient">Is Not</span>:
              </h3>
              <div className="w-full h-px bg-gray-100 mb-6"></div>
              <div className="space-y-4">
                {[
                  "AI ghostwriting that hurts your brand.",
                  "An expensive ghostwriter that you have to manage.",
                  "Generic LinkedIn coaching you can find online.",
                  "Just another AI tool without strategy or direction."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};