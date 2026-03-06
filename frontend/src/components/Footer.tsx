import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart, Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';

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
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/NN-Enterprises-Solar-Energy/61586244603327/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-solar-yellow hover:text-black transition-all duration-300 hover:scale-110"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikunj-gupta024/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-solar-yellow hover:text-black transition-all duration-300 hover:scale-110"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/nnsolar0029/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-gold hover:to-solar-yellow hover:text-black transition-all duration-300 hover:scale-110"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ISO Certification Badge */}
          <div className="inline-block bg-white/5 border border-gold/30 rounded-lg p-3 hover:bg-white/10 transition-colors">
            <a href="/NN-Enterprises-ISO-9001.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 cursor-pointer">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold" /> {/* Assuming you have Shield imported from lucide-react */}
                <span className="font-bold text-gold text-sm tracking-wider">ISO 9001:2015 CERTIFIED</span>
              </div>
              <span className="text-xs text-gray-400">Quality Management System</span>
            </a>
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

        <div className="mt-8 border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NN Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
