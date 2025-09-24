import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const WhatIs = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Crafted builds a <span className="text-gradient">content-first culture</span> in your leadership team.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Crafted delivers the mentoring and software your leadership team needs to build a long-term 
            LinkedIn presence, in just 10 minutes per post.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* What Crafted Is */}
          <Card className="bg-background border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                What Crafted <span className="text-gradient">Is</span>:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "A unique combo of software and 1:1 personalised mentoring.",
                "A WhatsApp content agent that turns ideas into posts.",
                "A 1:1 mentoring program for your growth goals.",
                "The solution for your pipeline and hiring needs."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* What Crafted Is Not */}
          <Card className="bg-background border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                What Crafted <span className="text-gradient">Is Not</span>:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "AI ghostwriting that hurts your brand.",
                "An expensive ghostwriter that you have to manage.",
                "Generic LinkedIn coaching you can find online.",
                "Just another AI tool without strategy or direction."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};