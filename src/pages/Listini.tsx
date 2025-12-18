import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const lePorteDiNapoliFeriali = [
  { name: "Shampoo + Piega", price: "€16" },
  { name: "Piega Extensions", price: "€22" },
  { name: "Taglio Donna", price: "€15" },
  { name: "Colore", price: "€27" },
  { name: "Color.me by Kevin Murphy", price: "€33" },
  { name: "Schiariture", price: "da €45" },
  { name: "Color.me Gloss", price: "€25" },
  { name: "Taglio Uomo", price: "€15" },
];

const lePorteDiNapoliFestivi = [
  { name: "Shampoo + Piega", price: "€19" },
  { name: "Piega Extensions", price: "€24" },
  { name: "Taglio Donna", price: "€15" },
  { name: "Colore", price: "€30" },
  { name: "Color.me by Kevin Murphy", price: "€33" },
  { name: "Schiariture", price: "da €55" },
  { name: "Color.me Gloss", price: "€25" },
  { name: "Taglio Uomo", price: "€20" },
];

const acerraServices = [
  { name: "Piega", price: "€14" },
  { name: "Taglio", price: "€12" },
  { name: "Ritocco Colore senza ammoniaca", price: "€24" },
  { name: "Gloss", price: "€20" },
  { name: "Schiariture Light (1/2 toni)", price: "€35" },
  { name: "Schiariture Strong (3/4 toni)", price: "€55" },
  { name: "Taglio Uomo", price: "€15" },
];

export default function Listini() {
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
            I Nostri Servizi
          </motion.p>
          <motion.h1 
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-gradient-gold italic">Listino</span> Prezzi
          </motion.h1>
          <motion.p 
            className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Servizi premium per un'esperienza di bellezza senza compromessi
          </motion.p>
        </div>
      </section>

      {/* Le Porte di Napoli Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-4">
              Sede Le Porte di Napoli
            </h2>
            <p className="font-cormorant text-foreground/60">
              Centro Commerciale Le Porte di Napoli, Afragola
            </p>
            <motion.div 
              className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Feriali */}
            <ScrollReveal direction="left">
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl text-foreground mb-2">Feriali</h3>
                <p className="font-cormorant text-foreground/50 text-sm">Lunedì - Venerdì</p>
              </div>
              <motion.div 
                className="luxury-card p-8"
                whileHover={{ borderColor: "hsl(40, 45%, 59%)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-0">
                  {lePorteDiNapoliFeriali.map((service, index) => (
                    <motion.div 
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <motion.div 
                        className="py-4 flex justify-between items-center"
                        whileHover={{ x: 5, backgroundColor: "hsl(40, 45%, 59% / 0.05)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-playfair text-foreground">{service.name}</h4>
                        <span className="font-playfair text-primary ml-4 whitespace-nowrap">{service.price}</span>
                      </motion.div>
                      {index < lePorteDiNapoliFeriali.length - 1 && (
                        <Separator className="bg-primary/10" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Festivi */}
            <ScrollReveal direction="right">
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl text-foreground mb-2">Festivi</h3>
                <p className="font-cormorant text-foreground/50 text-sm">Sabato - Domenica</p>
              </div>
              <motion.div 
                className="luxury-card p-8"
                whileHover={{ borderColor: "hsl(40, 45%, 59%)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-0">
                  {lePorteDiNapoliFestivi.map((service, index) => (
                    <motion.div 
                      key={service.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <motion.div 
                        className="py-4 flex justify-between items-center"
                        whileHover={{ x: 5, backgroundColor: "hsl(40, 45%, 59% / 0.05)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-playfair text-foreground">{service.name}</h4>
                        <span className="font-playfair text-primary ml-4 whitespace-nowrap">{service.price}</span>
                      </motion.div>
                      {index < lePorteDiNapoliFestivi.length - 1 && (
                        <Separator className="bg-primary/10" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Acerra Section */}
      <section className="py-16 lg:py-24 bg-soft-black">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-4">
              Sede Acerra
            </h2>
            <p className="font-cormorant text-foreground/60">
              Via Francesco Castaldi, 12, Acerra
            </p>
            <motion.div 
              className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </ScrollReveal>

          <ScrollReveal className="max-w-xl mx-auto">
            <motion.div 
              className="luxury-card p-8"
              whileHover={{ borderColor: "hsl(40, 45%, 59%)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-0">
                {acerraServices.map((service, index) => (
                  <motion.div 
                    key={service.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.div 
                      className="py-4 flex justify-between items-center"
                      whileHover={{ x: 5, backgroundColor: "hsl(40, 45%, 59% / 0.05)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-playfair text-foreground">{service.name}</h4>
                      <span className="font-playfair text-primary ml-4 whitespace-nowrap">{service.price}</span>
                    </motion.div>
                    {index < acerraServices.length - 1 && (
                      <Separator className="bg-primary/10" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <motion.p 
              className="font-cormorant text-lg text-foreground/60 italic leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              I prezzi indicati sono orientativi e possono variare in base alla lunghezza 
              e al tipo di capello. Per un preventivo personalizzato, ti invitiamo a 
              contattarci o a visitare il salone per una consulenza gratuita.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-champagne relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-dark-gold/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl text-deep-black mb-6">
              Prenota il Tuo Servizio
            </h2>
            <p className="font-cormorant text-xl text-dark-gold max-w-xl mx-auto mb-10">
              Contattaci per prenotare o per ricevere una consulenza personalizzata
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="champagne" size="xl" asChild className="bg-deep-black text-champagne hover:bg-deep-black/90">
                  <Link to="/sedi">Prenota Appuntamento</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="xl" asChild className="border-deep-black text-deep-black hover:bg-deep-black hover:text-champagne">
                  <Link to="/hair-spa">Scopri Hair Spa</Link>
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
