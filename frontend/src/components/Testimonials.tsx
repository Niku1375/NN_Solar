import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    image: '/assets/generated/customer-testimonial-1.dim_150x150.jpg',
    rating: 5,
    project: '5kW Residential Rooftop',
    text: 'NN ENTERPRISES installed a 5kW solar system on my rooftop. The team was professional, and the installation was completed in just 3 days. My electricity bills have reduced by 80%! Highly recommended.',
    date: 'December 2024',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bangalore',
    image: '/assets/generated/customer-testimonial-2.dim_150x150.jpg',
    rating: 5,
    project: '3kW Residential System',
    text: 'Excellent service from start to finish. They handled all the paperwork for the PM Surya Ghar subsidy, and I received ₹78,000 directly in my account. The system is working perfectly!',
    date: 'November 2024',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Ahmedabad',
    image: '/assets/generated/customer-testimonial-1.dim_150x150.jpg',
    rating: 5,
    project: '10kW Commercial Installation',
    text: 'We installed a 10kW system for our small factory. The ROI is amazing - we\'re saving over ₹12,000 per month. The team provided excellent after-sales support and regular maintenance.',
    date: 'October 2024',
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    location: 'Hyderabad',
    image: '/assets/generated/customer-testimonial-2.dim_150x150.jpg',
    rating: 5,
    project: '4kW Residential Rooftop',
    text: 'Very satisfied with the quality of panels and inverter. The monitoring app helps me track daily generation. Best decision for reducing electricity costs and helping the environment!',
    date: 'September 2024',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full mb-6">
            <Quote className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Customer Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hear from our satisfied customers who have made the switch to solar energy
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-glow relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 text-gold/10">
              <Quote className="w-24 h-24" />
            </div>

            <CardContent className="pt-12 pb-8 px-8 md:px-12 relative z-10">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-center text-foreground mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-20 h-20 border-2 border-gold">
                  <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-gold/20 to-solar-yellow/20 text-gold text-xl font-bold">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-bold text-lg text-gold">{currentTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">{currentTestimonial.project}</p>
                  <p className="text-xs text-muted-foreground mt-1">{currentTestimonial.date}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-gold/30 hover:border-gold hover:bg-gold/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-gold w-8'
                          : 'bg-gold/30 hover:bg-gold/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-gold/30 hover:border-gold hover:bg-gold/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Card className="border border-gold/20 bg-card/50 text-center p-4">
              <p className="text-3xl font-bold text-gold mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </Card>
            <Card className="border border-gold/20 bg-card/50 text-center p-4">
              <p className="text-3xl font-bold text-gold mb-1">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </Card>
            <Card className="border border-gold/20 bg-card/50 text-center p-4">
              <p className="text-3xl font-bold text-gold mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
