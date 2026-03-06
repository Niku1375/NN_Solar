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
          
          {/* Company Info & ISO Badge */}
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
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading provider of innovative solar solutions for residential and commercial clients. 
              Powering a sustainable future, one installation at a time.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 mb-8">
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

            {/* ISO Certification Badge (Moved inside the column) */}
            <div className="inline-block bg-white/5 border border-gold/30 rounded-lg p-3 hover:bg-white/10 transition-colors">
              <a href="/NN-Enterprises-ISO-9001.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" /> 
                  <span className="font-bold text-gold text-sm tracking-wider">ISO 9001:2015 CERTIFIED</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-gray-300 transition-colors">Quality Management System</span>
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
            <ul className="space-y-4 text-muted-foreground">
              {/* Clickable Phone Numbers */}
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+919810715231" className="hover:text-gold transition-colors block">9810715231</a>
                  <a href="tel:+919810384584" className="hover:text-gold transition-colors block">9810384584</a>
                  <a href="tel:+918851013757" className="hover:text-gold transition-colors block">8851013757</a>
                </div>
              </li>
              
              {/* Clickable Emails */}
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1.5">
                  <a href="mailto:nnenterprises0029@gmail.com" className="hover:text-gold transition-colors break-all block">
                    nnenterprises0029@gmail.com
                  </a>
                </div>
              </li>
              
              {/* Address */}
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="leading-relaxed">
                  <p>House 11, Block 8,</p>
                  <p>Roop Nagar Basement</p>
                </div>
              </li>
              
              {/* Business Hours */}
              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold group-hover:scale-110 transition-transform" />
                <div className="leading-relaxed">
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