import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Sparkles, Star, ChevronLeft, ChevronRight, MapPin, Phone, Clock, Instagram } from "lucide-react";
import ghdLogo from "@/assets/partners/ghd.png";
import kevinMurphyLogo from "@/assets/partners/kevin-murphy.png";
import leonorGreylLogo from "@/assets/partners/leonor-greyl.png";
import lorealLogo from "@/assets/partners/loreal.png";
import nakLogo from "@/assets/partners/nak.png";
import raffaeleImg from "@/assets/team/raffaele.png";
import annaImg from "@/assets/team/anna.png";
import nandoImg from "@/assets/team/nando.png";
import matteoImg from "@/assets/team/matteo.png";
import giulianaImg from "@/assets/team/giuliana.png";
import carmelaImg from "@/assets/team/carmela.png";
import giusyImg from "@/assets/team/giusy.png";
import serenaImg from "@/assets/team/serena.png";
import robertoImg from "@/assets/team/roberto.png";
import sofiaImg from "@/assets/team/sofia.png";
import elenaImg from "@/assets/team/elena.png";
import emanueleImg from "@/assets/team/emanuele.png";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FAQ } from "@/components/sections/FAQ";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { SocialSection } from "@/components/sections/SocialSection";
import { motion } from "framer-motion";
const teamMembers = [
// Art Hair Directors
{
  name: "Raffaele",
  role: "Art Hair Director",
  image: raffaeleImg,
  sede: "Acerra"
}, {
  name: "Nando",
  role: "Art Hair Director",
  image: nandoImg,
  sede: "Ipercoop"
},
// Sede Acerra
{
  name: "Anna",
  role: "Stylist",
  image: annaImg,
  sede: "Acerra"
}, {
  name: "Giusy",
  role: "Stylist",
  image: giusyImg,
  sede: "Acerra"
}, {
  name: "Serena",
  role: "Stylist",
  image: serenaImg,
  sede: "Acerra"
},
// Sede Ipercoop
{
  name: "Matteo",
  role: "Stylist",
  image: matteoImg,
  sede: "Ipercoop"
}, {
  name: "Giuliana",
  role: "Stylist",
  image: giulianaImg,
  sede: "Ipercoop"
}, {
  name: "Roberto",
  role: "Stylist",
  image: robertoImg,
  sede: "Ipercoop"
}, {
  name: "Carmela",
  role: "Stylist",
  image: carmelaImg,
  sede: "Ipercoop"
}, {
  name: "Sofia",
  role: "Salon Assistant",
  image: sofiaImg,
  sede: "Ipercoop"
}, {
  name: "Elena",
  role: "Salon Assistant",
  image: elenaImg,
  sede: "Ipercoop"
}, {
  name: "Emanuele",
  role: "Receptionist",
  image: emanueleImg,
  sede: "Ipercoop"
}];
const services = [{
  icon: Scissors,
  title: "Taglio",
  description: "Tagli su misura che esaltano la tua personalità"
}, {
  icon: Palette,
  title: "Colore",
  description: "Colorazioni artistiche con prodotti premium"
}, {
  icon: Sparkles,
  title: "Styling",
  description: "Acconciature per ogni occasione speciale"
}, {
  icon: Star,
  title: "Hair Spa",
  description: "Trattamenti rigeneranti per capelli sani"
}];
const reviews = [{
  name: "Giulia Rossi",
  text: "Un'esperienza di lusso assoluto. Il team è incredibilmente professionale e i risultati superano ogni aspettativa.",
  rating: 5
}, {
  name: "Marco Bianchi",
  text: "Finalmente ho trovato il mio salone di fiducia. Ambiente raffinato e personale competente.",
  rating: 5
}, {
  name: "Francesca Esposito",
  text: "Ogni visita è un momento di puro relax. I trattamenti Hair Spa sono semplicemente divini.",
  rating: 5
}];
const stats = [{
  value: "10+",
  label: "Anni di Esperienza"
}, {
  value: "50k+",
  label: "Clienti Soddisfatti"
}, {
  value: "9",
  label: "Stilisti Esperti"
}, {
  value: "2",
  label: "Sedi Esclusive"
}];
export default function Index() {
  const teamScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScrollButtons = () => {
    if (teamScrollRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = teamScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = teamScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);
  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamScrollRef.current) {
      const scrollAmount = 280;
      teamScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return <div className="bg-background">
      {/* Hero Section — Editorial Cinematic */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <motion.video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <source src="/videos/salone-acerra.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/85 via-deep-black/55 to-deep-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/40" />
          {/* Vignette */}
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,hsl(var(--deep-black))_100%)]" />
        </div>

        {/* Side editorial label */}

        {/* Right index */}
        <motion.div
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-10 text-right"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="font-playfair italic text-primary/70 text-sm tracking-widest">N° 01</p>
          <div className="w-px h-24 bg-gradient-to-b from-primary/60 to-transparent ml-auto mt-3" />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
          <div className="max-w-5xl">
            {/* Kicker */}

            {/* Massive editorial headline */}
            <h1 className="font-playfair text-foreground leading-[0.92] tracking-tight mb-10">
              <motion.span
                className="block text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5rem] xl:text-[11rem] font-light"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                Hair do
              </motion.span>
              <motion.span
                className="block italic text-gradient-gold text-[22vw] sm:text-[16vw] md:text-[13vw] lg:text-[12rem] xl:text-[14rem] -mt-4 md:-mt-8 pl-[10vw] md:pl-[18vw]"
                initial={{ opacity: 0, y: 80, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: 'normal' }}
                transition={{ delay: 0.55, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                top.
              </motion.span>
            </h1>

            {/* Two-column footer of hero */}
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end mt-12 md:mt-16">
              <motion.p
                className="font-cormorant text-lg md:text-xl text-foreground/75 leading-relaxed max-w-md border-l border-primary/40 pl-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                L'arte della bellezza incontra l'eleganza senza tempo.
                Un'esperienza esclusiva dedicata alla cura dei tuoi capelli.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.7 }}
              >
                <Button variant="luxury" size="xl" asChild>
                  <Link to="/sedi">Prenota Appuntamento</Link>
                </Button>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/listini">Scopri i Servizi</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* Manifesto — Editorial intro */}
      <section className="relative bg-deep-black py-28 lg:py-40 overflow-hidden">
        {/* Giant outlined background word */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-playfair italic text-[20vw] leading-none whitespace-nowrap text-stroke-gold opacity-[0.08] select-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.08, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          couture
        </motion.span>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <p className="font-cormorant text-primary text-sm tracking-[0.4em] uppercase mb-6">
                — Il Nostro Manifesto
              </p>
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
                Bellezza <span className="italic text-gradient-gold">disegnata</span><br />
                su misura.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15} className="lg:col-span-6 lg:col-start-7">
              <p className="font-cormorant text-xl md:text-2xl text-foreground/70 leading-relaxed mb-8">
                Crediamo che ogni capello racconti una storia. La nostra missione è
                trasformare ogni visita in un rituale di stile, dove tecnica sartoriale
                e prodotti d'eccellenza si fondono in un'esperienza memorabile.
              </p>
              <div className="flex items-center gap-6">
                <span className="w-20 h-px bg-primary" />
                <p className="font-playfair italic text-primary text-lg">Hair do top — dal 2014</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-soft-black py-16 border-y border-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="font-playfair text-4xl md:text-5xl text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-cormorant text-lg text-foreground/60 tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-16 lg:mb-20">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              I Nostri Servizi
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Eccellenza & Stile
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div className="luxury-card p-8 text-center group h-full" whileHover={{
              y: -8,
              transition: {
                duration: 0.3
              }
            }}>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-accent group-hover:bg-primary/10 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <h3 className="font-playfair text-2xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="font-cormorant text-lg text-foreground/60">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>)}
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/listini">Vedi Tutti i Servizi</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-soft-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-16 lg:mb-20">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Il Nostro Team
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Artisti della Bellezza
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Left Arrow */}
            <motion.button onClick={() => scrollTeam('left')} className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-deep-black/80 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:border-primary ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button onClick={() => scrollTeam('right')} className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-deep-black/80 border border-primary/30 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:border-primary ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>

            <div ref={teamScrollRef} className="overflow-x-auto pb-6 px-8 scrollbar-hide">
              <div className="flex gap-6" style={{
              width: 'max-content'
            }}>
                {teamMembers.map((member, index) => <motion.div key={member.name + index} className="group relative overflow-hidden rounded-lg w-64 flex-shrink-0" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.05,
                duration: 0.4
              }} whileHover={{
                y: -8
              }}>
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-playfair text-lg text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="font-cormorant text-primary text-base">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/chi-siamo">Scopri il Team Completo</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Social Section */}
      <SocialSection />

      {/* Partners Section */}
      <section className="py-20 bg-soft-black border-t border-primary/10 overflow-hidden">
        <ScrollReveal className="container mx-auto px-6 mb-12">
          <p className="font-cormorant text-primary text-center text-lg tracking-[0.3em] uppercase">
            I Nostri Partner
          </p>
        </ScrollReveal>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {[...Array(6)].map((_, setIndex) => <div key={setIndex} className="flex items-center shrink-0">
                {[{
              src: lorealLogo,
              alt: "L'Oréal"
            }, {
              src: kevinMurphyLogo,
              alt: "Kevin Murphy"
            }, {
              src: leonorGreylLogo,
              alt: "Leonor Greyl"
            }, {
              src: ghdLogo,
              alt: "GHD"
            }, {
              src: nakLogo,
              alt: "NAK Hair"
            }].map((partner, index) => <motion.img key={`${setIndex}-${index}`} src={partner.src} alt={partner.alt} className="h-16 md:h-20 lg:h-24 w-auto object-contain mx-10 md:mx-14" whileHover={{
              scale: 1.1,
              opacity: 1
            }} initial={{
              opacity: 0.8
            }} transition={{
              duration: 0.3
            }} />)}
              </div>)}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      

      {/* Sedi Section */}
      <section className="py-24 lg:py-32 bg-gradient-champagne-luxe relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }} transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }} />
          <motion.div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-dark-gold blur-3xl" animate={{
          x: [0, -30, 0],
          y: [0, -50, 0]
        }} transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-deep-black mb-6">
                Le Nostre Sedi
              </h2>
              <p className="font-cormorant text-xl md:text-2xl text-dark-gold max-w-2xl mx-auto">
                Due location esclusive in provincia di Napoli
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sede Acerra */}
            <ScrollReveal delay={0.1} direction="left">
              <motion.div className="bg-deep-black/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 ring-1 ring-primary/30 h-full" whileHover={{
              y: -8,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <h3 className="font-playfair text-3xl text-champagne mb-2">Sede Acerra</h3>
                <p className="font-cormorant text-primary text-lg mb-6">Acerra</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-champagne/90 font-cormorant">Via Francesco Castaldi, 12</p>
                      <p className="text-champagne/60 font-cormorant text-sm">80011 Acerra (NA)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+390810623508" className="text-champagne/90 font-cormorant hover:text-primary transition-colors">
                      +39 081 062 3508
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-champagne/90 font-cormorant">Mar-Sab: 9:00-18:30<br />Dom-Lun: Chiuso</p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mb-6">
                  <a 
                    href="https://www.instagram.com/hairdotop_hair_beauty?igsh=bWN3d3QwN3BuZzRl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@hairdotop.beauty?_r=1&_t=ZN-92RXeCQsN7O" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f2ea] via-[#ff0050] to-black flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1 border-primary text-primary hover:bg-primary hover:text-deep-black">
                    <a href="https://wa.me/393891716135" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 border-champagne/50 text-champagne hover:bg-champagne hover:text-deep-black">
                    <Link to="/sedi">Info</Link>
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Sede Ipercoop */}
            <ScrollReveal delay={0.2} direction="right">
              <motion.div className="bg-deep-black/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 ring-1 ring-primary/30 h-full" whileHover={{
              y: -8,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <h3 className="font-playfair text-3xl text-champagne mb-2">Sede Le Porte di Napoli</h3>
                <p className="font-cormorant text-primary text-lg mb-6">Afragola</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-champagne/90 font-cormorant">Via Santa Maria la Nova, 1</p>
                      <p className="text-champagne/60 font-cormorant text-sm">80021 Afragola (NA)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+390818607157" className="text-champagne/90 font-cormorant hover:text-primary transition-colors">
                      +39 081 860 7157
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-champagne/90 font-cormorant">Lun/Dom: 10:00-19:30<br />Mar-Sab: 9:00-19:30</p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mb-6">
                  <a 
                    href="https://www.instagram.com/hairdotop_leportedinapoli?igsh=dXVveXJ4ajc0empq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@hairdotop?_r=1&_t=ZN-92RXaoydHGg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f2ea] via-[#ff0050] to-black flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1 border-primary text-primary hover:bg-primary hover:text-deep-black">
                    <a href="https://wa.me/393511531005" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1 border-champagne/50 text-champagne hover:bg-champagne hover:text-deep-black">
                    <Link to="/sedi">Info</Link>
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ className="bg-soft-black" />
    </div>;
}