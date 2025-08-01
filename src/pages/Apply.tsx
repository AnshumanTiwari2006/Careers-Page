import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const jobTitle = searchParams.get('job') || 'Position at Synaptyx';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    currentCTC: '',
    expectedCTC: ''
  });
  
  const [files, setFiles] = useState({
    resume: null as File | null,
    coverLetter: null as File | null
  });

  const ctcOptions = Array.from({ length: 15 }, (_, i) => `${i + 1} Lakh`);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: 'resume' | 'coverLetter', file: File | null) => {
    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload only PDF files",
          variant: "destructive"
        });
        return;
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "File size must be less than 5MB",
          variant: "destructive"
        });
        return;
      }
    }
    
    setFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.currentCTC || !formData.expectedCTC || !files.resume) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });

    // Simulate form submission
    setTimeout(() => {
      navigate('/careers');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-brand-orange/20 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-brand-golden/20 to-brand-orange/20">
              <CardTitle className="text-3xl text-foreground">
                Apply for {jobTitle}
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Join the Synaptyx team and shape the future of AI
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Full Name <span className="text-brand-orange">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="border-brand-orange focus:border-brand-orange focus:ring-brand-orange/20"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address <span className="text-brand-orange">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-brand-orange focus:border-brand-orange focus:ring-brand-orange/20"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number <span className="text-brand-orange">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-brand-orange focus:border-brand-orange focus:ring-brand-orange/20"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* LinkedIn */}
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-foreground font-medium">
                    LinkedIn Profile URL <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    className="border-brand-orange focus:border-brand-orange focus:ring-brand-orange/20"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-foreground font-medium">
                    Upload Resume <span className="text-brand-orange">*</span>
                  </Label>
                  <div className="border-2 border-brand-orange border-dashed rounded-lg p-4 text-center">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)}
                      className="hidden"
                      required
                    />
                    <Label htmlFor="resume" className="cursor-pointer">
                      {files.resume ? (
                        <span className="text-brand-orange font-medium">{files.resume.name}</span>
                      ) : (
                        <span className="text-muted-foreground">
                          Click to upload PDF (max 5MB)
                        </span>
                      )}
                    </Label>
                  </div>
                </div>

                {/* Cover Letter Upload */}
                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-foreground font-medium">
                    Upload Cover Letter <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <div className="border-2 border-brand-orange border-dashed rounded-lg p-4 text-center">
                    <Input
                      id="coverLetter"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange('coverLetter', e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <Label htmlFor="coverLetter" className="cursor-pointer">
                      {files.coverLetter ? (
                        <span className="text-brand-orange font-medium">{files.coverLetter.name}</span>
                      ) : (
                        <span className="text-muted-foreground">
                          Click to upload PDF (max 5MB)
                        </span>
                      )}
                    </Label>
                  </div>
                </div>

                {/* Current CTC */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Current CTC <span className="text-brand-orange">*</span>
                  </Label>
                  <Select value={formData.currentCTC} onValueChange={(value) => handleInputChange('currentCTC', value)}>
                    <SelectTrigger className="border-brand-orange focus:border-brand-orange focus:ring-brand-orange/20">
                      <SelectValue placeholder="Select current CTC" />
                    </SelectTrigger>
                    <SelectContent>
                      {ctcOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Expected CTC */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Expected CTC <span className="text-brand-orange">*</span>
                  </Label>
                  <Select value={formData.expectedCTC} onValueChange={(value) => handleInputChange('expectedCTC', value)}>
                    <SelectTrigger className="border-brand-orange focus:border-brand-orange focus:ring-brand-orange/20">
                      <SelectValue placeholder="Select expected CTC" />
                    </SelectTrigger>
                    <SelectContent>
                      {ctcOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 text-lg font-semibold"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Apply;