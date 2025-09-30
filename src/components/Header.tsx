import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import quillLogo from "@/assets/quill-logo-256x256.png";

export const Header = () => {
  const logoAnimation = useScrollAnimation({ delay: 50 });
  const buttonsAnimation = useScrollAnimation({ delay: 150 });

  return (
    <header className="hidden sm:block w-full bg-white backdrop-blur sticky top-0 z-50 border-b border-foreground/5">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-3 sm:py-4">
        <div className="flex items-center justify-center sm:justify-between">
          <div ref={logoAnimation.ref} className={logoAnimation.className}>
            <div className="flex items-center gap-1">
              <img 
                src={quillLogo} 
                alt="Quill HK logo" 
                className="w-8 h-8 sm:w-8 sm:h-8"
              />
              <span className="text-lg sm:text-xl" style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 500, letterSpacing: '-0.01em', color: 'black' }}>Quill HK</span>
            </div>
          </div>
          
          <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
            <div className="hidden sm:flex items-center gap-2 sm:gap-3">
              <Button 
                asChild
                size="sm"
                className="text-xs sm:text-sm px-3 sm:px-4"
              >
                <a 
                  href="https://calendly.com/pedrodias-quillhk/15min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Let's talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};