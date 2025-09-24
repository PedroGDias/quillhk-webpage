
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
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-32">
        <div className="text-center mb-16">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
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
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
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