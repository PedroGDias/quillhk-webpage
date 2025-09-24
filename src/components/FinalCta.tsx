import { Button } from "@/components/ui/button";

interface FinalCtaProps {
  onJoinWaitlist: () => void;
}

export const FinalCta = ({ onJoinWaitlist }: FinalCtaProps) => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to{" "}
            <span className="text-gradient">
              transform your LinkedIn
            </span>{" "}
            presence?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join professionals using Crafted to create engaging LinkedIn content that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onJoinWaitlist}
              className="text-base font-semibold px-8"
            >
              Get Started Today
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
      </div>
    </section>
  );
};