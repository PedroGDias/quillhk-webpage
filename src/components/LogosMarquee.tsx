import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import sybillLogo from "@/assets/sybill-logo.jpg";
import yulifeLogo from "@/assets/yulife-logo.webp";

interface PersonBrand {
  name: string;
  role: string;
  company: string;
  logoSrc: string;
}

interface LogosMarqueeProps {
  brands?: PersonBrand[];
}

const defaultBrands: PersonBrand[] = [
  { 
    name: "Nishit Asnani", 
    role: "Co-Founder", 
    company: "Sybill", 
    logoSrc: sybillLogo 
  },
  { 
    name: "Dany Jradi", 
    role: "Founding PM", 
    company: "Sybill", 
    logoSrc: sybillLogo 
  },
  { 
    name: "Lewis Stock", 
    role: "VP of Sales", 
    company: "YuLife", 
    logoSrc: yulifeLogo 
  },
];

export const LogosMarquee = ({ brands = defaultBrands }: LogosMarqueeProps) => {
  const titleAnimation = useScrollAnimation();

  return (
    <section className="py-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-32">
        <div className="flex flex-col items-center">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-xl sm:text-2xl font-semibold text-center text-foreground mb-2">
              Personal brands using our software and 1:1 mentoring
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-8 max-w-4xl mx-auto">
            {brands.map((brand, index) => {
              const brandAnimation = useScrollAnimation({ delay: 200 + (index * 100) });
              return (
                <div 
                  key={index}
                  ref={brandAnimation.ref} 
                  className={brandAnimation.className}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center overflow-hidden mb-1">
                      <img 
                        src={brand.logoSrc} 
                        alt={`${brand.company} logo`}
                        className="w-12 h-12 object-contain rounded-md"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {brand.role}, {brand.company}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};