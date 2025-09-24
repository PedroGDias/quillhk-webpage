import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import sybillLogo from "@/assets/sybill-logo.jpg";
import yulifeLogo from "@/assets/yulife-logo.webp";
import maisaLogo from "@/assets/maisa logo.avif";
import dataScicoLogo from "@/assets/Data Scico Logo.png";

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
  { 
    name: "Lauren Berkemeyer", 
    role: "CMO", 
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
];

export const PersonalBrands = ({ brands = defaultBrands }: PersonalBrandsProps) => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const logosAnimation = useScrollAnimation({ delay: 250 });

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle corner gradient bloom */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="flex flex-col items-center">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-8 font-ultra-thick text-center">
              Personal brands using our <span className="text-gradient">software and 1:1 mentoring</span>
            </h2>
          </div>
          
          <div ref={logosAnimation.ref} className={logosAnimation.className}>
            <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {brands.map((brand, index) => {
              const brandAnimation = useScrollAnimation({ delay: 200 + (index * 100) });
              return (
                <div 
                  key={index}
                  ref={brandAnimation.ref} 
                  className={brandAnimation.className}
                >
                  <div className="flex flex-col items-center text-center min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-background flex items-center justify-center overflow-hidden mb-1">
                      <img 
                        src={brand.logoSrc} 
                        alt={`${brand.company} logo`}
                        className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 object-cover rounded-md scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-xs lg:text-sm mb-0 leading-tight">
                      {brand.name}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs text-muted-foreground leading-tight">
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
