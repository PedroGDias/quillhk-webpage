import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState, useRef } from "react";

// Import testimonial photos
import arunPhoto from "@/assets/testimonial-photos/arun photo.jpeg";
import carlPhoto from "@/assets/testimonial-photos/Carl Tengberg pic.jpeg";
import chrisPhoto from "@/assets/testimonial-photos/Chris.jpeg";
import finnPhoto from "@/assets/testimonial-photos/Finn photo.jpeg";
import hugoPhoto from "@/assets/testimonial-photos/Hugo MS.png";
import jjPhoto from "@/assets/testimonial-photos/JJ.jpeg";
import joaoPhoto from "@/assets/testimonial-photos/Joao Ferrao photo.jpeg";
import karanPhoto from "@/assets/testimonial-photos/Karan.jpeg";
import laurencePhoto from "@/assets/testimonial-photos/laurence.jpeg";
import lukasPhoto from "@/assets/testimonial-photos/Lukas.jpeg";
import noelPhoto from "@/assets/testimonial-photos/Noel.jpeg";
import polPhoto from "@/assets/testimonial-photos/Pol Bea photo.jpeg";
import ritaPhoto from "@/assets/testimonial-photos/Rita Gomes photo.jpeg";
import woodyPhoto from "@/assets/testimonial-photos/Woody.jpeg";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
  specialFont?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Pedro impressed me with his logical and structured way of working (...) identifying opportunities and potential improvements (...) reliable, detail-oriented, and genuinely invested in creating long-term value.",
    author: "Lukas Friedemann",
    role: "Founder and Chief of Growth and Product",
    company: "The Equal Food Co.",
    image: lukasPhoto,
    linkedin: "https://www.linkedin.com/in/lukas-friedemann-6a050660/"
  },
  {
    quote:
      "Pedro is an incredibly thorough, diligent and hardworking professional with excellent project management skills (...) high curiosity and capable of zooming in and out with great detail and attention.",
    author: "Chris Prescott",
    role: "Founder and CEO",
    company: "Stealth Social AI Startup",
    image: chrisPhoto,
    linkedin: "https://www.linkedin.com/in/chris-prescott/"
  },
  {
    quote:
      "For WWF Portugal Pedro developed and implemented a system that streamlined performance tracking and operational reporting (...) automated donor receipts from Salesforce (...) His work had a direct impact on productivity and efficiency.",
    author: "Rita Gomes",
    role: "Head of Individual Giving",
    company: "WWF Portugal",
    image: ritaPhoto,
    linkedin: "https://www.linkedin.com/in/ritagomespim/"
  },
  {
    quote:
      "Pedro took the lead in defining requirements and context engineering on an LLM-heavy project (...) combined strong technical insight with excellent human management skills (...) consistently delivered high-quality results.",
    author: "Laurence Jennings",
    role: "Data Scientist, Machine Learning Engineer",
    company: "Independent",
    image: laurencePhoto,
    linkedin: "https://www.linkedin.com/in/jenningslaurence/"
  },
  {
    quote:
      "Pedro led the development of our MVP with full autonomy and excellent deliverables (...) clients are happy, the product delivers and we've had zero product issues.",
    author: "João Ferrão dos Santos",
    role: "Growth Mentor for early-stage founders",
    company: "Premium LinkedIn Coach",
    image: joaoPhoto,
    linkedin: "https://www.linkedin.com/in/joao-ferrao-dos-santos/"
  },
  {
    quote:
      "Pedro consistently demonstrated strong focus and a genuine commitment to quality (...) attention to detail, proactive mindset, and collaborative spirit made him an invaluable team member.",
    author: "Hugo de Sousa",
    role: "Founder and CEO",
    company: "Mars Shot",
    image: hugoPhoto,
    linkedin: "https://www.linkedin.com/in/hugocsousa/"
  },
  {
    quote:
      "At foodpanda Hong Kong Pedro took on the hardest, most complex problems, broke them down systematically, and delivered scalable solutions (...) leadership and problem-solving made a material difference to what we accomplished.",
    author: "Arun Makhija",
    role: "Building. Previously C-level at foodpanda",
    company: "ex-Delivery Hero",
    image: arunPhoto,
    linkedin: "https://www.linkedin.com/in/arun-makhija-b4417925/"
  },
  {
    quote:
      "Pedro combines the analytical mind of an engineer with emotional intelligence and leadership skills (...) at foodora Norway he built operations that quickly became the global benchmark at Delivery Hero.",
    author: "Carl Tengberg",
    role: "Co-founder at Skye", 
    company: "Co-owner at Shore",
    image: carlPhoto,
    linkedin: "https://www.linkedin.com/in/carl-tengberg-326a1027/",
    specialFont: true
  },
  {
    quote:
      "Pedro truly transformed our Hong Kong operations (...) earned immense respect from his peers (...) the very first Ops Director in our region to lead multiple crucial teams with autonomy.",
    author: "JJ Velaz",
    role: "Product at Nash",
    company: "Founder at Kosmo",
    image: jjPhoto,
    linkedin: "https://www.linkedin.com/in/jj-velaz-046a7151/"
  },
  {
    quote:
      "Pedro's strength in problem-solving was especially evident as the company went through growth stages (...) not only an expert in operations but also a leader who motivates people to rise to the challenge.",
    author: "Noel Lau",
    role: "Expert in Brand Communication and Crisis Management",
    company: "Market Leadership",
    image: noelPhoto,
    linkedin: "https://www.linkedin.com/in/noel-l-2442128b/"
  },
  {
    quote:
      "Pedro is a thoughtful and kind leader (...) quick to see the heart of a problem and works hard until it is solved (...) makes a team better just by being part of it.",
    author: "Finn Szczęsny",
    role: "Consultant",
    company: "McKinsey",
    image: finnPhoto,
    linkedin: "https://www.linkedin.com/in/finn-szczesny-79ba2254/"
  },
  {
    quote:
      "At Foodpanda Hong Kong Pedro actively engaged with the team to understand processes and solve problems directly (...) under his leadership we excelled in cost optimization and enhancing customer experience.",
    author: "Karan Khanna",
    role: "Fraud Strategy Manager",
    company: "Tamara",
    image: karanPhoto,
    linkedin: "https://www.linkedin.com/in/khanna-karan/"
  },
  {
    quote:
      "At foodpanda Hong Kong Pedro helped turn a struggling business into the undisputed market leader (...) built the highest performing team I've had the privilege to be a part of (...) results-driven professional who inspires his team to deliver excellence.",
    author: "Pol Beà Navarro",
    role: "Head of Rider Quality (APAC, EU & Turkey)",
    company: "Delivery Hero",
    image: polPhoto,
    linkedin: "https://www.linkedin.com/in/polbeanavarro/"
  }
];

