import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Wrench, HeadphonesIcon, CheckCircle2, TrendingUp } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Premium DCR Topcon Bifacial panels with 30-year performance warranty and 12-year product warranty',
    highlights: ['30-year warranty', 'Premium components', 'Quality certified'],
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'Registered on GeM Portal and trusted by government organizations including Indian Army, BHEL, and NTPC',
    highlights: ['GeM registered', 'Government trusted', 'ISO certified'],
  },
  {
    icon: Wrench,
    title: 'Free Maintenance',
    description: '5 years of complimentary plant maintenance with regular inspections and performance monitoring',
    highlights: ['5-year free service', 'Regular inspections', 'Performance reports'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifetime Support',
    description: '24/7 helpline and lifetime technical support to ensure your system runs at peak efficiency',
    highlights: ['24/7 helpline', 'Expert technicians', 'Quick response'],
  },
  {
    icon: CheckCircle2,
    title: 'Hassle-Free Process',
    description: 'We handle all paperwork, subsidy applications, and approvals from start to grid connection',
    highlights: ['Complete paperwork', 'Subsidy assistance', 'End-to-end service'],
  },
  {
    icon: TrendingUp,
    title: 'Proven Track Record',
    description: '500+ successful installations with 98% customer satisfaction and 4.9/5 average rating',
    highlights: ['500+ projects', '98% satisfaction', 'Proven results'],
  },
];

const STRENGTHS = [
  {
    icon: '/assets/generated/proven-track-record-icon.dim_64x64.png',
    title: 'Proven Track Record',
    description: 'Over 500 successful installations across residential and commercial sectors with documented results',
  },
  {
    icon: '/assets/generated/hassle-free-process-icon.dim_64x64.png',
    title: 'Hassle-Free Process',
    description: 'Complete end-to-end service from consultation to installation with seamless execution',
  },
  {
    icon: '/assets/generated/lifetime-support-icon.dim_64x64.png',
    title: 'Lifetime Support',
    description: 'Dedicated technical support team available 24/7 for the entire lifespan of your solar system',
  },
  {
    icon: '/assets/generated/free-maintenance-icon.dim_64x64.png',
    title: 'Free Maintenance',
    description: 'Complimentary maintenance services for 5 years ensuring optimal system performance',
  },
  {
    icon: '/assets/generated/certified-excellence-icon.dim_64x64.png',
    title: 'Certified Excellence',
    description: 'ISO certified and registered on GeM Portal with all necessary industry certifications',
  },
  {
    icon: '/assets/generated/quality-assurance-icon.dim_64x64.png',
    title: 'Quality Assurance',
    description: 'Premium components with comprehensive warranties and rigorous quality control standards',
  },
];

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [strengthsVisible, setStrengthsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const strengthsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStrengthsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (strengthsRef.current) {
      observer.observe(strengthsRef.current);
    }

    return () => {
      if (strengthsRef.current) {
        observer.unobserve(strengthsRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Why Choose NN ENTERPRISES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Your trusted partner for reliable, efficient, and cost-effective solar solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift hover-glow transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-gold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {feature.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="border-2 border-gold/20 bg-gradient-to-r from-gold/10 to-solar-yellow/10">
            <CardContent className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold mb-2">5 MW+</p>
                  <p className="text-sm text-muted-foreground">Total Capacity Installed</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">Government Partners</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold mb-2">₹50Cr+</p>
                  <p className="text-sm text-muted-foreground">Customer Savings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Strengths Subsection */}
        <div ref={strengthsRef} className="mt-24">
          <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ${strengthsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
              Our Strengths
            </h3>
            <p className="text-lg text-muted-foreground">
              Six key differentiators that set us apart in the solar industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {STRENGTHS.map((strength, index) => (
              <Card
                key={index}
                className={`border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-lift hover-glow transition-all duration-1000 ${
                  strengthsVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center mb-4 p-3 hover:scale-110 transition-transform">
                      <img 
                        src={strength.icon} 
                        alt={strength.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gold mb-3">{strength.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
