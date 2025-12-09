import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const quickLinks = [
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Sedi", href: "/sedi" },
  { name: "Listini", href: "/listini" },
  { name: "Hair Spa", href: "/hair-spa" },
];

export function Footer() {
  return (
    <footer className="bg-soft-black border-t border-primary/20">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-playfair text-3xl tracking-wider text-primary"
            >
              Hair do top
            </Link>
            <p className="mt-6 text-foreground/60 font-cormorant text-lg leading-relaxed">
              L'eccellenza nella cura dei capelli dal 1985. Un'esperienza di
              lusso per la tua bellezza.
            </p>
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-primary mb-6">
              Esplora
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-cormorant text-lg text-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-xl text-primary mb-6">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-foreground/70">
                <Phone size={18} className="text-primary" />
                <span className="font-cormorant text-lg">+39 02 1234567</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground/70">
                <Mail size={18} className="text-primary" />
                <span className="font-cormorant text-lg">info@hairdotop.it</span>
              </li>
              <li className="flex items-start space-x-3 text-foreground/70">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="font-cormorant text-lg">
                  Via della Moda, 15
                  <br />
                  20121 Milano
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-xl text-primary mb-6">Orari</h4>
            <ul className="space-y-3 font-cormorant text-lg text-foreground/70">
              <li className="flex justify-between">
                <span>Lun - Ven</span>
                <span className="text-primary">9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato</span>
                <span className="text-primary">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span className="text-muted-foreground">Chiuso</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/50 font-cormorant text-sm tracking-wider">
              © 2024 Hair do top. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-foreground/50 hover:text-primary font-cormorant text-sm tracking-wider transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-foreground/50 hover:text-primary font-cormorant text-sm tracking-wider transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
