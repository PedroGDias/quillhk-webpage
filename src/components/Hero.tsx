import { Button } from "@/components/ui/button";
import heroImage from "@/assets/crafted-hero-image.webp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero = ({ onJoinWaitlist }: HeroProps) => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>(0);
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>(200);
  const buttonsRef = useScrollAnimation<HTMLDivElement>(400);
  const imageRef = useScrollAnimation<HTMLImageElement>(600);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-center">
          <div className="space-y-8">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Convert your senior leaders into{" "}
              <span className="text-gradient">
                client and talent magnets on LinkedIn
              </span>.
            </h1>
            
            <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Turn leadership expertise into consistent, on-brand LinkedIn content that attracts 
              clients and talent — in minutes per week, not hours.
            </p>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onJoinWaitlist}
                className="text-base font-semibold"
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="text-base font-semibold"
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
          
          <div className="flex justify-center lg:justify-start">
            <img 
              ref={imageRef}
              src={heroImage} 
              alt="Crafted mobile app illustration showing LinkedIn content creation"
              className="w-full max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};