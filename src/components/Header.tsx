import { Button } from "@/components/ui/button";
import craftedLogo from "@/assets/crafted-logo.webp";

interface HeaderProps {
  onJoinWaitlist: () => void;
}

export const Header = ({ onJoinWaitlist }: HeaderProps) => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-32 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={craftedLogo} 
              alt="Crafted logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">Crafted</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
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