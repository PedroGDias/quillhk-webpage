import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import quillLogo from "@/assets/quill-logo-256x256.png";
import { Mail, MessageCircle } from "lucide-react";

export const FinalCta = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });
  const buttonsAnimation = useScrollAnimation({ delay: 350 });
  const footerAnimation = useScrollAnimation({ delay: 450 });

  const currentYear = new Date().getFullYear();

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center pt-4 sm:pt-4">
      {/* Subtle animated geometric shapes */}
      <div className="absolute top-1/3 right-1 sm:right-20 w-10 h-10 sm:w-28 sm:h-28 border-2 border-primary/20 rounded-lg rotate-45 animate-slow-float" style={{ animationDuration: '18s' }}></div>
      <div className="absolute bottom-1/4 left-1 sm:left-24 w-12 h-12 sm:w-36 sm:h-36 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '16s' }}></div>
      
      {/* CTA Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto sm:px-8 lg:px-16 relative">
          <div className="text-center space-y-6 sm:space-y-8 max-w-7xl mx-auto px-4 sm:px-0">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-ultra-thick">
                What's the problem you're{" "}
                <br className="hidden md:block" />
                <span className="text-gradient">
                  trying to solve?
                </span>
              </h2>
            </div>
            
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's explore how we can transform your operations through expert problem-solving, powered by AI and intelligent automation.
              </p>
            </div>
            
            <div ref={buttonsAnimation.ref} className={buttonsAnimation.className}>
              <div className="flex flex-col items-center gap-4">
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
                
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:pedro@quill-hk.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Email us"
                    className="hover:opacity-80 transition-opacity"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                      animation: 'subtle-rotate 0.8s ease-in-out infinite'
                    }}
                  >
                    <Mail className="w-6 h-6 text-primary" strokeWidth={2} />
                  </a>
                  
                  <a 
                    href="https://wa.me/85269369092" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="WhatsApp us"
                    className="hover:opacity-80 transition-opacity"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                      animation: 'subtle-rotate-reverse 0.8s ease-in-out infinite'
                    }}
                  >
                    <MessageCircle className="w-6 h-6 text-primary" strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer ref={footerAnimation.ref} className={`${footerAnimation.className} mt-auto`}>
        <div className="border-t border-foreground/5">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-2 sm:py-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
              <div className="flex items-center gap-1">
                <img 
                  src={quillLogo} 
                  alt="Quill HK logo" 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <div className="text-[10px] sm:text-xs text-muted-foreground">
                  {currentYear} Quill HK. All rights reserved.
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <a 
                  href="/privacy-policy" 
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
                  style={{ color: 'inherit' }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-of-service" 
                  className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
                  style={{ color: 'inherit' }}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};