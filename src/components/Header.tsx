import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import craftedLogo from "@/assets/crafted_logo_highres_blue_v2.png";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export const Header = ({ onJoinWaitlist }: HeaderProps) => {
  const logoAnimation = useScrollAnimation({ delay: 50 });
  const buttonsAnimation = useScrollAnimation({ delay: 150 });

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border/40 relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-3 sm:py-4 relative">
        <div className="flex items-center justify-center sm:justify-between">
          <div ref={logoAnimation.ref} className={logoAnimation.className}>
            <div className="flex items-center gap-1">
              <img 
                src={craftedLogo} 
                alt="Crafted logo" 
                className="w-8 h-8 sm:w-8 sm:h-8"
              />
              <span className="text-lg sm:text-xl crafted-brand">Crafted</span>
            </div>
          </div>
          
          <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
            <div className="hidden sm:flex items-center gap-2 sm:gap-3">
              <Button 
                variant="outline" 
                onClick={onJoinWaitlist}
                size="sm"
                className="text-xs sm:text-sm px-3 sm:px-4"
              >
                Get Your Free Guide
              </Button>
              <Button 
                asChild
                size="sm"
                className="text-xs sm:text-sm px-3 sm:px-4"
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
    </header>
  );
};