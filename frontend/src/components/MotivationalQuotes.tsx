import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
  icon: string;
  image: string;
}

export function MotivationalQuotes() {
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

  const quotes: Quote[] = [
    {
      text: "The sun is the only safe nuclear reactor, situated as it is some ninety-three million miles away.",
      author: "Stephanie Mills",
      icon: "/assets/generated/sun-icon-gold-transparent.dim_64x64.png",
      image: "/assets/generated/motivational-solar-sunrise.dim_800x600.jpg"
    },
    {
      text: "Solar power is the last energy resource that isn't owned yet - nobody taxes the sun yet.",
      author: "Bonnie Raitt",
      icon: "/assets/generated/sun-burst-icon-transparent.dim_64x64.png",
      image: "/assets/generated/motivational-rooftop-sunset.dim_800x600.jpg"
    },
    {
      text: "The use of solar energy has not been opened up because the oil industry does not own the sun.",
      author: "Ralph Nader",
      icon: "/assets/generated/solar-energy-symbol-transparent.dim_64x64.png",
      image: "/assets/generated/motivational-clean-energy.dim_800x600.jpg"
    },
    {
      text: "I'd put my money on the sun and solar energy. What a source of power! I hope we don't have to wait until oil and coal run out before we tackle that.",
      author: "Thomas Edison",
      icon: "/assets/generated/sunshine-rays-icon-transparent.dim_64x64.png",
      image: "/assets/generated/motivational-hands-solar.dim_800x600.jpg"
    },
    {
      text: "The future is green energy, sustainability, renewable energy.",
      author: "Arnold Schwarzenegger",
      icon: "/assets/generated/energy-sun-icon-transparent.dim_64x64.png",
      image: "/assets/generated/motivational-solar-farm-dramatic.dim_800x600.jpg"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-solar-yellow/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-gold animate-pulse-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Motivational Quotes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Inspiring words on sustainability, clean energy, and innovation
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <div className={`relative bg-gradient-to-br from-card to-card/50 border border-gold/20 rounded-2xl overflow-hidden hover-lift ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex`}>
                {/* Image Section */}
                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent z-10 group-hover:from-gold/30 transition-all duration-500" />
                  <img 
                    src={quote.image} 
                    alt={`Inspirational solar energy - ${quote.author}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gold glow overlay on hover */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500 z-20" />
                  
                  {/* Icon overlay on image */}
                  <div className="absolute top-6 left-6 z-30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-solar-yellow/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/20">
                      <img 
                        src={quote.icon} 
                        alt="Solar icon" 
                        className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Quote Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:via-gold/3 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="text-gold/40 text-7xl font-serif leading-none mb-4">"</div>
                    <p className="text-foreground/90 text-xl md:text-2xl leading-relaxed mb-6 italic group-hover:text-foreground transition-colors duration-500">
                      {quote.text}
                    </p>
                    <div className="flex items-center">
                      <div className="h-px flex-grow bg-gradient-to-r from-gold/30 to-transparent mr-4" />
                      <p className="text-gold font-semibold text-base md:text-lg tracking-wide">
                        — {quote.author}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 bg-gold rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
