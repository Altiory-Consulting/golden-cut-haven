import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Clock, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const socialLinks = [{
  icon: Instagram,
  href: "https://instagram.com/hairdotop",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "https://facebook.com/hairdotop",
  label: "Facebook"
}];
const quickLinks = [{
  name: "Chi Siamo",
  href: "/chi-siamo"
}, {
  name: "Sedi",
  href: "/sedi"
}, {
  name: "Listini",
  href: "/listini"
}, {
  name: "Hair Spa",
  href: "/hair-spa"
}];
// TikTok icon component
const TikTokIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>;
const locations = [{
  name: "Sede Acerra",
  city: "Acerra",
  address: "Via Francesco Castaldi, 12",
  cap: "80011",
  province: "NA",
  phone: "+39 081 062 3508",
  whatsapp: "393891716135",
  instagram: "https://www.instagram.com/hairdotop_hair_beauty?igsh=bWN3d3QwN3BuZzRl",
  tiktok: "https://www.tiktok.com/@hairdotop.beauty?_r=1&_t=ZN-92RXeCQsN7O",
  hours: [{
    day: "Lunedì",
    time: "Chiuso"
  }, {
    day: "Mar - Sab",
    time: "9:00 - 18:30"
  }, {
    day: "Domenica",
    time: "Chiuso"
  }]
}, {
  name: "Sede Le Porte di Napoli",
  city: "Afragola",
  address: "Via Santa Maria la Nova, 1",
  cap: "80021",
  province: "NA",
  phone: "+39 081 860 7157",
  whatsapp: "393511531005",
  instagram: "https://www.instagram.com/hairdotop_leportedinapoli?igsh=dXVveXJ4ajc0empq",
  tiktok: "https://www.tiktok.com/@hairdotop?_r=1&_t=ZN-92RXaoydHGg",
  hours: [{
    day: "Lunedì",
    time: "10:00 - 19:30"
  }, {
    day: "Mar - Sab",
    time: "9:00 - 19:30"
  }, {
    day: "Domenica",
    time: "10:00 - 19:30"
  }]
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export function Footer() {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  return <footer className="bg-soft-black border-t border-primary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="font-playfair text-3xl tracking-wider text-primary group-hover:text-accent transition-colors duration-300">
                Hair do top
              </span>
              <motion.div className="h-0.5 bg-gradient-to-r from-primary to-accent mt-2" initial={{
              width: 0
            }} whileInView={{
              width: "100%"
            }} transition={{
              duration: 0.8,
              delay: 0.5
            }} />
            </Link>
            
            <p className="text-foreground/60 font-cormorant text-lg leading-relaxed max-w-xs">
              L'eccellenza nella cura dei capelli dal 2019. Un'esperienza di
              lusso per la tua bellezza.
            </p>

            {/* Decorative Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-cormorant text-sm text-primary">Premium Hair Care</span>
            </div>

            {/* Social Links */}
            
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:text-center md:flex md:flex-col md:items-center">
            <h4 className="font-playfair text-xl text-primary mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              Esplora
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => <motion.li key={link.name} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.3 + index * 0.1
            }}>
                  <Link to={link.href} className="font-cormorant text-lg text-foreground/70 hover:text-accent transition-all duration-300 inline-flex items-center gap-2 group">
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </motion.li>)}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={itemVariants}>
            <h4 className="font-playfair text-xl text-primary mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              Contatti & Orari
            </h4>
            <ul className="space-y-4">
              {locations.map((location, index) => <motion.li key={location.name} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.3 + index * 0.1
            }}>
                  <button onClick={() => setSelectedLocation(location)} className="font-cormorant text-lg text-foreground/70 hover:text-accent transition-all duration-300 text-left flex items-center gap-3 group w-full">
                    <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <MapPin size={14} className="text-primary" />
                    </span>
                    <span className="relative flex-1">
                      {location.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </motion.li>)}
            </ul>

            {/* Quick Contact */}
            
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="mt-16 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/50 font-cormorant text-sm tracking-wider">
              © {new Date().getFullYear()} Hair do top. Tutti i diritti riservati.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-foreground/50 hover:text-primary font-cormorant text-sm tracking-wider transition-colors relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              <span className="text-foreground/20">|</span>
              <Link to="/cookie" className="text-foreground/50 hover:text-primary font-cormorant text-sm tracking-wider transition-colors relative group">
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Location Popup */}
      <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
        <DialogContent className="bg-soft-black border-primary/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-primary">
              {selectedLocation?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedLocation && <motion.div className="space-y-6 mt-4" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }}>
              {/* Indirizzo */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-cormorant text-lg text-foreground">
                    {selectedLocation.address}
                  </p>
                  <p className="font-cormorant text-foreground/60">
                    {selectedLocation.cap} {selectedLocation.city} ({selectedLocation.province})
                  </p>
                </div>
              </div>

              {/* Telefono */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href={`tel:${selectedLocation.phone.replace(/\s/g, "")}`} className="font-cormorant text-lg text-foreground hover:text-accent transition-colors">
                  {selectedLocation.phone}
                </a>
              </div>

              {/* Orari */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  {selectedLocation.hours.map(h => <div key={h.day} className="flex justify-between font-cormorant text-lg">
                      <span className="text-foreground/70">{h.day}</span>
                      <span className={h.time === "Chiuso" ? "text-muted-foreground" : "text-primary"}>
                        {h.time}
                      </span>
                    </div>)}
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2 pb-4">
                <a href={selectedLocation.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href={selectedLocation.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f2ea] via-[#ff0050] to-black flex items-center justify-center hover:scale-110 transition-transform">
                  <TikTokIcon className="w-5 h-5 text-white" />
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="luxury" asChild>
                  <a href={`tel:${selectedLocation.phone.replace(/\s/g, "")}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Chiama Ora
                  </a>
                </Button>
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                  <a href={`https://wa.me/${selectedLocation.whatsapp}?text=${encodeURIComponent("Ciao! Vorrei prenotare un appuntamento. Grazie!")}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Prenota su WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>}
        </DialogContent>
      </Dialog>
    </footer>;
}