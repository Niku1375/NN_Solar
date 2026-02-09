import { useEffect, useRef, useState } from 'react';
import { IndianRupee, Wallet, TrendingDown, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PMSuryaGhar() {
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

  const benefits = [
    {
      icon: '/assets/generated/cfa-icon.dim_64x64.png',
      iconComponent: IndianRupee,
      title: 'Central Financial Assistance (CFA)',
      description: 'Government subsidy to reduce your solar installation costs',
      details: [
        '1–2 kW: ₹30,000 per kW',
        '(₹30k for 1 kW, ₹60k for 2 kW)',
        '2–3 kW: ₹18,000 per additional kW',
        '(Total ₹78,000 for 3 kW)',
        'Above 3 kW: Capped at ₹78,000',
      ],
    },
    {
      icon: '/assets/generated/dbt-icon.dim_64x64.png',
      iconComponent: Wallet,
      title: 'Direct Benefit Transfer (DBT)',
      description: 'Hassle-free subsidy disbursement directly to your account',
      details: [
        'Subsidy credited directly to your bank',
        'No intermediaries or delays',
        'Transparent & secure process',
        'Quick processing after verification',
        'Track status online anytime',
      ],
    },
    {
      icon: '/assets/generated/loan-icon.dim_64x64.png',
      iconComponent: TrendingDown,
      title: 'Collateral-Free Loans',
      description: 'Easy financing options for your solar journey',
      details: [
        'Low-interest loans at ~7%',
        'No collateral required',
        'Flexible repayment terms',
        'Covers installation & equipment',
        'Simplified application process',
      ],
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="pm-surya-ghar" className="py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center border-2 border-gold/40 hover-glow">
              <img 
                src="/assets/generated/pm-surya-ghar-icon.dim_64x64.png" 
                alt="PM Surya Ghar Yojana" 
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-solar-yellow to-gold bg-clip-text text-transparent">
            PM Surya Ghar Yojana
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take advantage of the government's flagship solar rooftop scheme offering substantial subsidies, 
            direct benefit transfers, and easy financing to make solar energy accessible for every household
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-2 border-gold/30 bg-gradient-to-br from-card via-card/80 to-card/50 hover-lift transition-all duration-1000 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/20 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200 + 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gold/30 to-solar-yellow/30 rounded-full flex items-center justify-center border-2 border-gold/50 hover-glow shadow-lg shadow-gold/20">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    className="w-14 h-14"
                  />
                </div>
                <CardTitle className="text-xl md:text-2xl bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent mb-3 font-bold">
                  {benefit.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-gold to-solar-yellow flex-shrink-0 mt-1.5 group-hover/item:scale-150 transition-transform shadow-sm shadow-gold/50" />
                      <span className="text-sm md:text-base text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-gold to-solar-yellow text-black font-bold hover:shadow-xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold font-semibold transition-all duration-300 hover:scale-105 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Contact us today to learn about eligibility criteria and start your application process. 
            Our experts will guide you through every step.
          </p>
        </div>
      </div>
    </section>
  );
}
