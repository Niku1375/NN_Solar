import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Users, Award, TrendingUp, Zap, Building2, CheckCircle2 } from 'lucide-react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    capacity: 0,
    customers: 0,
    savings: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            animateCounters();
            hasAnimated.current = true;
          }
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

  const animateCounters = () => {
    const targets = {
      projects: 500,
      capacity: 5,
      customers: 500,
      savings: 50,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targets.projects * progress),
        capacity: Math.floor(targets.capacity * progress * 10) / 10,
        customers: Math.floor(targets.customers * progress),
        savings: Math.floor(targets.savings * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-16 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            About NN ENTERPRISES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            With over a decade of experience in renewable energy, we are committed to providing sustainable solar solutions 
            that empower homes and businesses across India. Our mission is to make clean energy accessible, affordable, 
            and reliable for everyone.
          </p>
        </div>

        {/* Statistics Counter */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift text-center">
            <CardContent className="pt-6 pb-6">
              <Building2 className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{counters.projects}+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift text-center">
            <CardContent className="pt-6 pb-6">
              <Zap className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{counters.capacity}+ MW</p>
              <p className="text-sm text-muted-foreground">Capacity Installed</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift text-center">
            <CardContent className="pt-6 pb-6">
              <Users className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">{counters.customers}+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift text-center">
            <CardContent className="pt-6 pb-6">
              <TrendingUp className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-gold mb-1">₹{counters.savings}Cr+</p>
              <p className="text-sm text-muted-foreground">Customer Savings</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className={`border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift hover-glow transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to reducing carbon footprint and promoting clean energy solutions
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift hover-glow transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  Premium quality components with industry-leading warranties and certifications
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift hover-glow transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Dedicated support team ensuring satisfaction from consultation to maintenance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={`border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift hover-glow transition-all duration-1000 delay-600 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Proven track record with 98% customer satisfaction and lifetime support
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
