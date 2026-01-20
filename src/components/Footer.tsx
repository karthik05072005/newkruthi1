import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-script text-5xl text-[hsl(43,74%,49%)]">K</span>
              <div className="flex flex-col">
                <span className="font-display text-lg tracking-[0.2em] text-foreground">
                  KRUTHI KAPTURES
                </span>
                <span className="font-body text-xs text-[hsl(43,74%,49%)] italic">
                  Thru our lens, ur life unfoldzzz…
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Capturing emotions, moments, and memories with passion. The art of storytelling through light.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-xl text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="font-body text-sm text-muted-foreground hover:text-[hsl(43,74%,49%)] transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-display text-xl text-foreground">Services</h4>
            <nav className="flex flex-col gap-3">
              {["Wedding Photography", "Pre-Wedding", "Baby Shoots", "Portraits", "Events"].map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="font-body text-sm text-muted-foreground hover:text-[hsl(43,74%,49%)] transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display text-xl text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919743656533"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-[hsl(43,74%,49%)] transition-colors duration-300"
              >
                <Phone size={16} className="text-[hsl(43,74%,49%)]" />
                +91 97436 56533
              </a>
              <a
                href="mailto:KruthiKaptures@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-[hsl(43,74%,49%)] transition-colors duration-300"
              >
                <Mail size={16} className="text-[hsl(43,74%,49%)]" />
                KruthiKaptures@gmail.com
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                <MapPin size={16} className="text-[hsl(43,74%,49%)] mt-0.5 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-[hsl(43,74%,49%)] hover:border-[hsl(43,74%,49%)] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-[hsl(43,74%,49%)] hover:border-[hsl(43,74%,49%)] transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-[hsl(43,74%,49%)] hover:border-[hsl(43,74%,49%)] transition-all duration-300"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://wa.me/919743656533"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[hsl(43,74%,49%)] flex items-center justify-center text-background hover:scale-110 transition-transform duration-300"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="font-body text-sm text-muted-foreground">
              © {currentYear} KRUTHI KAPTURES. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              Made with ❤️ by KRUTHI KAPTURES
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919743656533"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[hsl(43,74%,49%)] flex items-center justify-center text-background shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow z-40"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;