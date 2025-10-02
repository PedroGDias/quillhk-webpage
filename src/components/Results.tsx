import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Results = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });

  const stats = [
    {
      value: "More",
      label: "Productivity",
      description: "Teams accomplish significantly more with automated workflows that eliminate repetitive tasks.",
    },
    {
      value: "Fewer",
      label: "Errors", 
      description: "Automated processes reduce human error and ensure consistent quality across operations.",
    },
    {
      value: "Lower",
      label: "Costs",
      description: "Cut operational expenses by eliminating inefficiencies and reducing manual work.",
    },
    {
      value: "Zero",
      label: "Headaches",
      description: "Your team focuses on meaningful work instead of tedious, repetitive tasks.",
    },
    {
      value: "100%",
      label: "AI-Embedded",
      description: "Automation and AI become a natural part of your company's DNA.",
    },
  ];

  return (
    <section className="h-full w-full relative overflow-y-auto overflow-x-hidden flex flex-col justify-center py-4 sm:p-4">
      {/* Subtle animated geometric shapes - smaller and at edges on mobile */}
      <div className="absolute top-1/4 left-1 sm:left-16 w-10 h-10 sm:w-32 sm:h-32 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '17s' }}></div>
      <div className="absolute bottom-1/4 right-1 sm:right-20 w-8 h-8 sm:w-24 sm:h-24 border-2 border-primary/20 rounded-lg rotate-12 animate-slow-spin" style={{ animationDuration: '21s' }}></div>
      
      <div className="container mx-auto sm:px-8 lg:px-16 relative h-full flex flex-col justify-center overflow-x-hidden">
        {/* Mobile: Compact layout */}
        <div className="sm:hidden px-4">
          <div className="text-center mb-3">
            <h2 className="text-3xl font-bold text-foreground mb-2 font-ultra-thick leading-tight">
              Real impact on <span className="text-gradient">your business</span>
            </h2>
            <p className="text-xs text-muted-foreground leading-tight px-2">
              Measurable improvements across productivity, costs, and team satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-2 px-2">
            {stats.slice(0, 4).map((stat, index) => {
              const statAnimation = useScrollAnimation({ delay: 400 + (index * 100) });
              return (
                <div key={index} ref={statAnimation.ref} className={statAnimation.className}>
                  <div className="text-center p-2">
                    <div className="text-2xl font-black text-gradient mb-0.5 font-ultra-thick">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <p className="text-muted-foreground text-[10px] leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Last stat centered below */}
          <div className="mt-2 px-2">
            {(() => {
              const stat = stats[4];
              const statAnimation = useScrollAnimation({ delay: 800 });
              return (
                <div ref={statAnimation.ref} className={statAnimation.className}>
                  <div className="text-center p-2">
                    <div className="text-2xl font-black text-gradient mb-0.5 font-ultra-thick">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <p className="text-muted-foreground text-[10px] leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden sm:block">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 w-full max-w-7xl mx-auto">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 font-ultra-thick">
                Real impact on <span className="text-gradient">your business</span>
              </h2>
            </div>
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-tight">
                Companies working with us see measurable improvements across productivity, costs, and team satisfaction.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const statAnimation = useScrollAnimation({ delay: 400 + (index * 200) });
              return (
                <div key={index} ref={statAnimation.ref} className={statAnimation.className}>
                  <div className="text-center p-3 sm:p-4 lg:p-6">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient mb-0.5 font-ultra-thick">
                      {stat.value}
                    </div>
                    <div className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};