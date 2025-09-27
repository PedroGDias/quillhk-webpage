import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import quillLogo from "@/assets/quill-logo-256x256.png";
import { FloatingLinkedInLogos } from "@/components/FloatingLinkedInLogos";

interface FinalCtaProps {
  onGetGuide: () => void;
}

export const FinalCta = ({ onGetGuide }: FinalCtaProps) => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });
  const buttonsAnimation = useScrollAnimation({ delay: 350 });
  const footerAnimation = useScrollAnimation({ delay: 450 });

  const currentYear = new Date().getFullYear();

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />
      
      {/* CTA Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
          <div className="text-center space-y-6 sm:space-y-8 max-w-7xl mx-auto">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-ultra-thick">
                Ready to{" "}
                <span className="text-gradient">
                  transform your LinkedIn
                </span>{" "}
                presence?
              </h2>
            </div>
            
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Start with our free LinkedIn guide below to know how top performers and execs are growing on LinkedIn today.
              </p>
            </div>
            
            <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  onClick={onGetGuide}
                  className="text-sm sm:text-base font-semibold px-6 py-3 w-full sm:w-auto"
                >
                  Get LinkedIn Essentials Guide
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="text-sm sm:text-base font-semibold px-6 py-3 w-full sm:w-auto"
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
      </div>

      {/* Footer */}
      <footer ref={footerAnimation.ref} className={footerAnimation.className}>
        <div className="bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-2 sm:py-3">
            <div className="flex items-center justify-center gap-1 text-center">
              <img 
                src={quillLogo} 
                alt="Quill HK logo" 
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <div className="text-[10px] sm:text-xs text-muted-foreground">
                {currentYear} Quill HK. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};