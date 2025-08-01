const StatsSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">The AI Value Gap</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              Most mid-market teams are caught in the Technology Trap (stand-alone AI toys) or the Platform Trap (costly end-to-end stacks) – either way, time-to-impact drags and budgets bleed.
            </p>
            <p className="text-lg text-muted-foreground">
              SynaptX closes that value gap with a business-outcome playbook.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-background rounded-xl border-l-4 border-primary">
            <div className="text-6xl font-bold text-foreground mb-4">78%</div>
            <p className="text-muted-foreground">
              of companies use AI but 80% see no EBIT lift
            </p>
          </div>
          
          <div className="text-center p-8 bg-background rounded-xl border-l-4 border-primary">
            <div className="text-6xl font-bold text-foreground mb-4">4x ROI</div>
            <p className="text-muted-foreground">
              expected by mid-market firms, yet they realise only 2.3x
            </p>
          </div>
          
          <div className="text-center p-8 bg-background rounded-xl border-l-4 border-primary">
            <div className="text-6xl font-bold text-foreground mb-4">72%</div>
            <p className="text-muted-foreground">
              plan AI spend in Sales & Marketing this year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;