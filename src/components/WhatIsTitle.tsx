import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FloatingLinkedInLogos } from "@/components/FloatingLinkedInLogos";

export const WhatIsTitle = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 350 });

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="text-center w-full max-w-7xl mx-auto">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-ultra-thick">
              Quill HK builds a <span className="text-gradient">content-first culture</span><br className="hidden sm:block" />
              <span className="sm:hidden"> </span>in your leadership team.
            </h2>
          </div>
          <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Quill HK delivers the software and 1:1 mentoring your leadership team needs to build a long-term 
              LinkedIn presence, in just 10 minutes per post.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
