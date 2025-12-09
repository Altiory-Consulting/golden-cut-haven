import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, Leaf, Sparkles, Heart } from "lucide-react";
import hairSpaImage from "@/assets/hair-spa.jpg";

const treatments = [
  {
    icon: Droplets,
    title: "Rituale Idratazione Profonda",
    duration: "60 min",
    price: "€85",
    description: "Un bagno di idratazione con oli pregiati e maschere nutrienti per capelli secchi e danneggiati.",
  },
  {
    icon: Leaf,
    title: "Trattamento Detox & Purificante",
    duration: "45 min",
    price: "€65",
    description: "Pulizia profonda del cuoio capelluto con argille naturali e oli essenziali purificanti.",
  },
  {
    icon: Sparkles,
    title: "Rituale Luminosità",
    duration: "75 min",
    price: "€95",
    description: "Trattamento intensivo per donare brillantezza e vitalità ai capelli spenti.",
  },
  {
    icon: Heart,
    title: "Esperienza Relax Completa",
    duration: "90 min",
    price: "€120",
    description: "Il nostro trattamento signature con massaggio, aromaterapia e cura intensiva.",
  },
];

const benefits = [
  "Prodotti organici e naturali",
  "Ambiente rilassante e riservato",
  "Personale altamente qualificato",
  "Tecniche esclusive anti-stress",
  "Consulenza personalizzata",
  "Risultati visibili immediati",
];

export default function HairSpa() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src={hairSpaImage}
            alt="Hair Spa luxury treatment room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep-black/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Benessere & Relax
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Hair <span className="text-gradient-gold italic">Spa</span>
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Un'oasi di benessere dedicata alla cura e alla rigenerazione dei tuoi capelli
          </p>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button variant="luxury" size="xl" asChild>
              <Link to="/sedi">Prenota il Tuo Trattamento</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Un Viaggio Sensoriale per i Tuoi Capelli
            </h2>
            <p className="font-cormorant text-xl text-foreground/70 leading-relaxed mb-12">
              L'Hair Spa di Hair do top è un'esperienza unica che combina tecniche tradizionali 
              e innovative per rigenerare i capelli in profondità. In un ambiente esclusivo e 
              rilassante, il nostro team di esperti ti guiderà in un percorso di benessere 
              totale per capelli sani, luminosi e pieni di vita.
            </p>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              I Nostri Rituali
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              Trattamenti Esclusivi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.title}
                className="luxury-card p-8 lg:p-10 group animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500">
                    <treatment.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h3 className="font-playfair text-2xl text-foreground">
                        {treatment.title}
                      </h3>
                      <span className="font-playfair text-2xl text-primary">
                        {treatment.price}
                      </span>
                    </div>
                    <p className="font-cormorant text-primary/80 text-sm tracking-wider uppercase mb-3">
                      {treatment.duration}
                    </p>
                    <p className="font-cormorant text-lg text-foreground/60 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
                Perché Sceglierci
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
                L'Esperienza Hair Spa
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center space-x-3 animate-fade-in opacity-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-cormorant text-lg text-foreground/80">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img
                  src={hairSpaImage}
                  alt="Hair Spa environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-champagne">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-deep-black mb-6">
            Regala o Regalati un'Esperienza Unica
          </h2>
          <p className="font-cormorant text-xl text-dark-gold max-w-xl mx-auto mb-10">
            Prenota oggi il tuo trattamento Hair Spa e scopri il piacere di capelli rigenerati
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="champagne" size="xl" asChild className="bg-deep-black text-champagne hover:bg-deep-black/90">
              <Link to="/sedi">Prenota il Tuo Trattamento</Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-deep-black text-deep-black hover:bg-deep-black hover:text-champagne">
              <Link to="/listini">Vedi Tutti i Prezzi</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
