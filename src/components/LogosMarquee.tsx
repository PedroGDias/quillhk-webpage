import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface LogoItem {
  logoSrc: string;
  caption: string;
}

interface LogosMarqueeProps {
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  { logoSrc: "/placeholder.svg", caption: "Co-Founder, Sybill" },
  { logoSrc: "/placeholder.svg", caption: "Founding PM, TechCorp" },
  { logoSrc: "/placeholder.svg", caption: "VP of Sales, StartupXYZ" },
  { logoSrc: "/placeholder.svg", caption: "CEO, InnovateNow" },
  { logoSrc: "/placeholder.svg", caption: "Director, GrowthLab" },
];

export const LogosMarquee = ({ logos = defaultLogos }: LogosMarqueeProps) => {
  const animationRef = useScrollAnimation();

  return (
    <section ref={animationRef} className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
          Personal brands using our software and 1:1 mentoring
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={logo.logoSrc} 
                  alt={`${logo.caption} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 text-center">
                {logo.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};