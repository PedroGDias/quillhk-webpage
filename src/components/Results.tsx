

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Results = () => {
  const titleRef = useScrollAnimation(0);
  const card1Ref = useScrollAnimation(200);
  const card2Ref = useScrollAnimation(400);
  const card3Ref = useScrollAnimation(600);

  const animationRef = useScrollAnimation();

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
    <section ref={animationRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real results for <span className="text-gradient">teams like yours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our users achieve measurable improvements in their LinkedIn performance and 
            professional growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8">
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
          ))}
        </div>
      </div>
    </section>
  );
};