import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle, ChevronUp } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const locations = [{
  city: "Acerra",
  name: "Sede Acerra",
  address: "Via Francesco Castaldi, 12",
  cap: "80011",
  province: "NA",
  phone: "+39 081 062 3508",
  whatsapp: "393891716135",
  hours: "Mar-Sab: 9:00-18:30 | Dom-Lun: Chiuso",
  featured: true
}, {
  city: "Afragola",
  name: "Sede Le Porte di Napoli",
  address: "Via Santa Maria la Nova, 1",
  cap: "80021",
  province: "NA",
  phone: "+39 081 860 7157",
  whatsapp: "393511531005",
  hours: "Lun/Dom: 10:00-19:30 | Mar-Sab: 9:00-19:30",
  featured: false
}];

export default function Sedi() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-soft-black to-background" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p 
            className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Dove Trovarci
          </motion.p>
          <motion.h1 
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Le Nostre <span className="text-gradient-gold italic">Sedi</span>
          </motion.h1>
          <motion.p 
            className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Due location esclusive in provincia di Napoli
          </motion.p>
        </div>
      </section>

      {/* Locations Grid */}
      <section id="sedi-cards" className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <ScrollReveal key={location.city} delay={index * 0.15} direction={index === 0 ? "left" : "right"}>
                <motion.div 
                  className="luxury-card p-8 lg:p-10 ring-1 ring-primary/30 h-full"
                  whileHover={{ y: -8, borderColor: "hsl(40, 45%, 59%)", boxShadow: "0 20px 60px hsl(40 45% 59% / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-2">
                    {location.name}
                  </h2>
                  <p className="font-cormorant text-primary text-lg mb-8">{location.city}</p>

                  <div className="space-y-6 mb-10">
                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-cormorant text-lg text-foreground">
                          {location.address}
                        </p>
                        <p className="font-cormorant text-foreground/60">
                          {location.cap} {location.city} ({location.province})
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="font-cormorant text-lg text-foreground">
                        {location.phone}
                      </p>
                    </motion.div>

                    <motion.div 
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="font-cormorant text-foreground/70">
                        {location.hours}
                      </p>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="luxury" size="lg" className="w-full" asChild>
                        <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          Chiama Ora
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                        <a href={`https://wa.me/${location.whatsapp}?text=${encodeURIComponent("Ciao! Vorrei prenotare un appuntamento. Grazie!")}`} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Prenota su WhatsApp
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-soft-black">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-foreground gold-underline inline-block pb-4">
              Mappa delle Sedi
            </h2>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mappa Acerra */}
            <ScrollReveal direction="left">
              <h3 className="font-playfair text-xl text-primary mb-4 text-center">Sede Acerra</h3>
              <motion.div 
                className="aspect-[4/3] w-full overflow-hidden border border-primary/20"
                whileHover={{ borderColor: "hsl(40, 45%, 59%)" }}
                transition={{ duration: 0.3 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8!2d14.3714!3d40.9452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9c7e4e8b0001%3A0x1234567890abcdef!2sVia%20Francesco%20Castaldi%2C%2012%2C%2080011%20Acerra%20NA!5e0!3m2!1sit!2sit!4v1709123456789!5m2!1sit!2sit" 
                  width="100%" 
                  height="100%" 
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)"
                  }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Mappa Sede Acerra" 
                />
              </motion.div>
            </ScrollReveal>
            
            {/* Mappa Afragola */}
            <ScrollReveal direction="right">
              <h3 className="font-playfair text-xl text-primary mb-4 text-center">Sede Le Porte di Napoli</h3>
              <motion.div 
                className="aspect-[4/3] w-full overflow-hidden border border-primary/20"
                whileHover={{ borderColor: "hsl(40, 45%, 59%)" }}
                transition={{ duration: 0.3 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.5!2d14.3128!3d40.9223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9d4e8b0001%3A0xabcdef1234567890!2sVia%20Santa%20Maria%20la%20Nova%2C%201%2C%2080021%20Afragola%20NA!5e0!3m2!1sit!2sit!4v1709123456790!5m2!1sit!2sit" 
                  width="100%" 
                  height="100%" 
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)"
                  }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Mappa Sede Afragola" 
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-6">
              Prenota il Tuo Appuntamento
            </h2>
            <p className="font-cormorant text-xl text-foreground/70 max-w-xl mx-auto mb-10">
              Contattaci per prenotare una consulenza gratuita presso la sede più vicina a te
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="luxury" 
                  size="xl" 
                  onClick={() => document.getElementById('sedi-cards')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Scegli la Sede
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
