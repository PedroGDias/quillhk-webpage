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
  const logosAnimation = useScrollAnimation({ delay: 200 });

  return (
    <section className="py-4 relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 lg:px-16 relative">
        <div className="flex flex-col items-center">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-xs font-light text-center text-muted-foreground mb-2">
              Personal brands using our software and 1:1 mentoring
            </h2>
          </div>
          
          <div ref={logosAnimation.ref} className={logosAnimation.className}>
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
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center overflow-hidden mb-0.5">
                      <img 
                        src={brand.logoSrc} 
                        alt={`${brand.company} logo`}
                        className="w-7 h-7 object-cover rounded-md scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-xs mb-0">
                      {brand.name}
                    </h3>
                    <p className="text-[10px] text-muted-foreground">
                      {brand.role}, {brand.company}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};