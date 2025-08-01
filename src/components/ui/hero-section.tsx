import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-accent/30 to-background py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Delivering Real{" "}
            <span className="text-primary">Business Impact</span>{" "}
            Through AI
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            Bridge the AI value gap with solutions that deliver measurable business impact, not just technology.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-foreground">
                <span className="font-semibold">Proven results, not experiments</span> - 78% of companies use AI with no meaningful impact. We're the 22% that works.
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-foreground">
                <span className="font-semibold">Accelerated Revenue Impact</span> - Specialists in Sales & Marketing with consistent 3-6 month payback across business functions
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-foreground">
                <span className="font-semibold">Business-first, not tech-first</span> - every solution tied to your specific challenges and growth objectives
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-foreground">
                <span className="font-semibold">End-to-end certainty</span> - from strategy through implementation with our proven ABOTE methodology
              </p>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full"></div>
              </div>
              <p className="text-muted-foreground text-sm">Delivering Real Business Impact With AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;