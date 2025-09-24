
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Results = () => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation({ delay: 200 });

  const stats = [
    {
      value: "85%",
      label: "Time Saved",
      description: "Create posts 85% faster with AI-powered workflows.",
    },
    {
      value: "2×",
      label: "Engagement", 
      description: "On average, users see 2× higher engagement.",
    },
    {
      value: "1",
      label: "Long-term Strategy",
      description: "Know what to post consistently for the next 5 years.",
    },
  ];

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
              Real results for <span className="text-gradient">teams like yours</span>
            </h2>
          </div>
          <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our users achieve measurable improvements in their LinkedIn performance and 
              professional growth.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const statAnimation = useScrollAnimation({ delay: 400 + (index * 200) });
            return (
              <div key={index} ref={statAnimation.ref} className={statAnimation.className}>
                <div className="text-center p-8">
                  <div className="text-5xl lg:text-6xl font-black text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-3">
                    {stat.label}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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