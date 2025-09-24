import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface WhatIsCardProps {
  type: "is" | "not";
  title: string;
  items: string[];
}

export const WhatIsCard = ({ type, title, items }: WhatIsCardProps) => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  
  // Individual line animations
  const line1Animation = useScrollAnimation({ delay: 250 });
  const line2Animation = useScrollAnimation({ delay: 350 });
  const line3Animation = useScrollAnimation({ delay: 450 });
  const line4Animation = useScrollAnimation({ delay: 550 });

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground flex items-center gap-2 mb-1 font-ultra-thick">
                What Crafted <span className="text-gradient">{title}</span>
              </h3>
              <div className="w-full h-px bg-gray-100 mb-4 sm:mb-6"></div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {items.map((item, index) => {
                const animationRef = index === 0 ? line1Animation : 
                                   index === 1 ? line2Animation : 
                                   index === 2 ? line3Animation : line4Animation;
                return (
                  <div key={index} ref={animationRef.ref} className={animationRef.className}>
                    <div className="flex items-start gap-3">
                      {type === "is" ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-foreground text-sm sm:text-base">{item}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
