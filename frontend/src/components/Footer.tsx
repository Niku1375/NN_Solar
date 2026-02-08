import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/assets/generated/nn-solar-energy-logo-transparent.dim_200x200.png" 
                alt="NN SOLAR ENERGY" 
                className="h-12 w-12 transition-transform group-hover:scale-110 duration-300" 
              />
              <span className="text-xl font-bold bg-gradient-to-r from-gold to-solar-yellow bg-clip-text text-transparent">
                NN SOLAR ENERGY
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Leading provider of innovative solar solutions for residential and commercial clients. 
              Powering a sustainable future, one installation at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-solar-yellow hover:text-black transition-all duration-300 hover:scale-110"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-solar-yellow hover:text-black transition-all duration-300 hover:scale-110"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-solar-yellow hover:text-black transition-all duration-300 hover:scale-110"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-gold transition-all duration-300 hover:pl-2"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2 group">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                  <p className="hover:text-gold transition-colors cursor-pointer flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-gold" />
                    9810715231
                  </p>
                  <p className="hover:text-gold transition-colors cursor-pointer flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-gold" />
                    9810384584
                  </p>
                  <p className="hover:text-gold transition-colors cursor-pointer flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-gold" />
                    8851013757
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2 group">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                  <a 
                    href="mailto:nikunjgupta0029@gmail.com"
                    className="hover:text-gold transition-colors break-all block"
                  >
                    nikunjgupta0029@gmail.com
                  </a>
                  <a 
                    href="mailto:nnenterprises0029@gmail.com"
                    className="hover:text-gold transition-colors break-all block"
                  >
                    nnenterprises0029@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <p>House 11, Block 8,</p>
                  <p>Roop Nagar Basement</p>
                </div>
              </li>
              <li className="flex items-start gap-2 group">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Business Hours</p>
                  <p>Monday - Saturday: 9 AM - 6 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2025 NN SOLAR ENERGY. Built with <Heart className="w-4 h-4 text-gold fill-gold animate-pulse" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-solar-yellow transition-colors font-medium hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
