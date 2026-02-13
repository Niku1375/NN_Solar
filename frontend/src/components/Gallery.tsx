import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
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

  const projects = {
    all: [
      // Residential Projects
      { src: '/assets/generated/residential-rooftop-delhi.dim_400x300.jpg', title: 'Residential Rooftop – Delhi', type: 'Rooftop', alt: 'Residential rooftop solar panel installation in Delhi by NN ENTERPRISES' },
      { src: '/assets/generated/residential-apartment-mumbai.dim_400x300.jpg', title: 'Residential Apartment – Mumbai', type: 'Rooftop', alt: 'Apartment solar installation in Mumbai - NN ENTERPRISES project' },
      { src: '/assets/generated/residential-bungalow-pune.dim_400x300.jpg', title: 'Residential Bungalow – Pune', type: 'Rooftop', alt: 'Bungalow solar panel system in Pune by NN ENTERPRISES' },
      { src: '/assets/generated/residential-village-home.dim_400x300.jpg', title: 'Residential Village Home', type: 'Rooftop', alt: 'Village home solar installation - NN ENTERPRISES residential project' },
      { src: '/assets/generated/residential-rooftop-jaipur.dim_400x300.jpg', title: 'Residential Rooftop – Jaipur', type: 'Rooftop', alt: 'Rooftop solar panels in Jaipur - NN ENTERPRISES installation' },
      { src: '/assets/generated/residential-apartment-kolkata.dim_400x300.jpg', title: 'Residential Apartment – Kolkata', type: 'Rooftop', alt: 'Kolkata apartment solar energy system by NN ENTERPRISES' },
      { src: '/assets/generated/residential-villa-goa.dim_400x300.jpg', title: 'Residential Villa – Goa', type: 'Rooftop', alt: 'Luxury villa solar installation in Goa - NN ENTERPRISES' },
      { src: '/assets/generated/residential-farmhouse-haryana.dim_400x300.jpg', title: 'Residential Farmhouse – Haryana', type: 'Rooftop', alt: 'Farmhouse solar panel installation in Haryana by NN ENTERPRISES' },
      { src: '/assets/generated/residential-bungalow-agra.dim_400x300.jpg', title: 'Residential Bungalow – Agra', type: 'Rooftop', alt: 'Agra bungalow solar energy system - NN ENTERPRISES project' },
      { src: '/assets/generated/residential-village-rajasthan.dim_400x300.jpg', title: 'Residential Village – Rajasthan', type: 'Rooftop', alt: 'Rajasthan village solar installation by NN ENTERPRISES' },
      { src: '/assets/generated/residential-apartment-ahmedabad.dim_400x300.jpg', title: 'Residential Apartment – Ahmedabad', type: 'Rooftop', alt: 'Ahmedabad apartment solar panels - NN ENTERPRISES installation' },
      { src: '/assets/generated/residential-villa-bangalore.dim_400x300.jpg', title: 'Residential Villa – Bangalore', type: 'Rooftop', alt: 'Bangalore villa solar energy system by NN ENTERPRISES' },
      { src: '/assets/generated/project-residential-1.dim_400x300.jpg', title: 'Residential Solar Installation', type: 'Rooftop', alt: 'Professional residential solar panel installation - NN ENTERPRISES' },
      { src: '/assets/generated/project-residential-2.dim_400x300.jpg', title: 'Residential Rooftop Project', type: 'Rooftop', alt: 'Completed residential rooftop solar project by NN ENTERPRISES' },
      // Commercial Projects
      { src: '/assets/generated/commercial-office-bangalore.dim_400x300.jpg', title: 'Commercial Office – Bangalore', type: 'Commercial', alt: 'Commercial office solar installation in Bangalore - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-school-hyderabad.dim_400x300.jpg', title: 'Commercial School – Hyderabad', type: 'Commercial', alt: 'School solar panel system in Hyderabad by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-hospital-chennai.dim_400x300.jpg', title: 'Commercial Hospital – Chennai', type: 'Commercial', alt: 'Hospital solar energy installation in Chennai - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-solar-farm-rajasthan.dim_400x300.jpg', title: 'Commercial Solar Plant – Rajasthan', type: 'Commercial', alt: 'Large-scale solar farm in Rajasthan by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-mall-gurgaon.dim_400x300.jpg', title: 'Commercial Mall – Gurgaon', type: 'Commercial', alt: 'Shopping mall solar installation in Gurgaon - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-warehouse-noida.dim_400x300.jpg', title: 'Commercial Warehouse – Noida', type: 'Commercial', alt: 'Warehouse solar panel system in Noida by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-factory-chennai.dim_400x300.jpg', title: 'Commercial Factory – Chennai', type: 'Commercial', alt: 'Factory solar energy installation in Chennai - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-office-pune.dim_400x300.jpg', title: 'Commercial Office – Pune', type: 'Commercial', alt: 'Office building solar panels in Pune by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-solar-farm-gujarat.dim_400x300.jpg', title: 'Commercial Solar Farm – Gujarat', type: 'Commercial', alt: 'Gujarat solar farm installation - NN ENTERPRISES commercial project' },
      { src: '/assets/generated/commercial-mall-lucknow.dim_400x300.jpg', title: 'Commercial Mall – Lucknow', type: 'Commercial', alt: 'Lucknow mall solar energy system by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-factory-indore.dim_400x300.jpg', title: 'Commercial Factory – Indore', type: 'Commercial', alt: 'Industrial factory solar installation in Indore - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-shopping-complex-delhi.dim_400x300.jpg', title: 'Commercial Shopping Complex – Delhi', type: 'Commercial', alt: 'Delhi shopping complex solar panels by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-solar-farm-madhya-pradesh.dim_400x300.jpg', title: 'Commercial Solar Farm – Madhya Pradesh', type: 'Commercial', alt: 'Madhya Pradesh solar farm - NN ENTERPRISES large-scale project' },
      { src: '/assets/generated/commercial-government-building.dim_400x300.jpg', title: 'Commercial Government Building', type: 'Commercial', alt: 'Government building solar installation by NN ENTERPRISES' },
      { src: '/assets/generated/project-commercial-1.dim_400x300.jpg', title: 'Commercial Solar Installation', type: 'Commercial', alt: 'Professional commercial solar panel installation - NN ENTERPRISES' },
      { src: '/assets/generated/project-commercial-2.dim_400x300.jpg', title: 'Commercial Rooftop Project', type: 'Commercial', alt: 'Completed commercial rooftop solar project by NN ENTERPRISES' },
    ],
    rooftop: [
      { src: '/assets/generated/residential-rooftop-delhi.dim_400x300.jpg', title: 'Residential Rooftop – Delhi', type: 'Rooftop', alt: 'Residential rooftop solar panel installation in Delhi by NN ENTERPRISES' },
      { src: '/assets/generated/residential-apartment-mumbai.dim_400x300.jpg', title: 'Residential Apartment – Mumbai', type: 'Rooftop', alt: 'Apartment solar installation in Mumbai - NN ENTERPRISES project' },
      { src: '/assets/generated/residential-bungalow-pune.dim_400x300.jpg', title: 'Residential Bungalow – Pune', type: 'Rooftop', alt: 'Bungalow solar panel system in Pune by NN ENTERPRISES' },
      { src: '/assets/generated/residential-village-home.dim_400x300.jpg', title: 'Residential Village Home', type: 'Rooftop', alt: 'Village home solar installation - NN ENTERPRISES residential project' },
      { src: '/assets/generated/residential-rooftop-jaipur.dim_400x300.jpg', title: 'Residential Rooftop – Jaipur', type: 'Rooftop', alt: 'Rooftop solar panels in Jaipur - NN ENTERPRISES installation' },
      { src: '/assets/generated/residential-apartment-kolkata.dim_400x300.jpg', title: 'Residential Apartment – Kolkata', type: 'Rooftop', alt: 'Kolkata apartment solar energy system by NN ENTERPRISES' },
      { src: '/assets/generated/residential-villa-goa.dim_400x300.jpg', title: 'Residential Villa – Goa', type: 'Rooftop', alt: 'Luxury villa solar installation in Goa - NN ENTERPRISES' },
      { src: '/assets/generated/residential-farmhouse-haryana.dim_400x300.jpg', title: 'Residential Farmhouse – Haryana', type: 'Rooftop', alt: 'Farmhouse solar panel installation in Haryana by NN ENTERPRISES' },
      { src: '/assets/generated/residential-bungalow-agra.dim_400x300.jpg', title: 'Residential Bungalow – Agra', type: 'Rooftop', alt: 'Agra bungalow solar energy system - NN ENTERPRISES project' },
      { src: '/assets/generated/residential-village-rajasthan.dim_400x300.jpg', title: 'Residential Village – Rajasthan', type: 'Rooftop', alt: 'Rajasthan village solar installation by NN ENTERPRISES' },
      { src: '/assets/generated/residential-apartment-ahmedabad.dim_400x300.jpg', title: 'Residential Apartment – Ahmedabad', type: 'Rooftop', alt: 'Ahmedabad apartment solar panels - NN ENTERPRISES installation' },
      { src: '/assets/generated/residential-villa-bangalore.dim_400x300.jpg', title: 'Residential Villa – Bangalore', type: 'Rooftop', alt: 'Bangalore villa solar energy system by NN ENTERPRISES' },
      { src: '/assets/generated/project-residential-1.dim_400x300.jpg', title: 'Residential Solar Installation', type: 'Rooftop', alt: 'Professional residential solar panel installation - NN ENTERPRISES' },
      { src: '/assets/generated/project-residential-2.dim_400x300.jpg', title: 'Residential Rooftop Project', type: 'Rooftop', alt: 'Completed residential rooftop solar project by NN ENTERPRISES' },
    ],
    commercial: [
      { src: '/assets/generated/commercial-office-bangalore.dim_400x300.jpg', title: 'Commercial Office – Bangalore', type: 'Commercial', alt: 'Commercial office solar installation in Bangalore - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-school-hyderabad.dim_400x300.jpg', title: 'Commercial School – Hyderabad', type: 'Commercial', alt: 'School solar panel system in Hyderabad by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-hospital-chennai.dim_400x300.jpg', title: 'Commercial Hospital – Chennai', type: 'Commercial', alt: 'Hospital solar energy installation in Chennai - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-solar-farm-rajasthan.dim_400x300.jpg', title: 'Commercial Solar Plant – Rajasthan', type: 'Commercial', alt: 'Large-scale solar farm in Rajasthan by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-mall-gurgaon.dim_400x300.jpg', title: 'Commercial Mall – Gurgaon', type: 'Commercial', alt: 'Shopping mall solar installation in Gurgaon - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-warehouse-noida.dim_400x300.jpg', title: 'Commercial Warehouse – Noida', type: 'Commercial', alt: 'Warehouse solar panel system in Noida by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-factory-chennai.dim_400x300.jpg', title: 'Commercial Factory – Chennai', type: 'Commercial', alt: 'Factory solar energy installation in Chennai - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-office-pune.dim_400x300.jpg', title: 'Commercial Office – Pune', type: 'Commercial', alt: 'Office building solar panels in Pune by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-solar-farm-gujarat.dim_400x300.jpg', title: 'Commercial Solar Farm – Gujarat', type: 'Commercial', alt: 'Gujarat solar farm installation - NN ENTERPRISES commercial project' },
      { src: '/assets/generated/commercial-mall-lucknow.dim_400x300.jpg', title: 'Commercial Mall – Lucknow', type: 'Commercial', alt: 'Lucknow mall solar energy system by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-factory-indore.dim_400x300.jpg', title: 'Commercial Factory – Indore', type: 'Commercial', alt: 'Industrial factory solar installation in Indore - NN ENTERPRISES' },
      { src: '/assets/generated/commercial-shopping-complex-delhi.dim_400x300.jpg', title: 'Commercial Shopping Complex – Delhi', type: 'Commercial', alt: 'Delhi shopping complex solar panels by NN ENTERPRISES' },
      { src: '/assets/generated/commercial-solar-farm-madhya-pradesh.dim_400x300.jpg', title: 'Commercial Solar Farm – Madhya Pradesh', type: 'Commercial', alt: 'Madhya Pradesh solar farm - NN ENTERPRISES large-scale project' },
      { src: '/assets/generated/commercial-government-building.dim_400x300.jpg', title: 'Commercial Government Building', type: 'Commercial', alt: 'Government building solar installation by NN ENTERPRISES' },
      { src: '/assets/generated/project-commercial-1.dim_400x300.jpg', title: 'Commercial Solar Installation', type: 'Commercial', alt: 'Professional commercial solar panel installation - NN ENTERPRISES' },
      { src: '/assets/generated/project-commercial-2.dim_400x300.jpg', title: 'Commercial Rooftop Project', type: 'Commercial', alt: 'Completed commercial rooftop solar project by NN ENTERPRISES' },
    ],
  };

  return (
    <section ref={sectionRef} id="gallery" className="py-12 md:py-16 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore our portfolio of successful solar installations across residential and commercial sectors in India
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className={`grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card border border-gold/20 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold data-[state=active]:to-solar-yellow data-[state=active]:text-black">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="rooftop" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold data-[state=active]:to-solar-yellow data-[state=active]:text-black">
              Residential
            </TabsTrigger>
            <TabsTrigger value="commercial" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gold data-[state=active]:to-solar-yellow data-[state=active]:text-black">
              Commercial
            </TabsTrigger>
          </TabsList>

          {(['all', 'rooftop', 'commercial'] as const).map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects[tab].map((project, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div 
                        className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-md border border-gold/20 hover-lift transition-all duration-500 ${
                          isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${Math.min(index * 50 + 400, 1000)}ms` }}
                      >
                        <img
                          src={project.src}
                          alt={project.alt}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div>
                            <p className="text-gold font-semibold text-lg">{project.title}</p>
                            <p className="text-solar-yellow text-sm">{project.type}</p>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full animate-pulse-glow" aria-hidden="true" />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-card border-gold/30">
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                      <div className="mt-4">
                        <h3 className="text-2xl font-bold mb-2 text-gold">{project.title}</h3>
                        <p className="text-muted-foreground">{project.type} Installation by NN ENTERPRISES</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
