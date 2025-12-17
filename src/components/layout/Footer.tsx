import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, MessageCircle, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const socialLinks = [{
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "#",
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
const locations = [{
  name: "Sede Acerra",
  city: "Acerra",
  address: "Via Francesco Castaldi, 12",
  cap: "80011",
  province: "NA",
  phone: "+39 081 062 3508",
  whatsapp: "393891716135",
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
export function Footer() {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  return <footer className="bg-soft-black border-t border-primary/20">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-playfair text-3xl tracking-wider text-primary">
              Hair do top
            </Link>
            <p className="mt-6 text-foreground/60 font-cormorant text-lg leading-relaxed">
              L'eccellenza nella cura dei capelli dal 2019. Un'esperienza di
              lusso per la tua bellezza.
            </p>
            <div className="flex space-x-4 mt-8">
              {socialLinks.map(social => <a key={social.label} href={social.href} className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label={social.label}>
                  <social.icon size={20} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl text-primary mb-6">
              Esplora
            </h4>
            <ul className="space-y-4">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="font-cormorant text-lg text-foreground/70 hover:text-accent transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contatti & Orari merged */}
          

          {/* Le Nostre Sedi */}
          <div>
            <h4 className="font-playfair text-xl text-primary mb-6">Contatti & Orari</h4>
            <ul className="space-y-4">
              {locations.map(location => <li key={location.name}>
                  <button onClick={() => setSelectedLocation(location)} className="font-cormorant text-lg text-foreground/70 hover:text-accent transition-colors duration-300 text-left underline-offset-4 hover:underline flex items-center gap-2">
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    {location.name}
                  </button>
                </li>)}
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
              <a href="#" className="text-foreground/50 hover:text-primary font-cormorant text-sm tracking-wider transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary font-cormorant text-sm tracking-wider transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Location Popup */}
      <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
        <DialogContent className="bg-soft-black border-primary/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-primary">
              {selectedLocation?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedLocation && <div className="space-y-6 mt-4">
              {/* Indirizzo */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${selectedLocation.phone.replace(/\s/g, "")}`} className="font-cormorant text-lg text-foreground hover:text-accent transition-colors">
                  {selectedLocation.phone}
                </a>
              </div>

              {/* Orari */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  {selectedLocation.hours.map(h => <div key={h.day} className="flex justify-between font-cormorant text-lg">
                      <span className="text-foreground/70">{h.day}</span>
                      <span className={h.time === "Chiuso" ? "text-muted-foreground" : "text-primary"}>
                        {h.time}
                      </span>
                    </div>)}
                </div>
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
            </div>}
        </DialogContent>
      </Dialog>
    </footer>;
}