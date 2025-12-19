import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Gem, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import maleDirector from "@/assets/team/male-director.jpg";
import maleStylist from "@/assets/team/male-stylist.jpg";
import femaleStylist1 from "@/assets/team/female-stylist-1.jpg";
import femaleStylist2 from "@/assets/team/female-stylist-2.jpg";
import raffaeleImg from "@/assets/team/raffaele.png";
import annaImg from "@/assets/team/anna.png";
import nandoImg from "@/assets/team/nando.png";
import matteoImg from "@/assets/team/matteo.png";
import giulianaImg from "@/assets/team/giuliana.png";
import carmelaImg from "@/assets/team/carmela.png";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [{
  icon: Award,
  title: "Eccellenza",
  description: "Ogni dettaglio è curato con la massima attenzione per garantire risultati impeccabili."
}, {
  icon: Heart,
  title: "Passione",
  description: "L'amore per il nostro lavoro si riflette in ogni servizio che offriamo."
}, {
  icon: Gem,
  title: "Qualità Premium",
  description: "Utilizziamo solo prodotti di altissima qualità per i nostri clienti."
}];

const teamAcerra = [{
  name: "Raffaele",
  role: "Art Hair Director",
  image: raffaeleImg
}, {
  name: "Anna",
  role: "Stylist",
  image: annaImg
}, {
  name: "Giusy",
  role: "Stylist",
  image: femaleStylist1
}, {
  name: "Serena",
  role: "Stylist",
  image: femaleStylist2
}];

const teamIpercoop = [{
  name: "Nando",
  role: "Art Hair Director",
  image: nandoImg
}, {
  name: "Matteo",
  role: "Stylist",
  image: matteoImg
}, {
  name: "Giuliana",
  role: "Stylist",
  image: giulianaImg
}, {
  name: "Roberto",
  role: "Stylist",
  image: maleStylist
}, {
  name: "Carmela",
  role: "Stylist",
  image: carmelaImg
}, {
  name: "Sofia",
  role: "Salon Assistant",
  image: femaleStylist2
}, {
  name: "Elena",
  role: "Salon Assistant",
  image: femaleStylist2
}, {
  name: "Emanuele",
  role: "Receptionist",
  image: maleStylist
}];

export default function ChiSiamo() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <motion.div className="absolute inset-0" style={{ y: videoY }}>
          <video autoPlay loop muted playsInline className="w-full h-[120%] object-cover">
            <source src="/videos/chi-siamo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-deep-black/50" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <motion.p 
            className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            La Nostra Storia
          </motion.p>
          <motion.h1 
            className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Chi <span className="text-gradient-gold italic">Siamo</span>
          </motion.h1>
          <motion.p 
            className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Oltre 10 anni di passione, eleganza e dedizione alla bellezza
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
                Dal 2019
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
                La Nostra Storia: Dove Tutto È Iniziato
              </h2>
              <div className="space-y-6 font-cormorant text-lg text-foreground/70 leading-relaxed">
                <p>
                  Nel 2019, dopo anni trascorsi fianco a fianco come colleghi, <strong className="text-foreground">Raffaele Sassone</strong> e <strong className="text-foreground">Nando Fornaro</strong> hanno deciso di trasformare un sogno condiviso in realtà.
                </p>
                <p>
                  Per anni avevano lavorato nello stesso salone, crescendo, imparando, affinando tecnica e visione. Quel luogo non era solo un posto di lavoro: era il simbolo di un percorso, di una passione che li univa e che meritava un futuro ancora più grande.
                </p>
                <p>
                  Così, con coraggio e determinazione, hanno scelto di rilevare il salone in cui erano nati professionalmente… e di rivoluzionarlo completamente. Nuova identità, nuovi servizi, nuovi standard: ogni dettaglio è stato ripensato per offrire un'esperienza diversa, più elegante, più ricercata, più autentica.
                </p>
                <p>
                  Il risultato? Un salone che non era più soltanto il punto di arrivo del loro percorso, ma il punto di partenza di una visione tutta nuova.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="relative">
              <motion.div 
                className="aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="/videos/salone-interno.mp4" type="video/mp4" />
                </video>
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div 
                className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Continuation Section */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 font-cormorant text-lg md:text-xl text-foreground/70 leading-relaxed text-center">
              <ScrollReveal>
                <p>
                  Negli anni, grazie alla dedizione, all'amore per il mestiere e alla fiducia dei clienti, il sogno ha continuato a crescere.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <motion.p 
                  className="text-primary font-playfair text-2xl md:text-3xl"
                  whileInView={{ scale: [0.95, 1.02, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  E nel 2025 è arrivato il momento di compiere un nuovo passo:
                </motion.p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  L'apertura di una seconda sede, simbolo dell'espansione di un progetto che non si è mai fermato e che continua a evolversi, giorno dopo giorno.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p>
                  Oggi, <strong className="text-foreground">Raffaele</strong> e <strong className="text-foreground">Nando</strong> guidano una realtà che unisce professionalità, cura e un'idea di bellezza che va oltre il semplice taglio: è un luogo dove le persone si sentono ascoltate, valorizzate e trasformate.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <motion.p 
                  className="text-primary italic text-2xl font-playfair pt-8"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  "E questa, per noi, è solo l'inizio."
                </motion.p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              I Nostri Valori
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              Mission & Vision
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.15}>
                <motion.div 
                  className="luxury-card p-10 text-center h-full"
                  whileHover={{ y: -8, borderColor: "hsl(40, 45%, 59%)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-playfair text-2xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-cormorant text-lg text-foreground/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Il Team
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              I Nostri Artisti
            </h2>
          </ScrollReveal>

          {/* Sede Acerra */}
          <div className="mb-20">
            <ScrollReveal>
              <motion.div 
                className="flex items-center justify-center gap-3 mb-10"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-playfair text-2xl md:text-3xl text-foreground">
                  Sede Acerra
                </h3>
              </motion.div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamAcerra.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <motion.div 
                    className="luxury-card p-6 text-center"
                    whileHover={{ y: -8, borderColor: "hsl(40, 45%, 59%)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30"
                      whileHover={{ scale: 1.05, borderColor: "hsl(40, 45%, 59%)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </motion.div>
                    <h4 className="font-playfair text-xl text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="font-cormorant text-primary">
                      {member.role}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sede Ipercoop */}
          <div>
            <ScrollReveal>
              <motion.div 
                className="flex items-center justify-center gap-3 mb-10"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-playfair text-2xl md:text-3xl text-foreground">
                  Sede Ipercoop
                </h3>
              </motion.div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamIpercoop.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <motion.div 
                    className="luxury-card p-6 text-center"
                    whileHover={{ y: -8, borderColor: "hsl(40, 45%, 59%)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30"
                      whileHover={{ scale: 1.05, borderColor: "hsl(40, 45%, 59%)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </motion.div>
                    <h4 className="font-playfair text-xl text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="font-cormorant text-primary">
                      {member.role}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-champagne relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl text-deep-black mb-6">
              Vieni a Conoscerci
            </h2>
            <p className="font-cormorant text-xl text-dark-gold max-w-xl mx-auto mb-10">
              Scopri di persona l'atmosfera unica dei nostri saloni
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="champagne" size="xl" asChild className="bg-deep-black text-champagne hover:bg-deep-black/90">
                <Link to="/sedi">Trova la Tua Sede</Link>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
