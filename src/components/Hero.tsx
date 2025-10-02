import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import lovableLogo from "@/assets/technologies/with name/lovable_logoblack_ff3300.png";
import cursorLogo from "@/assets/technologies/with name/Cursor-Ai-Logo-PNG-SVG-Vector_tighttransparent_ff3300.png";
import openaiLogo from "@/assets/technologies/with name/OpenAI-Logo-PNG_tighttransparent_fixed_ff3300.png";
import claudeLogo from "@/assets/technologies/with name/Anthropic-Logo.wine_tightcrop_ff3300.png";
import n8nLogo from "@/assets/technologies/with name/n8n-logo-full_cropped_ff3300.png";

export const Hero = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });
  const buttonsAnimation = useScrollAnimation({ delay: 350 });
  const logoAnimation = useScrollAnimation({ delay: 450 });
  
  const techLogos = [lovableLogo, cursorLogo, openaiLogo, claudeLogo, n8nLogo];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentLogoIndex((prev) => (prev + 1) % techLogos.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full w-full relative flex flex-col">
      {/* Subtle animated geometric shapes */}
      <div className="absolute top-1/4 left-1 sm:left-10 w-12 h-12 sm:w-32 sm:h-32 border-2 border-primary/20 rounded-lg rotate-12 animate-slow-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/3 right-1 sm:right-16 w-10 h-10 sm:w-24 sm:h-24 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-1/2 right-1 sm:right-1/4 w-8 h-8 sm:w-16 sm:h-16 border-2 border-primary/20 rounded-lg -rotate-12 animate-slow-float" style={{ animationDuration: '18s' }}></div>
      
      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
          <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
            <div ref={titleAnimation.ref} className={`${titleAnimation.className} mt-24 sm:mt-28 lg:mt-32`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight" style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700 }}>
          Making <span className="text-gradient">process automation</span>{" "}
          part of your <span className="text-gradient">company DNA</span>
        </h1>
            </div>
            
            <div ref={subtitleAnimation.ref} className={`${subtitleAnimation.className} mt-6 sm:mt-8`}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-tight sm:leading-relaxed max-w-3xl mx-auto">
                We build lean, reliable automations and tools that cut busywork and unlock growth - while empowering your team to fully own and evolve them.
              </p>
            </div>
            
            <div ref={buttonsAnimation.ref} className={`${buttonsAnimation.className} mt-6 sm:mt-8 mb-4 sm:mb-6`}>
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
                    Book a call
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Tech Logos Animation */}
            <div ref={logoAnimation.ref} className={`${logoAnimation.className} flex flex-col items-center mt-32 sm:mt-40 lg:mt-48 mb-8`}>
              <div className="text-xs text-muted-foreground mb-1">Powered by</div>
              <div className="relative w-24 h-8 flex items-center justify-center">
                <div className={`${isAnimating ? 'animate-logo-disappear' : 'animate-logo-appear'}`}>
                  <img 
                    src={techLogos[currentLogoIndex]} 
                    alt="Technology logo" 
                    className="h-6 w-auto object-contain opacity-50"
                    style={{ animationDuration: '3s', backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};