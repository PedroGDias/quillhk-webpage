import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import sybillLogo from "@/assets/sybill-logo.jpg";
import yulifeLogo from "@/assets/yulife-logo.webp";
import maisaLogo from "@/assets/maisa logo.avif";
import dataScicoLogo from "@/assets/Data Scico Logo.png";
import marriottHarrisonLogo from "@/assets/marriott_harrison_logo.jpeg";
import { FloatingLinkedInLogos } from "@/components/FloatingLinkedInLogos";

interface PersonBrand {
  name: string;
  role: string;
  company: string;
  logoSrc: string;
}

interface PersonalBrandsProps {
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
    name: "Soumyarka Mondal", 
    role: "CTO", 
    company: "Sybill", 
    logoSrc: sybillLogo 
  },
  { 
    name: "Dany Jradi", 
    role: "Head of Product", 
    company: "Sybill", 
    logoSrc: sybillLogo 
  },
  { 
    name: "Lewis Stock", 
    role: "VP of Sales", 
    company: "YuLife", 
    logoSrc: yulifeLogo 
  },
  { 
    name: "Lauren Berkemeyer", 
    role: "CMO", 
    company: "YuLife", 
    logoSrc: yulifeLogo 
  },
  { 
    name: "Gabriel Churchill", 
    role: "Product Lead", 
    company: "YuLife", 
    logoSrc: yulifeLogo 
  },
  { 
    name: "Jochen Doppelhammer", 
    role: "COO", 
    company: "Maisa AI", 
    logoSrc: maisaLogo 
  },
  { 
    name: "Gur Aminadav", 
    role: "CEO", 
    company: "Data Scico", 
    logoSrc: dataScicoLogo 
  },
  { 
    name: "Genady Trifon", 
    role: "CTO", 
    company: "Data Scico", 
    logoSrc: dataScicoLogo 
  },
  { 
    name: "Dianne Skurray", 
    role: "CMO", 
    company: "Marriot Harrison", 
    logoSrc: marriottHarrisonLogo 
  },
];

export const PersonalBrands = ({ brands = defaultBrands }: PersonalBrandsProps) => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const logosAnimation = useScrollAnimation({ delay: 250 });
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate brands many times for truly seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center p-4">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-8 font-ultra-thick text-center">
              Personal brands using our <span className="text-gradient">software and 1:1 mentoring</span>
            </h2>
          </div>
          
          <div ref={logosAnimation.ref} className={`${logosAnimation.className} mt-6 sm:mt-0`}>
            {/* Mobile: Carousel with 3 visible items */}
            <div 
              className="sm:hidden overflow-x-auto max-w-sm mx-auto scrollbar-hide"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                className={`flex gap-4 ${
                  isHovered ? 'pause' : 'animate-scroll-mobile'
                }`}
                style={{ minWidth: 'max-content' }}
              >
                {duplicatedBrands.map((brand, index) => (
                  <div 
                    key={`mobile-${brand.name}-${index}`}
                    className="flex-shrink-0 flex flex-col items-center text-center min-w-0 w-24"
                  >
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center overflow-hidden mb-1">
                      <img 
                        src={brand.logoSrc} 
                        alt={`${brand.company} logo`}
                        className="w-7 h-7 object-cover rounded-md scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-xs mb-0 leading-tight">
                      {brand.name}
                    </h3>
                    <p className="text-[9px] text-muted-foreground leading-tight">
                      {brand.role}, {brand.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Moving carousel */}
            <div 
              className="hidden sm:block overflow-hidden max-w-6xl mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className={`flex gap-6 md:gap-8 lg:gap-12 ${
                  isHovered ? 'pause' : 'animate-scroll'
                }`}
              >
                {duplicatedBrands.map((brand, index) => (
                  <div 
                    key={`desktop-${brand.name}-${index}`}
                    className="flex-shrink-0 flex flex-col items-center text-center min-w-0"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-background flex items-center justify-center overflow-hidden mb-1">
                      <img 
                        src={brand.logoSrc} 
                        alt={`${brand.company} logo`}
                        className="w-9 h-9 lg:w-11 lg:h-11 object-cover rounded-md scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm lg:text-sm mb-0 leading-tight">
                      {brand.name}
                    </h3>
                    <p className="text-[10px] lg:text-xs text-muted-foreground leading-tight">
                      {brand.role}, {brand.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
