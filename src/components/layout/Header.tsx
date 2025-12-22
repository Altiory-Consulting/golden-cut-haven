import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    setIsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
          {/* Left: Mobile Menu Button (Sheet Trigger) */}
          <div className="flex items-center lg:w-1/3">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden text-primary hover:text-accent transition-colors">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-[300px] sm:w-[350px] bg-deep-black border-r border-primary/20 p-0"
              >
                <SheetHeader className="p-6 pb-4">
                  <SheetTitle className="flex justify-center">
                    <img
                      src={logo}
                      alt="Hair do top"
                      className="h-20 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                
                <Separator className="bg-primary/20" />
                
                <nav className="flex flex-col py-4">
                  {navigation.map((item, index) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-6 py-4 font-cormorant text-lg tracking-widest transition-all duration-300",
                          location.pathname === item.href
                            ? "text-accent bg-primary/10 border-l-2 border-accent"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {item.name}
                      </Link>
                      {index < navigation.length - 1 && (
                        <Separator className="bg-primary/10 mx-6" />
                      )}
                    </div>
                  ))}
                </nav>
                
                <Separator className="bg-primary/20" />
                
                <div className="p-6">
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    asChild 
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/sedi">Prenota Appuntamento</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Dropdown Menu */}
            <div className="hidden lg:block relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center gap-2 font-cormorant text-sm tracking-[0.2em] uppercase transition-all duration-300 hover-gold-glow",
                  isDropdownOpen ? "text-accent" : "text-foreground/80 hover:text-primary"
                )}
              >
                Menu
                <ChevronDown 
                  size={16} 
                  className={cn(
                    "transition-transform duration-300",
                    isDropdownOpen && "rotate-180"
                  )} 
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-4 w-56 bg-deep-black border border-primary/20 shadow-xl transition-all duration-300 z-50",
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                )}
              >
                <nav className="py-3">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-6 py-3 font-cormorant text-base tracking-wider transition-all duration-300",
                        location.pathname === item.href
                          ? "text-accent bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5",
                        isDropdownOpen 
                          ? "animate-fade-in opacity-0" 
                          : "opacity-0"
                      )}
                      style={{ 
                        animationDelay: isDropdownOpen ? `${index * 0.08}s` : "0s",
                        animationFillMode: "forwards"
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 group"
          >
            <img
              src={logo}
              alt="Hair do top"
              className="h-28 md:h-36 lg:h-48 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(196,164,106,0.6)] group-hover:scale-105 animate-fade-in opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            />
          </Link>

          {/* Right: CTA Button */}
          <div className="flex items-center justify-end lg:w-1/3">
            <Button variant="hero" size="lg" asChild className="hidden sm:inline-flex">
              <Link to="/sedi">Prenota</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}