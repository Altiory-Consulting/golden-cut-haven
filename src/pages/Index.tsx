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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
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
            <p className="font-cormorant text-primary text-lg md:text-xl tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Salone di Bellezza Premium
            </p>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Hair do{" "}
              <span className="text-gradient-gold italic">top</span>
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              L'arte della bellezza incontra l'eleganza senza tempo.
              Scopri un'esperienza esclusiva dedicata alla cura dei tuoi capelli.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
              <Button variant="luxury" size="xl" asChild>
                <Link to="/sedi">Prenota Appuntamento</Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/listini">Scopri i Servizi</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-soft-black py-16 border-y border-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-playfair text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="font-cormorant text-lg text-foreground/60 tracking-wider">
                  {stat.label}
                </p>
              </div>
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
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              I Nostri Servizi
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Eccellenza & Stile
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="luxury-card p-8 text-center group animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <h3 className="font-playfair text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-cormorant text-lg text-foreground/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/listini">Vedi Tutti i Servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Le Nostre Creazioni
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden aspect-[3/4] animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
              <img
                src={hairModel1}
                alt="Luxury hair styling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-playfair text-xl text-foreground">Styling Donna</p>
                <p className="font-cormorant text-primary">Onde Glamour</p>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[3/4] animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <img
                src={hairModel2}
                alt="Men's premium haircut"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-playfair text-xl text-foreground">Taglio Uomo</p>
                <p className="font-cormorant text-primary">Stile Contemporaneo</p>
              </div>
            </div>
            <div className="relative group overflow-hidden aspect-[3/4] md:col-span-2 lg:col-span-1 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              <img
                src={heroImage}
                alt="Luxury salon interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-playfair text-xl text-foreground">Il Nostro Salone</p>
                <p className="font-cormorant text-primary">Ambiente Esclusivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-soft-black border-t border-primary/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-10">
          <p className="font-cormorant text-primary text-center text-lg tracking-[0.3em] uppercase">
            I Nostri Partner
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-20 px-10">
                {[
                  { src: lorealLogo, alt: "L'Oréal" },
                  { src: kevinMurphyLogo, alt: "Kevin Murphy" },
                  { src: leonorGreylLogo, alt: "Leonor Greyl" },
                  { src: ghdLogo, alt: "GHD" },
                  { src: nakLogo, alt: "NAK Hair" },
                ].map((partner, index) => (
                  <img
                    key={`${setIndex}-${index}`}
                    src={partner.src}
                    alt={partner.alt}
                    className="h-10 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Testimonianze
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
              Cosa Dicono di Noi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="luxury-card p-8 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-champagne relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-dark-gold blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
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
        </div>
      </section>
    </div>
  );
}
