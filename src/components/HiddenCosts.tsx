import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const HiddenCosts = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });

  const inefficiencies = [
    {
      value: "Lower",
      label: "Productivity",
      description: "Teams waste hours on repetitive manual tasks that could be automated.",
    },
    {
      value: "Higher",
      label: "Error Rate",
      description: "Manual processes lead to costly mistakes and inconsistent quality.",
    },
    {
      value: "Missed",
      label: "Opportunities",
      description: "Competitors leveraging AI and automation leave you behind.",
    },
    {
      value: "Rising",
      label: "Costs",
      description: "Bad processes compound over time, multiplying costs and draining your budget.",
    },
    {
      value: "Team",
      label: "Burnout",
      description: "Your best people spend time on tedious work nobody wants to do.",
    },
  ];

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center py-4 sm:p-4">
      {/* Subtle animated geometric shapes - smaller and at edges on mobile */}
      <div className="absolute top-1/4 right-1 sm:right-16 w-10 h-10 sm:w-32 sm:h-32 border-2 border-primary/20 rounded-lg rotate-45 animate-slow-pulse" style={{ animationDuration: '19s' }}></div>
      <div className="absolute bottom-1/4 left-1 sm:left-20 w-8 h-8 sm:w-24 sm:h-24 border-2 border-primary/20 rounded-full animate-slow-spin" style={{ animationDuration: '23s' }}></div>
      
      <div className="container mx-auto sm:px-8 lg:px-16 relative h-full flex flex-col justify-center">
        {/* Mobile: Compact layout */}
        <div className="sm:hidden px-4">
          <div className="text-center mb-3">
            <h2 className="text-4xl font-bold text-foreground mb-2 font-ultra-thick leading-none sm:leading-tight">
              Operational inefficiencies are <span className="text-gradient">your hidden costs</span>
            </h2>
            <p className="text-xs text-muted-foreground leading-tight px-2">
              Every manual process and outdated workflow is silently draining your resources.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-2 px-2 overflow-visible">
            {inefficiencies.slice(0, 4).map((item, index) => {
              const statAnimation = useScrollAnimation({ delay: 400 + (index * 100) });
              return (
                <div key={index} ref={statAnimation.ref} className={`${statAnimation.className} overflow-visible`}>
                  <div className="text-center p-2 overflow-visible">
                    <div className="text-2xl font-black text-gradient font-ultra-thick">
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1" style={{ marginTop: '-0.15rem' }}>
                      {item.label}
                    </div>
                    <p className="text-muted-foreground text-[10px] leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Last stat centered below */}
          <div className="mt-2 px-2 overflow-visible">
            {(() => {
              const item = inefficiencies[4];
              const statAnimation = useScrollAnimation({ delay: 800 });
              return (
                <div ref={statAnimation.ref} className={`${statAnimation.className} overflow-visible`}>
                  <div className="text-center p-2 overflow-visible">
                    <div className="text-2xl font-black text-gradient font-ultra-thick">
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-1" style={{ marginTop: '-0.15rem' }}>
                      {item.label}
                    </div>
                    <p className="text-muted-foreground text-[10px] leading-tight">
                      {item.description}
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
                Operational inefficiencies are <span className="text-gradient">your hidden costs</span>
              </h2>
            </div>
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-tight">
                Every manual process and outdated workflow is silently draining your resources and limiting your growth.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-4 lg:gap-6 max-w-7xl mx-auto overflow-visible">
            {inefficiencies.map((item, index) => {
              const statAnimation = useScrollAnimation({ delay: 400 + (index * 200) });
              return (
                <div key={index} ref={statAnimation.ref} className={`${statAnimation.className} overflow-visible`}>
                  <div className="text-center p-3 sm:p-4 lg:p-6 overflow-visible">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient font-ultra-thick">
                      {item.value}
                    </div>
                    <div className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1" style={{ marginTop: '-0.25rem' }}>
                      {item.label}
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-tight">
                      {item.description}
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

