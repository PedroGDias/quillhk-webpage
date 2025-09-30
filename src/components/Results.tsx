
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
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4 bg-white">
      {/* Subtle animated geometric shapes */}
      <div className="absolute top-1/4 left-16 w-32 h-32 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '17s' }}></div>
      <div className="absolute bottom-1/4 right-20 w-24 h-24 border-2 border-primary/20 rounded-lg rotate-12 animate-slow-spin" style={{ animationDuration: '21s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative h-full flex flex-col justify-center">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 w-full max-w-7xl mx-auto">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 font-ultra-thick">
              Real results for <span className="text-gradient">your business</span>
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
    </section>
  );
};