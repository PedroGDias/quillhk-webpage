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

interface JoinWaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const JoinWaitlistModal = ({ open, onOpenChange }: JoinWaitlistModalProps) => {
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
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl">Join the Waitlist</DialogTitle>
              <DialogDescription className="text-sm">
                Join our waitlist and get instant access to our LinkedIn Essentials one-pager - 
                the same core teachings our clients are using to get results on LinkedIn.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">Name (optional)</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 text-base" // Prevent zoom on iOS
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 text-base" // Prevent zoom on iOS
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-11 text-base" 
                disabled={!email}
              >
                Join Waitlist
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
                Your guide is on the way.<br />You should receive it within the next few minutes.
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