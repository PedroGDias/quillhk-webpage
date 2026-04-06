import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FloatingLinkedInLogos } from "@/components/FloatingLinkedInLogos";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center bg-background">
      {/* Hero-style background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <FloatingLinkedInLogos />

      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-ultra-thick text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/80 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
