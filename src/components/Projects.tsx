import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import azureLogo from "@/assets/technologies/azure.jpg";
import excelLogo from "@/assets/technologies/Excel-Icon-PNG-HD-Isolated.png";
import n8nLogo from "@/assets/technologies/n8n logo.png";
import whatsappLogo from "@/assets/technologies/WhatsApp.svg.webp";
import pythonLogo from "@/assets/technologies/Python-logo-notext.svg.png";
import foundryLogo from "@/assets/technologies/foundry.png";
import openaiLogo from "@/assets/technologies/openai.svg";
import pdfLogo from "@/assets/technologies/pdf logo.jpg";
import containerAppLogo from "@/assets/technologies/container app logo.png";
import atfinancasLogo from "@/assets/technologies/atfinancas_logo.jpeg";
import functionAppLogo from "@/assets/technologies/azure-function.png";
import driveLogo from "@/assets/technologies/google-drive-logo.webp";
import streamlitLogo from "@/assets/technologies/streamlit logo.png";
import salesforceLogo from "@/assets/technologies/Salesforce.com_logo.svg.png";
import claudeLogo from "@/assets/technologies/Claude_AI_symbol.svg.png";
import linkedinLogo from "@/assets/technologies/linkedin-logo-icon_1273375-1174.jpg";
import supabaseLogo from "@/assets/technologies/supabase-icon.svg";
import appScriptLogo from "@/assets/technologies/google appscript logo.png";
import twoHrLogo from "@/assets/technologies/2hrlearning.webp";
import djangoLogo from "@/assets/technologies/os_django.png";
import langgraphLogo from "@/assets/technologies/langgraph-color.png";
import powerAutomateLogo from "@/assets/technologies/Microsoft_Power_Automate.svg.png";
import cursorLogo from "@/assets/technologies/cursor.png";

interface Project {
  industry: string;
  title: string;
  description: string;
  tags: string[];
}

// Map technology names to their logos
const techLogos: Record<string, string> = {
  Azure: azureLogo,
  Excel: excelLogo,
  n8n: n8nLogo,
  WhatsApp: whatsappLogo,
  Python: pythonLogo,
  Foundry: foundryLogo,
  OpenAI: openaiLogo,
  PDF: pdfLogo,
  ContainerApp: containerAppLogo,
  ATFinancas: atfinancasLogo,
  FunctionApp: functionAppLogo,
  Drive: driveLogo,
  Streamlit: streamlitLogo,
  Salesforce: salesforceLogo,
  Claude: claudeLogo,
  LinkedIn: linkedinLogo,
  Supabase: supabaseLogo,
  AppScript: appScriptLogo,
  "2hrLearning": twoHrLogo,
  Django: djangoLogo,
  LangGraph: langgraphLogo,
  PowerAutomate: powerAutomateLogo,
  Cursor: cursorLogo,
};

const projects: Project[] = [
  {
    industry: "Healthcare",
    title: "Clinical exams OCR system",
    description: "Complete OCR solution with Azure backend, image-to-text pipeline, and document management frontend.",
    tags: ["Azure", "Foundry", "OpenAI", "PDF", "PowerAutomate"],
  },
  {
    industry: "Finance",
    title: "Finance invoice reconciliation",
    description: "Tax authority integration that compares invoice data, identifies discrepancies and generates reports.",
    tags: ["Azure", "Excel", "ATFinancas", "FunctionApp", "Python"],
  },
  {
    industry: "Food Tech",
    title: "Sustainable food delivery automations",
    description: "WhatsApp-n8n self-hosted automation system with ordering reminders, group mass-messaging with Streamlit UI and ERP data integration workflows.",
    tags: ["WhatsApp", "n8n", "Drive", "Streamlit"],
  },
  {
    industry: "Non-profit",
    title: "NGO donation receipts",
    description: "Automated donation receipt system generating personalized yearly reports through Salesforce and workflow automation.",
    tags: ["Salesforce", "n8n", "PDF", "AppScript"],
  },
  {
    industry: "Marketing",
    title: "Content creator agent",
    description: "AI-powered LinkedIn content writer accessible through WhatsApp, featuring automated post generation through voice input.",
    tags: ["Claude", "n8n", "WhatsApp", "LinkedIn", "Supabase"],
  },
  {
    industry: "AI/Social/EdTech",
    title: "AI Product Consulting",
    description: "Product management across AI-powered platforms - from a Social AI app to an EdTech solution with real-time learning insights and personalized coaching.",
    tags: ["OpenAI", "Claude", "2hrLearning", "Django", "LangGraph"],
  },
];

const ProjectCard = ({ project, index, noAnimation = false }: { project: Project; index: number; noAnimation?: boolean }) => {
  const projectAnimation = useScrollAnimation({ delay: 350 + (index * 100) });
  
  return (
    <div ref={!noAnimation ? projectAnimation.ref : undefined} className={!noAnimation ? projectAnimation.className : ''}>
      <div className="group h-full flex flex-col bg-gradient-to-br from-background to-muted/30 rounded-xl p-4 sm:p-5 border-2 border-muted sm:hover:border-primary/30 transition-all duration-300 sm:hover:shadow-lg sm:hover:-translate-y-1">
        <div className="mb-2">
          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
            {project.industry}
          </span>
        </div>
        
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-xs sm:text-sm leading-snug mb-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, tagIndex) => {
            const logo = techLogos[tag];
            if (logo) {
              return (
                <Tooltip key={tagIndex}>
                  <TooltipTrigger asChild>
                    <div 
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-muted flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    >
                      <img 
                        src={logo} 
                        alt={tag}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tag}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }
            return (
              <span 
                key={tagIndex}
                className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground font-medium"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const titleAnimation = useScrollAnimation({ delay: 150 });
  const subtitleAnimation = useScrollAnimation({ delay: 250 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <TooltipProvider>
      <section className="h-full w-full relative overflow-y-auto flex flex-col justify-center py-4 sm:p-6 lg:p-8">
        {/* Subtle animated geometric shapes - smaller and at edges on mobile */}
        <div className="absolute top-4 right-1 sm:top-1/3 sm:right-16 w-10 h-10 sm:w-32 sm:h-32 border-2 border-primary/20 rounded-full animate-slow-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-4 left-1 sm:bottom-1/3 sm:left-20 w-8 h-8 sm:w-24 sm:h-24 border-2 border-primary/20 rounded-lg rotate-12 animate-slow-spin" style={{ animationDuration: '19s' }}></div>
        
        <div className="container mx-auto sm:px-8 lg:px-16 relative">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 w-full max-w-7xl mx-auto px-4 sm:px-0">
            <div ref={titleAnimation.ref} className={titleAnimation.className}>
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3 font-ultra-thick">
                Snapshots of <span className="text-gradient">real solutions</span>
              </h2>
            </div>
            <div ref={subtitleAnimation.ref} className={subtitleAnimation.className}>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-tight">
                Business solutions built on any tech stack, enabled by AI and automation.
              </p>
            </div>
          </div>
          
          {/* Mobile: Carousel */}
          <div className="sm:hidden">
            <div className="relative max-w-sm mx-auto pt-4">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {projects.map((project, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                      <div 
                        className={`transition-all duration-300 ${
                          index === selectedIndex 
                            ? 'scale-100 opacity-100' 
                            : 'scale-95 opacity-50'
                        }`}
                      >
                        <ProjectCard project={project} index={index} noAnimation={true} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center gap-1.5 mt-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};