import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import dittoLogo from "@/assets/ditto logo.webp";
import marsshotLogo from "@/assets/marsshot.png";
import n8nLogo from "@/assets/n8n logo.png";
import equalFoodLogo from "@/assets/perfil_equal_food-01-removebg-preview_1000x1000.webp";
import wwfLogo from "@/assets/wwf-logo.png";

interface Brand {
  name: string;
  logoSrc: string;
}

interface LogosMarqueeProps {
  brands?: Brand[];
}

const defaultBrands: Brand[] = [
  { 
    name: "Ditto", 
    logoSrc: dittoLogo 
  },
  { 
    name: "Marsshot", 
    logoSrc: marsshotLogo 
  },
  { 
    name: "n8n", 
    logoSrc: n8nLogo 
  },
  { 
    name: "Equal Food", 
    logoSrc: equalFoodLogo 
  },
  { 
    name: "WWF", 
    logoSrc: wwfLogo 
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
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative">
        <div className="flex flex-col items-center">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-xs font-light text-center text-muted-foreground mb-3 px-4">
              Brands using our software and 1:1 mentoring
            </h2>
          </div>
          
          <div ref={logosAnimation.ref} className={logosAnimation.className}>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {brands.map((brand, index) => {
              const brandAnimation = useScrollAnimation({ delay: 200 + (index * 100) });
              return (
                <div 
                  key={index}
                  ref={brandAnimation.ref} 
                  className={brandAnimation.className}
                >
                  <div className="flex flex-col items-center text-center min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-background flex items-center justify-center overflow-hidden mb-1">
                      <img 
                        src={brand.logoSrc} 
                        alt={`${brand.name} logo`}
                        className="w-5 h-5 sm:w-7 sm:h-7 object-cover rounded-md scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-xs mb-0 leading-tight">
                      {brand.name}
                    </h3>
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