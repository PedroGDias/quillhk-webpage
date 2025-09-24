import { Button } from "@/components/ui/button";
import heroImage from "@/assets/crafted-hero-image.webp";

interface HeroProps {
  onJoinWaitlist: () => void;
}

export const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Convert your senior leaders<br />
              into client and talent magnets<br />
              on LinkedIn.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Turn leadership expertise into consistent, on-brand LinkedIn content that attracts 
              clients and talent — in minutes per week, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroImage} 
              alt="Crafted mobile app illustration showing LinkedIn content creation"
              className="w-full max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};