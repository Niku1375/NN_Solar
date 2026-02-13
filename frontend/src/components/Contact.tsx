import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Loader2, Clock, MessageCircle } from 'lucide-react';
// import { useSubmitContactForm } from '../hooks/useQueries'; // Removed custom hook
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    roofArea: '',
    monthlyBill: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); // New loading state
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Create FormData object for Web3Forms
      const data = new FormData();
      
      // ---------------------------------------------------------
      // PASTE YOUR WEB3FORMS ACCESS KEY HERE
      data.append("access_key", "6f3ed1d8-f1f2-4a5b-8dc1-d2f510b89a3e"); 
      // ---------------------------------------------------------

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("service_interest", formData.serviceInterest || 'Not specified');
      data.append("roof_area", formData.roofArea ? `${formData.roofArea} sq ft` : 'Not specified');
      data.append("monthly_bill", formData.monthlyBill ? `₹${formData.monthlyBill}` : 'Not specified');
      data.append("message", formData.message);

      // Optional: Add a subject line for the email you receive
      data.append("subject", "New Solar Quote Request from Website");

      // 2. Send to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Thank you! We\'ll get back to you within 24 hours.');
        // Reset form
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          serviceInterest: '',
          roofArea: '',
          monthlyBill: '',
          message: '' 
        });
      } else {
        toast.error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterest: value,
    }));
  };

  const whatsappNumber = '918851013757';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section ref={sectionRef} id="contact" className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ready to start your solar journey? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-glow">
              <CardHeader>
                <CardTitle className="text-gold">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-gold/30 focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-gold/30 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98107 15231"
                        required
                        className="border-gold/30 focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceInterest" className="text-foreground">Service Interest</Label>
                      <Select value={formData.serviceInterest} onValueChange={handleSelectChange}>
                        <SelectTrigger className="border-gold/30 focus:border-gold">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Rooftop Solar</SelectItem>
                          <SelectItem value="commercial">Commercial Solar Installation</SelectItem>
                          <SelectItem value="subsidy">PM Surya Ghar Subsidy</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roofArea" className="text-foreground">Available Roof Area (sq ft)</Label>
                      <Input
                        id="roofArea"
                        name="roofArea"
                        type="number"
                        value={formData.roofArea}
                        onChange={handleChange}
                        placeholder="e.g., 500"
                        className="border-gold/30 focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="monthlyBill" className="text-foreground">Monthly Electricity Bill (₹)</Label>
                      <Input
                        id="monthlyBill"
                        name="monthlyBill"
                        type="number"
                        value={formData.monthlyBill}
                        onChange={handleChange}
                        placeholder="e.g., 5000"
                        className="border-gold/30 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      required
                      className="border-gold/30 focus:border-gold transition-colors"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-solar-yellow hover:from-solar-yellow hover:to-gold text-black font-bold transition-all duration-300 hover:shadow-gold-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Get Free Quote'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift">
              <CardHeader>
                <CardTitle className="text-gold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <div className="text-muted-foreground space-y-1">
                      <p className="hover:text-gold transition-colors cursor-pointer flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gold" />
                        9810715231
                      </p>
                      <p className="hover:text-gold transition-colors cursor-pointer flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gold" />
                        9810384584
                      </p>
                      <p className="hover:text-gold transition-colors cursor-pointer flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gold" />
                        8851013757
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <div className="text-muted-foreground space-y-1">
                      <a 
                        href="mailto:nikunjgupta0029@gmail.com"
                        className="hover:text-gold transition-colors block"
                      >
                        nikunjgupta0029@gmail.com
                      </a>
                      <a 
                        href="mailto:nnenterprises0029@gmail.com"
                        className="hover:text-gold transition-colors block"
                      >
                        nnenterprises0029@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      House 11, Block 8,<br />
                      Roop Nagar Basement
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gold/20">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#25D366] hover:bg-[#20BA5A] rounded-lg transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Chat on WhatsApp</p>
                      <p className="text-white/90 text-sm">Get instant responses</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gold to-solar-yellow text-black border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-1 font-medium">
                  <p>Monday - Saturday: 9 AM - 6 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}