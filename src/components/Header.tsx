import { Button } from "@/components/ui/button";
import craftedLogo from "@/assets/crafted_logo_highres_blue_v2.png";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export const Header = ({ onJoinWaitlist }: HeaderProps) => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border/40 relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 lg:px-16 py-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img 
              src={craftedLogo} 
              alt="Crafted logo" 
              className="w-8 h-8"
            />
            <span className="text-xl crafted-brand">Crafted</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={onJoinWaitlist}
              className="hidden sm:inline-flex"
            >
              Join Waitlist
            </Button>
            <Button asChild>
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
    </header>
  );
};