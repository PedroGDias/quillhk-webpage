import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

interface GetGuideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GetGuideModal = ({ open, onOpenChange }: GetGuideModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // INSTANT SUCCESS - Show success immediately
    setIsSuccess(true);

    // Run email sending in background (don't wait for it)
    (async () => {
      try {
        const { supabase } = await import("@/integrations/supabase/client");
        
        await supabase.functions.invoke('join-waitlist', {
          body: {
            name: name.trim() || undefined,
            email: email.trim(),
          },
        });
        
        // Optional: Log success for debugging
        console.log('Email sent successfully in background');
      } catch (error) {
        // Silent fail - user already sees success
        console.error('Background email sending failed:', error);
        // Could optionally show a subtle notification later if needed
      }
    })();
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setIsSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)]">
        {!isSuccess ? (
          <>
            <DialogHeader className="space-y-1">
              <DialogTitle className="text-base sm:text-lg">Get Your LinkedIn Essentials Guide</DialogTitle>
              <DialogDescription className="text-xs">
                Get instant access to our LinkedIn Essentials one-pager and join our waitlist - 
                the same core teachings our clients are using to get results on LinkedIn.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xs">Name (optional)</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-7 text-xs"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-7 text-xs"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-8 text-sm" 
                disabled={!email}
              >
                Get Guide & Join Waitlist
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 sm:space-y-6 py-2 sm:py-4">
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: '#157dc8' }} />
            </div>
            
            <div className="space-y-2">
              <DialogTitle className="text-lg sm:text-xl">Check your inbox!</DialogTitle>
              <DialogDescription className="text-sm">
                Your LinkedIn Essentials guide is on the way.<br />You should receive it within the next few minutes.
              </DialogDescription>
            </div>
            
            <div className="space-y-3">
              <Button asChild className="w-full h-11 text-base">
                <a 
                  href="https://calendly.com/underdogfounders/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
