import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function Vision() {
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

  return (
    <section ref={sectionRef} id="vision" className="py-12 md:py-16 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold/10 to-solar-yellow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-solar-yellow/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-10 h-10 text-gold" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gold via-solar-yellow to-gold bg-clip-text text-transparent">
            Our Vision
          </h2>
          
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 md:p-12 shadow-xl border border-gold/20 hover-glow">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              Our vision is to power a sustainable future for every home and business in India through clean and efficient solar energy.
            </p>
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