export const Testimonials = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const testimonialsAnimation = useScrollAnimation({ delay: 250 });
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  // Duplicate testimonials many times for truly seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];
  
  // Split testimonials for 2 rows on mobile - first half and second half scrolling opposite directions
  const firstHalfTestimonials = [...testimonials.slice(0, Math.ceil(testimonials.length / 2)), ...testimonials.slice(0, Math.ceil(testimonials.length / 2)), ...testimonials.slice(0, Math.ceil(testimonials.length / 2))];
  const secondHalfTestimonials = [...testimonials.slice(Math.ceil(testimonials.length / 2)), ...testimonials.slice(Math.ceil(testimonials.length / 2)), ...testimonials.slice(Math.ceil(testimonials.length / 2))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(index));
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px 0px -50%',
        threshold: 0.1
      }
    );

    const cards = carouselRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [duplicatedTestimonials]);

  return (
    <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center py-4">
      {/* Subtle animated geometric shapes - smaller and at edges on mobile */}
      <div className="absolute top-20 right-1 sm:right-12 w-12 h-12 sm:w-40 sm:h-40 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '16s' }}></div>
      <div className="absolute bottom-4 left-1 sm:bottom-24 sm:left-16 w-10 h-10 sm:w-28 sm:h-28 border-2 border-primary/20 rounded-lg rotate-45 animate-slow-spin" style={{ animationDuration: '22s' }}></div>
      
      <div className="container mx-auto sm:px-8 lg:px-16 relative">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-4 lg:mb-8 font-ultra-thick text-center px-4 sm:px-0">
              Voices from{" "}
              <span className="text-gradient">clients and peers</span>
            </h2>
          </div>
          
          <div ref={testimonialsAnimation.ref} className={`${testimonialsAnimation.className} w-full`}>
            {/* Mobile: 2 Rows of Carousel with half-height cards */}
            <div className="sm:hidden pb-16 pt-2 -mx-4 sm:mx-0">
              {/* First Row - scrolling right */}
              <div 
                ref={carouselRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div 
                  className={`flex gap-3 ${
                    isHovered ? 'pause' : 'animate-scroll-mobile-fast'
                  }`}
                  style={{ minWidth: 'max-content', paddingLeft: '0' }}
                >
                  {firstHalfTestimonials.map((testimonial, index) => {
                    return (
                      <div 
                        key={`mobile-row1-${testimonial.author}-${index}`}
                        data-index={index}
                      >
                        <div className="testimonial-card flex-shrink-0 w-64 h-44 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg flex flex-col">
                          <div className="flex-1 flex flex-col justify-center">
                            <blockquote className="text-[10px] text-foreground italic leading-snug mb-2 line-clamp-4">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 flex-shrink-0">
                              <img 
                                src={testimonial.image} 
                                alt={`${testimonial.author} photo`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="space-y-0 min-w-0">
                              <h3 className="font-bold text-foreground text-[11px] truncate">
                                {testimonial.author}
                              </h3>
                              <p className="text-[9px] text-muted-foreground leading-tight truncate">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second Row - scrolling left (reverse) */}
              <div 
                ref={carouselRef2}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-6 -mt-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div 
                  className={`flex flex-row-reverse gap-3 ${
                    isHovered ? 'pause' : 'animate-scroll-mobile-fast'
                  }`}
                  style={{ minWidth: 'max-content', paddingRight: '0' }}
                >
                  {secondHalfTestimonials.map((testimonial, index) => {
                    return (
                      <div 
                        key={`mobile-row2-${testimonial.author}-${index}`}
                        data-index={index + firstHalfTestimonials.length}
                      >
                        <div className="testimonial-card flex-shrink-0 w-64 h-44 bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg flex flex-col">
                          <div className="flex-1 flex flex-col justify-center">
                            <blockquote className="text-[10px] text-foreground italic leading-snug mb-2 line-clamp-4">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 flex-shrink-0">
                              <img 
                                src={testimonial.image} 
                                alt={`${testimonial.author} photo`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="space-y-0 min-w-0">
                              <h3 className="font-bold text-foreground text-[11px] truncate">
                                {testimonial.author}
                              </h3>
                              <p className="text-[9px] text-muted-foreground leading-tight truncate">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Desktop: Moving carousel (unchanged) */}
            <div 
              ref={carouselRef}
              className="hidden sm:block overflow-x-auto overflow-y-hidden max-w-6xl mx-auto scrollbar-hide h-[340px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                className={`flex gap-8 ${
                  isHovered ? 'pause' : 'animate-scroll-fast'
                }`}
                style={{ minWidth: 'max-content' }}
              >
                {duplicatedTestimonials.map((testimonial, index) => {
                  const testimonialAnimation = useScrollAnimation({ delay: 200 + (index * 100) });
                  return (
                    <div 
                      key={`desktop-${testimonial.author}-${index}`}
                      ref={testimonialAnimation.ref} 
                      className={testimonialAnimation.className}
                      data-index={index}
                    >
                      <div className="testimonial-card flex-shrink-0 w-96 h-80 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 pb-10 shadow-lg flex flex-col">
                        <div className="flex-1 flex flex-col justify-center text-center">
                          <blockquote className="text-sm text-foreground italic leading-relaxed mb-6">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                        <div className="flex items-end gap-4 text-left">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={`${testimonial.author} photo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-0">
                            <h3 className="font-bold text-foreground text-base">
                              {testimonial.author}
                            </h3>
                            <p className="text-[12px] text-muted-foreground leading-tight">
                              {testimonial.role}
                            </p>
                            <p className="text-[12px] text-muted-foreground leading-tight">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};