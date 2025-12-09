import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Sedi", href: "/sedi" },
  { name: "Listini", href: "/listini" },
  { name: "Hair Spa", href: "/hair-spa" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-deep-black/95 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="font-playfair text-2xl lg:text-3xl tracking-wider text-primary hover:text-accent transition-colors duration-300"
          >
            Hair do top
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-cormorant text-sm tracking-[0.2em] uppercase transition-all duration-300 hover-gold-glow",
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/sedi">Prenota</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-deep-black/98 backdrop-blur-lg transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "font-playfair text-2xl tracking-widest transition-all duration-300",
                location.pathname === item.href
                  ? "text-accent"
                  : "text-foreground hover:text-primary"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="luxury" size="xl" asChild className="mt-8">
            <Link to="/sedi">Prenota Appuntamento</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
