import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

export function Partners() {
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

  const partners = [
    { name: 'BHEL', logo: '/assets/generated/bhel-logo-transparent.dim_150x150.png' },
    { name: 'GAIL', logo: '/assets/generated/gail-logo-transparent.dim_150x150.png' },
    { name: 'SAIL', logo: '/assets/generated/sail-logo-transparent.dim_150x150.png' },
    { name: 'Indian Army', logo: '/assets/generated/indian-army-logo-transparent.dim_150x150.png' },
    { name: 'NCC Limited', logo: '/assets/generated/ncc-limited-logo-transparent.dim_150x150.png' },
    { name: 'BSES', logo: '/assets/generated/bses-logo-transparent.dim_150x150.png' },
    { name: 'KEC', logo: '/assets/generated/kec-logo-transparent.dim_150x150.png' },
    { name: 'NTPC', logo: '/assets/generated/ntpc-logo-transparent.dim_150x150.png' },
    { name: 'Lohia', logo: '/assets/generated/lohia-logo-transparent.dim_150x150.png' },
    { name: 'ACE', logo: '/assets/generated/ace-logo-transparent.dim_150x150.png' },
    { name: 'SSE', logo: '/assets/generated/sse-logo-transparent.dim_150x150.png' },
    { name: 'NHPC', logo: '/assets/generated/nhpc-logo-transparent.dim_150x150.png' },
    { name: 'CDIL', logo: '/assets/generated/cdil-logo-transparent.dim_150x150.png' },
    { name: 'Godrej', logo: '/assets/generated/godrej-logo-transparent.dim_150x150.png' },
    { name: 'Cyber', logo: '/assets/generated/cyber-logo-transparent.dim_150x150.png' },
  ];

  return (
    <section ref={sectionRef} id="partners" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold/5 to-solar-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Award className="w-10 h-10 text-gold" />
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold via-solar-yellow to-gold bg-clip-text text-transparent">
            Registered on GeM Portal
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Trusted By Industry Leaders
          </p>
          
          {/* Partners Grid */}
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 md:p-12 shadow-xl border border-gold/20 hover-glow">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`group flex items-center justify-center bg-gradient-to-br from-background/80 to-card/50 rounded-xl p-6 border border-gold/10 hover:border-gold/40 hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-auto max-w-[100px] max-h-[80px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter brightness-110 group-hover:brightness-125"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="w-2 h-2 bg-gold rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-solar-yellow rounded-full animate-float" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-gold rounded-full animate-float" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
