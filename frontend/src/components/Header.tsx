import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-gold/20' : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar with Contact Info */}
      <div className="bg-gradient-to-r from-gold to-solar-yellow text-black py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>9810715231 | 9810384584 | 8851013757</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <div className="flex items-center gap-1">
                <a href="mailto:nikunjgupta0029@gmail.com" className="hover:underline">
                  nikunjgupta0029@gmail.com
                </a>
                <span>|</span>
                <a href="mailto:nnenterprises0029@gmail.com" className="hover:underline">
                  nnenterprises0029@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/assets/generated/Logo.png" 
              alt="NN SOLAR ENERGY" 
              className="h-20 w-auto transition-transform group-hover:scale-110 duration-300" 
            />
            <span className="text-xl font-bold bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
              NN SOLAR ENERGY
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-gold transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-solar-yellow group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex bg-gradient-to-r from-gold to-solar-yellow hover:from-solar-yellow hover:to-gold text-black font-semibold transition-all duration-300 hover:shadow-gold-glow"
          >
            Get a Quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold transition-colors hover:text-solar-yellow"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold/20 animate-fade-in-up">
            {/* Mobile Contact Info */}
            <div className="mb-4 pb-4 border-b border-gold/20 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="flex flex-wrap gap-x-1">
                  <span>9810715231,</span>
                  <span>9810384584,</span>
                  <span>8851013757</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:nikunjgupta0029@gmail.com" className="hover:text-gold transition-colors">
                    nikunjgupta0029@gmail.com
                  </a>
                  <a href="mailto:nnenterprises0029@gmail.com" className="hover:text-gold transition-colors">
                    nnenterprises0029@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-gold transition-colors font-medium hover:pl-2 duration-300"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-gradient-to-r from-gold to-solar-yellow hover:from-solar-yellow hover:to-gold text-black font-semibold"
            >
              Get a Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
