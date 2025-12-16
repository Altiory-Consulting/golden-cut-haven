import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Sparkles, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import hairModel1 from "@/assets/hair-model-1.jpg";
import hairModel2 from "@/assets/hair-model-2.jpg";
import ghdLogo from "@/assets/partners/ghd.png";
import kevinMurphyLogo from "@/assets/partners/kevin-murphy.png";
import leonorGreylLogo from "@/assets/partners/leonor-greyl.png";
import lorealLogo from "@/assets/partners/loreal.png";
import nakLogo from "@/assets/partners/nak.png";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxVideo } from "@/components/animations/ParallaxImage";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Taglio",
    description: "Tagli su misura che esaltano la tua personalità",
  },
  {
    icon: Palette,
    title: "Colore",
    description: "Colorazioni artistiche con prodotti premium",
  },
  {
    icon: Sparkles,
    title: "Styling",
    description: "Acconciature per ogni occasione speciale",
  },
  {
    icon: Star,
    title: "Hair Spa",
    description: "Trattamenti rigeneranti per capelli sani",
  },
];

const reviews = [
  {
    name: "Giulia Rossi",
    text: "Un'esperienza di lusso assoluto. Il team è incredibilmente professionale e i risultati superano ogni aspettativa.",
    rating: 5,
  },
  {
    name: "Marco Bianchi",
    text: "Finalmente ho trovato il mio salone di fiducia. Ambiente raffinato e personale competente.",
    rating: 5,
  },
  {
    name: "Francesca Milano",
    text: "Ogni visita è un momento di puro relax. I trattamenti Hair Spa sono semplicemente divini.",
    rating: 5,
  },
];

const stats = [
  { value: "10+", label: "Anni di Esperienza" },
  { value: "50k+", label: "Clienti Soddisfatti" },
  { value: "9", label: "Stilisti Esperti" },
  { value: "2", label: "Sedi Esclusive" },
];

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Parallax */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/salone-acerra.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/70 via-deep-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-deep-black/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-24">
          <div className="max-w-3xl">
            <motion.p 
              className="font-cormorant text-primary text-lg md:text-xl tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Salone di Bellezza Premium
            </motion.p>
            <motion.h1 
              className="font-playfair text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hair do{" "}
              <span className="text-gradient-gold italic">top</span>
            </motion.h1>
            <motion.p 
              className="font-cormorant text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              L'arte della bellezza incontra l'eleganza senza tempo.
              Scopri un'esperienza esclusiva dedicata alla cura dei tuoi capelli.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
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

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.2 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-soft-black py-16 border-y border-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <p className="font-playfair text-4xl md:text-5xl text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-cormorant text-lg text-foreground/60 tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  className="luxury-card p-8 text-center group h-full"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
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
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/listini">Vedi Tutti i Servizi</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Le Nostre Creazioni
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: hairModel1, title: "Styling Donna", subtitle: "Onde Glamour" },
              { src: hairModel2, title: "Taglio Uomo", subtitle: "Stile Contemporaneo" },
              { src: heroImage, title: "Il Nostro Salone", subtitle: "Ambiente Esclusivo" },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <motion.div 
                  className={`relative group overflow-hidden aspect-[3/4] ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-playfair text-xl text-foreground">{item.title}</p>
                    <p className="font-cormorant text-primary">{item.subtitle}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-soft-black border-t border-primary/10 overflow-hidden">
        <ScrollReveal className="container mx-auto px-6 mb-12">
          <p className="font-cormorant text-primary text-center text-lg tracking-[0.3em] uppercase">
            I Nostri Partner
          </p>
        </ScrollReveal>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center shrink-0">
                {[
                  { src: lorealLogo, alt: "L'Oréal" },
                  { src: kevinMurphyLogo, alt: "Kevin Murphy" },
                  { src: leonorGreylLogo, alt: "Leonor Greyl" },
                  { src: ghdLogo, alt: "GHD" },
                  { src: nakLogo, alt: "NAK Hair" },
                ].map((partner, index) => (
                  <motion.img
                    key={`${setIndex}-${index}`}
                    src={partner.src}
                    alt={partner.alt}
                    className="h-10 md:h-14 w-auto object-contain mx-12 md:mx-16"
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    initial={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed username="hairdotop" />

      {/* Reviews Section */}
      <section className="py-24 lg:py-32 relative bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Testimonianze
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Cosa Dicono di Noi
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ScrollReveal key={review.name} delay={index * 0.15}>
                <motion.div
                  className="luxury-card p-8 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="font-cormorant text-lg text-foreground/80 italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="font-playfair text-primary">{review.name}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ className="bg-soft-black" />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-champagne relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-dark-gold blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 12, 
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-deep-black mb-6">
              Vivi l'Esperienza
            </h2>
            <p className="font-cormorant text-xl md:text-2xl text-dark-gold max-w-2xl mx-auto mb-12">
              Prenota il tuo appuntamento e scopri il lusso di un salone d'eccellenza
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="champagne" size="xl" asChild className="bg-deep-black text-champagne hover:bg-deep-black/90">
                <Link to="/sedi">Trova la Sede più Vicina</Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-deep-black text-deep-black hover:bg-deep-black hover:text-champagne">
                <Link to="/chi-siamo">Scopri Chi Siamo</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
