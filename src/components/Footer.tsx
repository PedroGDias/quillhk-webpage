import quillLogo from "@/assets/quill-logo-256x256.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-32 py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center gap-2">
            <img 
              src={quillLogo} 
              alt="Quill HK logo" 
              className="w-6 h-6"
            />
            <span className="font-bold text-foreground">Quill HK</span>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-md">
            Transform your LinkedIn presence with AI-powered content that engages your audience and drives business results.
          </p>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Quill HK. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};