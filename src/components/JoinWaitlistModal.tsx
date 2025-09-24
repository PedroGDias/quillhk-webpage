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
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Join the waitlist - we'll instantly email you our PDF guide: 
                The 5 Principles for magnetic LinkedIn leadership.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name (optional)</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={!email}
              >
                Join Waitlist
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16" style={{ color: '#157dc8' }} />
            </div>
            
            <div className="space-y-2">
              <DialogTitle>Check your inbox!</DialogTitle>
              <DialogDescription>
                Your guide is on the way.<br />You should receive it within the next few minutes.
              </DialogDescription>
            </div>
            
            <div className="space-y-3">
              <Button asChild>
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