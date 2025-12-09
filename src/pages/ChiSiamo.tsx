import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Gem } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import staff1 from "@/assets/staff-1.jpg";
import staff2 from "@/assets/staff-2.jpg";
import staff3 from "@/assets/staff-3.jpg";

const values = [
  {
    icon: Award,
    title: "Eccellenza",
    description: "Ogni dettaglio è curato con la massima attenzione per garantire risultati impeccabili.",
  },
  {
    icon: Heart,
    title: "Passione",
    description: "L'amore per il nostro lavoro si riflette in ogni servizio che offriamo.",
  },
  {
    icon: Gem,
    title: "Qualità Premium",
    description: "Utilizziamo solo prodotti di altissima qualità per i nostri clienti.",
  },
];

const team = [
  {
    name: "Alessandra Verdi",
    role: "Direttrice Creativa",
    image: staff1,
    description: "Con oltre 20 anni di esperienza, Alessandra guida il team con visione e creatività.",
  },
  {
    name: "Marco Fontana",
    role: "Master Stylist",
    image: staff2,
    description: "Specializzato in tagli maschili e tecniche moderne di barbering.",
  },
  {
    name: "Sofia Romano",
    role: "Color Specialist",
    image: staff3,
    description: "Artista del colore, crea sfumature uniche e personalizzate.",
  },
];

export default function ChiSiamo() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hair do top salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-black/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            La Nostra Storia
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Chi <span className="text-gradient-gold italic">Siamo</span>
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Oltre 35 anni di passione, eleganza e dedizione alla bellezza
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left opacity-0">
              <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
                Dal 1989
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
                Una Tradizione di Eccellenza
              </h2>
              <div className="space-y-6 font-cormorant text-lg text-foreground/70 leading-relaxed">
                <p>
                  Hair do top nasce nel cuore di Milano nel 1989, dalla visione di creare
                  un luogo dove l'arte dell'hairstyling incontra il lusso più raffinato.
                </p>
                <p>
                  Quello che è iniziato come un piccolo atelier di bellezza è diventato
                  oggi un punto di riferimento nel panorama italiano della cura del capello,
                  con tre sedi esclusive nelle città più prestigiose.
                </p>
                <p>
                  La nostra filosofia si basa sulla convinzione che ogni cliente meriti
                  un'esperienza unica, personalizzata e indimenticabile. Ogni visita nel
                  nostro salone è un viaggio nel mondo della bellezza.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right opacity-0">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Hair do top history"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary/30" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              I Nostri Valori
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="luxury-card p-10 text-center animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-cormorant text-lg text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              Il Team
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              I Nostri Artisti
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="font-playfair text-2xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-cormorant text-lg text-primary mb-4">
                  {member.role}
                </p>
                <p className="font-cormorant text-foreground/60">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-champagne">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-deep-black mb-6">
            Vieni a Conoscerci
          </h2>
          <p className="font-cormorant text-xl text-dark-gold max-w-xl mx-auto mb-10">
            Scopri di persona l'atmosfera unica dei nostri saloni
          </p>
          <Button variant="champagne" size="xl" asChild className="bg-deep-black text-champagne hover:bg-deep-black/90">
            <Link to="/sedi">Trova la Tua Sede</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
