import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import StatsSection from "@/components/ui/stats-section";
import ApproachSection from "@/components/ui/approach-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ApproachSection />
    </div>
  );
};

export default Index;
