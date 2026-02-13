import { useEffect, useRef, useState } from 'react';
import { CheckCircle, DollarSign, Leaf, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
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

  const keyBenefits = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce energy bills by up to 80%',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Clean, renewable energy source',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: '25+ year warranty on panels',
    },
  ];

  const services = [
    {
      icon: '/assets/generated/solar-panel-icon.dim_64x64.png',
      title: 'Rooftop Solar Solutions',
      description: 'Transform your home with clean, renewable energy',
      image: '/assets/generated/rooftop-solar-installation.dim_800x600.jpg',
      benefits: [
        'Reduce electricity bills by up to 80%',
        'Increase property value',
        'Low maintenance requirements',
        'Government incentives and tax credits',
        '25+ year warranty on panels',
      ],
    },
    {
      icon: '/assets/generated/commercial-building-icon.dim_64x64.png',
      title: 'Commercial Solar Installations',
      description: 'Scalable solar solutions for businesses of all sizes',
      image: '/assets/generated/commercial-solar-farm.dim_800x600.jpg',
      benefits: [
        'Significant operational cost savings',
        'Enhanced corporate sustainability',
        'Customized system design',
        'Minimal business disruption during installation',
        'Comprehensive monitoring and maintenance',
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Comprehensive solar solutions tailored to your specific needs, whether residential or commercial
          </p>
        </div>

        {/* Key Benefits Callouts */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gold/10 to-solar-yellow/10 border border-gold/30 rounded-xl p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-solar-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-gold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-2 border-gold/20 bg-gradient-to-br from-card to-card/50 hover-glow transition-all duration-1000 ${
                isVisible ? (index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-solar-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30">
                    <img src={service.icon} alt="" className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gold">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 group/item">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
