import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import { useNavigate } from "react-router-dom";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  type: string;
  hidden?: boolean;
}

const jobs: Job[] = [
  { id: 1, title: "Senior AI Engineer", description: "Lead the development of advanced machine learning models.", location: "Karnataka", category: "Engineering", type: "Full-time" },
  { id: 2, title: "Product Manager - AI Platforms", description: "Define product vision and roadmap for our core AI platforms.", location: "Maharashtra", category: "Management", type: "Full-time" },
  { id: 3, title: "AI Research Scientist", description: "Conduct research on novel deep learning architectures.", location: "Delhi", category: "Research", type: "Contract" },
  { id: 4, title: "Data Science Intern", description: "Analyze large datasets and extract meaningful insights.", location: "Karnataka", category: "Engineering", type: "Internship" },
  { id: 5, title: "DevOps Engineer", description: "Manage and scale our cloud infrastructure.", location: "Maharashtra", category: "Engineering", type: "Full-time" },
  { id: 6, title: "Marketing Manager", description: "Develop and execute marketing campaigns for AI products.", location: "Delhi", category: "Management", type: "Part-time", hidden: true },
  { id: 7, title: "Computer Vision Researcher", description: "Push the boundaries of image and video analysis.", location: "Karnataka", category: "Research", type: "Full-time", hidden: true },
  { id: 8, title: "Backend Developer (AI Services)", description: "Build robust and scalable APIs for our ML models.", location: "Maharashtra", category: "Engineering", type: "Contract", hidden: true },
  { id: 9, title: "QA Automation Engineer", description: "Ensure the quality of our AI products via automation.", location: "Delhi", category: "Engineering", type: "Full-time", hidden: true },
  { id: 10, title: "Project Management Intern", description: "Assist in planning and executing AI projects.", location: "Karnataka", category: "Management", type: "Internship", hidden: true }
];

const infoCards = [
  {
    title: "Benefits",
    description: "Competitive salaries and wellness programs.",
    image: "https://images.unsplash.com/photo-1579621970795-87f54d504ba0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Culture",
    description: "A collaborative environment where innovation thrives.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Diversity & Inclusion",
    description: "We are committed to building a diverse team.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Flexible Work",
    description: "We offer flexible work arrangements to suit you.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
  }
];

const testimonials = [
  {
    avatar: "👩‍💻",
    quote: "At Synaptyx, I get to work on cutting-edge AI projects that actually make a difference.",
    author: "Priya Sharma, Senior AI Engineer"
  },
  {
    avatar: "👨‍💼",
    quote: "The culture of collaboration and continuous learning here is second to none.",
    author: "Rohan Das, Product Manager"
  },
  {
    avatar: "🧑‍🔬",
    quote: "I have the freedom to explore novel ideas and contribute to groundbreaking research.",
    author: "Anika Reddy, Research Scientist"
  }
];

const Careers = () => {
  const [locationFilter, setLocationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const filteredJobs = jobs.filter(job => {
    if (locationFilter !== "all" && job.location !== locationFilter) return false;
    if (categoryFilter !== "all" && job.category !== categoryFilter) return false;
    if (typeFilter !== "all" && job.type !== typeFilter) return false;
    return true;
  });

  const visibleJobs = showMore ? filteredJobs : filteredJobs.filter(job => !job.hidden);

  const handleApply = (jobTitle: string) => {
    navigate(`/apply?job=${encodeURIComponent(jobTitle)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-golden/30 via-brand-orange/20 to-brand-brown-light/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Join the Future of AI at <span className="text-brand-orange">Synaptyx</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build innovative AI solutions that transform industries and make a meaningful impact on the world.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-brand-tan/30">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Management">Management</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Job Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Job Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Count */}
          <p className="text-muted-foreground mb-6">
            Showing {visibleJobs.length} of {filteredJobs.length} jobs
          </p>

          {/* Job Listings */}
          <div className="space-y-4 mb-8">
            {visibleJobs.map((job) => (
              <Card key={job.id} className="border-brand-orange/20 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mb-3">{job.description}</CardDescription>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-brand-orange/10 text-brand-orange border-brand-orange/20">
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="border-brand-brown-medium/30 text-brand-brown-medium">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleApply(job.title)}
                      className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8"
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && filteredJobs.some(job => job.hidden) && (
            <div className="text-center">
              <Button 
                onClick={() => setShowMore(true)}
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                Show More
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, index) => (
              <Card key={index} className="group cursor-pointer border-brand-orange/20 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{card.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-brand-tan/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-brand-tan border-brand-orange/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <blockquote className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-muted-foreground text-sm">– {testimonial.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-brown-dark via-brand-brown-medium to-brand-blue-gray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't see a perfect match? Send us your resume and we'll keep you in mind for future roles.
          </p>
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg">
            Submit Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;