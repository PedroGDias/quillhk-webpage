import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero = ({ onJoinWaitlist }: HeroProps) => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation({ delay: 200 });
  const buttonsAnimation = useScrollAnimation({ delay: 400 });

  return (
    <section className="flex-1 flex items-center justify-center relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 lg:px-16 relative">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight font-ultra-thick">
              Convert your senior leaders into{" "}
              <span className="text-gradient">
                client and talent magnets on LinkedIn.
              </span>
            </h1>
          </div>
          
          <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Turn leadership expertise into consistent, on-brand LinkedIn content that attracts clients and talent - in minutes per week, not hours.
            </p>
          </div>
          
          <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onJoinWaitlist}
                className="text-base font-semibold px-6"
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="text-base font-semibold px-6"
              >
                <a 
                  href="https://calendly.com/underdogfounders/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};