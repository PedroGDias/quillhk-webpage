import quillLogo from "@/assets/quill-logo-256x256.png";

export const FloatingLinkedInLogos = () => {
  return (
    <>
      {/* Subtle moving brand logos - 20% in from edges */}
      <div className="absolute top-20 left-20 w-6 h-6 opacity-10 animate-float" style={{ animationDuration: '8s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-20 w-5 h-5 opacity-8 animate-drift" style={{ animationDuration: '6s', animationDelay: '2s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-20 w-7 h-7 opacity-12 animate-wave" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-20 w-4 h-4 opacity-10 animate-float" style={{ animationDuration: '7s', animationDelay: '3s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute top-32 left-1/5 w-3 h-3 opacity-6 animate-drift" style={{ animationDuration: '9s', animationDelay: '4s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute top-32 right-1/5 w-4 h-4 opacity-8 animate-wave" style={{ animationDuration: '6s', animationDelay: '5s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-1/5 w-5 h-5 opacity-10 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-1/5 w-3 h-3 opacity-6 animate-drift" style={{ animationDuration: '7s', animationDelay: '6s' }}>
        <img src={quillLogo} alt="Quill HK logo" className="w-full h-full" />
      </div>
    </>
  );
};
