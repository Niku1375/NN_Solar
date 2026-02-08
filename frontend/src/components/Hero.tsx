import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image - optimized with GPU acceleration */}
      <div 
        className="absolute inset-0 z-0 gpu-accelerated"
        style={{ 
          transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
          willChange: 'transform'
        }}
      >
        <img
          src="/assets/generated/solar-hero-banner.dim_1200x600.jpg"
          alt="Professional solar panel installation services by NN SOLAR ENERGY - Leading solar energy solutions provider in India"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Animated Light Flares - reduced for performance */}
      <div className="light-flare top-20 left-10 opacity-30" style={{ animationDelay: '0s' }} />
      <div className="light-flare bottom-32 right-20 opacity-25" style={{ animationDelay: '2s' }} />

      {/* Animated Sparkles - optimized */}
      <div className="absolute top-32 right-10 md:right-20 animate-pulse-glow">
        <Sparkles className="w-16 h-16 md:w-20 md:h-20 text-solar-yellow" aria-hidden="true" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-20 animate-float">
        <Sparkles className="w-12 h-12 md:w-14 md:h-14 text-gold opacity-60" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-semibold backdrop-blur-sm">
              Leading Solar Solutions Provider
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gold via-solar-yellow to-gold bg-clip-text text-transparent mb-6 leading-tight">
            NN SOLAR ENERGY
          </h1>
          <p className="text-2xl md:text-4xl text-foreground mb-4 font-light">
            Powering a Sustainable Future
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Leading provider of innovative solar solutions for residential rooftops and commercial installations across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-gold to-solar-yellow hover:from-solar-yellow hover:to-gold text-black font-bold text-lg px-8 py-6 shadow-gold-glow hover:shadow-yellow-glow transition-all duration-300 hover:scale-105"
              aria-label="Get a free solar installation quote"
            >
              Get a Free Quote
              <ArrowRight className="ml-2" aria-hidden="true" />
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              aria-label="View our solar energy services"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
