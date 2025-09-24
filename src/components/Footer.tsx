import craftedLogo from "@/assets/crafted-logo.webp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-16 py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center gap-2">
            <img 
              src={craftedLogo} 
              alt="Crafted logo" 
              className="w-6 h-6"
            />
            <span className="font-bold text-foreground">Crafted</span>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-md">
            Transform your LinkedIn presence with AI-powered content that engages your audience and drives business results.
          </p>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Crafted. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};