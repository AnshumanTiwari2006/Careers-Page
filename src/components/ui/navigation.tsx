import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-card border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">S</span>
        </div>
        <span className="text-xl font-bold text-foreground">SYNAPTX</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Industries</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">AI for Good</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Perspectives</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a>
      </div>
      
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
        Contact Us
      </Button>
    </nav>
  );
};

export default Navigation;