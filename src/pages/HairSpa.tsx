import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Sparkles, Leaf, Flame } from "lucide-react";
import hairSpaImage from "@/assets/hair-spa.jpg";

const benefits = [
  "Pulisce a fondo il cuoio capelluto",
  "Rimuove impurità, sebo e residui",
  "Riduce prurito, forfora o secchezza",
  "Rilassa la mente e la cute grazie ai massaggi",
  "Rinforza i capelli dalla radice",
  "Dona leggerezza, volume e luminosità",
  "Fa durare più a lungo la sensazione di pulito",
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
            ✨ Benessere & Relax
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Hair <span className="text-gradient-gold italic">Spa</span>
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            La tua testa merita un'oasi di benessere
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
              Un'Esperienza di Puro Relax
            </h2>
            <p className="font-cormorant text-xl text-foreground/70 leading-relaxed mb-8">
              Immagina di chiudere gli occhi e lasciarti avvolgere da una sensazione di leggerezza, 
              mentre il cuoio capelluto respira, si purifica e si rigenera.
            </p>
            <p className="font-cormorant text-xl text-foreground/70 leading-relaxed mb-8">
              L'Hair Spa è molto più di un trattamento: è un'esperienza di puro relax dedicata 
              alla salute della cute e alla bellezza dei capelli.
            </p>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img
                  src={hairSpaImage}
                  alt="Hair Spa treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-primary/30" />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase">
                  Il Rituale
                </p>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
                Come una Vera Spa per la Testa
              </h2>
              <p className="font-cormorant text-xl text-foreground/70 leading-relaxed mb-8">
                Questo rituale esclusivo deterge in profondità, elimina impurità, sebo e forfora, 
                e ristabilisce l'equilibrio naturale del cuoio capelluto.
              </p>
              <p className="font-cormorant text-xl text-foreground/70 leading-relaxed">
                Attraverso massaggi mirati e prodotti specifici, la cute si distende, 
                i follicoli si riattivano, e i capelli ritrovano forza, vitalità e luce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
              💆‍♀️ I Benefici
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              Cosa Fa per Te
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="luxury-card p-6 flex items-center gap-5 animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-cormorant text-xl text-foreground/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Try It */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf className="w-8 h-8 text-primary" />
              <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase">
                🌿 Perché Provarlo
              </p>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
              Il Segreto per Capelli Perfetti
            </h2>
            <p className="font-cormorant text-xl text-foreground/70 leading-relaxed mb-8">
              Quando il cuoio capelluto è sano, i capelli crescono più forti e più belli.
              L'Hair Spa è il segreto per capelli morbidi, setosi e pieni di energia — 
              perfetti da toccare e da guardare.
            </p>
            <p className="font-cormorant text-2xl text-primary italic mb-4">
              È un momento solo per te.
            </p>
            <p className="font-cormorant text-xl text-foreground/70">
              Un rituale che rigenera, rilassa e trasforma.
            </p>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-12" />
          </div>
        </div>
      </section>

      {/* In Brief */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card p-10 lg:p-14 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Flame className="w-8 h-8 text-accent" />
                <p className="font-cormorant text-accent text-lg tracking-[0.3em] uppercase">
                  🔥 In Breve
                </p>
              </div>
              <p className="font-cormorant text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-6">
                L'Hair Spa è una coccola profonda che purifica la cute, 
                rinforza i capelli e regala una piacevole sensazione di benessere immediato.
              </p>
              <p className="font-playfair text-xl md:text-2xl text-primary">
                Leggerezza, luminosità, volume: tutto in un unico trattamento.
              </p>
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
