import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApproachSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-primary font-medium">Our Approach</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Human + Stoic + Nerdy
        </h2>
        
        <div className="text-center mb-16 max-w-4xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground">
            We're confessed AI nerds guided by a dash of <em>Stoic wisdom</em>: focus on what we can control, embrace challenges, keep balance.
          </p>
          <p className="text-lg text-muted-foreground">
            That means practical innovation, responsible deployment, and a healthy dose of humour in every sprint.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-card border border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-20 h-20 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-accent rounded-full"></div>
              </div>
              <CardTitle className="text-2xl font-bold">Human</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                People-first approach in everything we build. We design technology that enhances human capability and drives meaningful business outcomes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-card border border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-20 h-20 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-brand-blue-gray rounded-full"></div>
              </div>
              <CardTitle className="text-2xl font-bold">Stoic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Pragmatic solutions to real challenges. We focus on what we can control, maintain perspective, and deliver consistent results without the hype.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-card border border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-20 h-20 bg-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-brand-brown-medium rounded-full"></div>
              </div>
              <CardTitle className="text-2xl font-bold">Nerdy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Deep technical expertise with passion. Our team obsesses over the details, stays at the cutting edge, and brings rigorous methodology to every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;