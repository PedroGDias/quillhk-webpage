import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import craftedLogo from "@/assets/crafted_logo_highres_blue_v2.png";

interface FinalCtaProps {
  onJoinWaitlist: () => void;
}

export const FinalCta = ({ onJoinWaitlist }: FinalCtaProps) => {
  const titleAnimation = useScrollAnimation();
  const subtitleAnimation = useScrollAnimation({ delay: 200 });
  const buttonsAnimation = useScrollAnimation({ delay: 400 });
  const footerAnimation = useScrollAnimation({ delay: 600 });

  const currentYear = new Date().getFullYear();

  return (
    <section className="h-screen flex flex-col relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* CTA Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-8 lg:px-16 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-ultra-thick">
                Ready to{" "}
                <span className="text-gradient">
                  transform your LinkedIn
                </span>{" "}
                presence?
              </h2>
            </div>
            
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join professionals using Crafted to create engaging LinkedIn content<br />that drives results.
              </p>
            </div>
            
            <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  onClick={onJoinWaitlist}
                  className="text-base font-semibold px-6 flex-1 max-w-48"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="text-base font-semibold px-6 flex-1 max-w-48"
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
          <div className="container mx-auto px-8 lg:px-16 py-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex items-center gap-1">
                <img 
                  src={craftedLogo} 
                  alt="Crafted logo" 
                  className="w-8 h-8"
                />
                <span className="crafted-brand text-sm">Crafted</span>
              </div>
              
              <p className="text-xs text-muted-foreground max-w-sm">
                Transform your LinkedIn presence with AI-powered content that engages your audience and drives business results.
              </p>
              
              <div className="text-xs text-muted-foreground">
                © {currentYear} Crafted. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};