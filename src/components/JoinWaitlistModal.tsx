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
import { Loader2, CheckCircle } from "lucide-react";

interface JoinWaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const JoinWaitlistModal = ({ open, onOpenChange }: JoinWaitlistModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);

    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setIsSuccess(true);
        toast({
          title: "Welcome to the waitlist!",
          description: "Check your inbox for your LinkedIn guide.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setIsLoading(false);
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
                Join the waitlist — we'll instantly email you our PDF guide: 
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            
            <div className="space-y-2">
              <DialogTitle>Check your inbox!</DialogTitle>
              <DialogDescription>
                Your guide is on the way. You should receive it within the next few minutes.
              </DialogDescription>
            </div>
            
            <div className="space-y-3">
              <Button asChild className="w-full">
                <a 
                  href="/guides/crafted-5-principles.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Open Guide
                </a>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
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