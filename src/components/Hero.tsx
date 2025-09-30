import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import quillLogo from "@/assets/quill-logo-256x256.png";

export const Hero = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });
  const buttonsAnimation = useScrollAnimation({ delay: 350 });
  const mobileLogoAnimation = useScrollAnimation({ delay: 450 });

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col p-4 bg-white">
      {/* Subtle animated geometric shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-12 animate-slow-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-16 w-24 h-24 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg -rotate-12 animate-slow-float" style={{ animationDuration: '18s' }}></div>
      
      {/* Main Content - Centered and takes up available space */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight" style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}>
          Making <span className="text-gradient">process automation</span>{" "}
          part of your <span className="text-gradient">company DNA</span>
        </h1>
            </div>
            
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-tight sm:leading-relaxed max-w-3xl mx-auto">
                We build lean, reliable automations and tools that cut busywork and unlock growth - while empowering your team to fully own and evolve them.
              </p>
            </div>
            
            <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="text-sm sm:text-base font-semibold px-8 py-3"
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
      </div>

      {/* Mobile Logo at bottom - now part of the flex layout */}
      <div ref={mobileLogoAnimation.ref} className={`${mobileLogoAnimation.className} sm:hidden text-center py-2 z-10`}>
        <div className="inline-flex items-center gap-0.5">
          <img 
            src={quillLogo} 
            alt="Quill HK logo" 
            className="w-8 h-8"
          />
          <span className="text-[4px] quillhk-brand">Quill HK</span>
        </div>
      </div>
    </section>
  );
};