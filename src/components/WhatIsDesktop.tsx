import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FloatingLinkedInLogos } from "@/components/FloatingLinkedInLogos";

export const WhatIsDesktop = () => {
  // Step 1: Identify Inefficiencies
  const step1TitleAnimation = useScrollAnimation({ delay: 250 });
  const step1DescAnimation = useScrollAnimation({ delay: 350 });
  
  // Step 2: Implement Solutions
  const step2TitleAnimation = useScrollAnimation({ delay: 500 });
  const step2DescAnimation = useScrollAnimation({ delay: 600 });
  
  // Step 3: Deploy & Empower
  const step3TitleAnimation = useScrollAnimation({ delay: 750 });
  const step3DescAnimation = useScrollAnimation({ delay: 850 });
  
  // Step 4: Monitor & Support
  const step4TitleAnimation = useScrollAnimation({ delay: 1000 });
  const step4DescAnimation = useScrollAnimation({ delay: 1100 });
  
  // Bottom text
  const bottomTextAnimation = useScrollAnimation({ delay: 1250 });

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Step 1: Identify Inefficiencies */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={step1TitleAnimation.ref} className={step1TitleAnimation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Identify Inefficiencies</span>
              </h3>
            </div>
            <div ref={step1DescAnimation.ref} className={step1DescAnimation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                Find bottlenecks and opportunities for improving efficiency, then draw an execution plan.
              </p>
            </div>
          </div>
          
          {/* Step 2: Implement Solutions */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={step2TitleAnimation.ref} className={step2TitleAnimation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Implement Solutions</span>
              </h3>
            </div>
            <div ref={step2DescAnimation.ref} className={step2DescAnimation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                Select the best tech, craft effective solutions, and deliver with AI-powered automation.
              </p>
            </div>
          </div>
          
          {/* Step 3: Deploy & Empower */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={step3TitleAnimation.ref} className={step3TitleAnimation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Deploy & Empower</span>
              </h3>
            </div>
            <div ref={step3DescAnimation.ref} className={step3DescAnimation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                Ship, measure, and iterate until results are undeniable. Transfer knowledge to empower your team.
              </p>
            </div>
          </div>
          
          {/* Step 4: Monitor & Support */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={step4TitleAnimation.ref} className={step4TitleAnimation.className}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center font-ultra-thick">
                <span className="text-gradient">Monitor & Support</span>
              </h3>
            </div>
            <div ref={step4DescAnimation.ref} className={step4DescAnimation.className}>
              <p className="text-foreground text-sm sm:text-base text-center">
                Ongoing support for monitoring, fixes, and improvements to keep your solutions running smoothly.
              </p>
            </div>
          </div>
          
          {/* Bottom text */}
          <div ref={bottomTextAnimation.ref} className={`text-center mt-12 px-4 ${bottomTextAnimation.className}`}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              From first insight to full implementation, <span className="text-gradient font-bold">we stay hands-on</span> to make sure<br className="hidden sm:block" /> improvements stick and deliver real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
