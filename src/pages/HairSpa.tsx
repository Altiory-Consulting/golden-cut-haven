import { Button } from "@/components/ui/button";
import { Check, Sparkles, Leaf, Flame, MessageCircle, Gift, Clock, Star } from "lucide-react";
import hairSpaImage from "@/assets/hair-spa.jpg";

const benefits = [
  "Pulisce a fondo il cuoio capelluto",
  "Rimuove impurità, sebo e residui",
  "Riduce prurito, forfora o secchezza",
  "Rilassa la mente e la cute grazie ai massaggi mirati",
  "Rinforza i capelli dalla radice",
  "Dona leggerezza, volume e luminosità",
  "Fa durare più a lungo la sensazione di pulito",
];

const WHATSAPP_NUMBER = "393891716135";
const WHATSAPP_MESSAGE = "Ciao! Vorrei prenotare il trattamento Hair Spa in offerta a €65. Grazie!";

export default function HairSpa() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="bg-background">
      {/* Hero Section with Offer */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hair-spa.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-deep-black/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <Gift className="w-4 h-4 text-primary" />
            <span className="font-cormorant text-primary text-xs sm:text-sm tracking-wide">OFFERTA LIMITATA - 50% DI SCONTO</span>
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-foreground mb-4 sm:mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Hair <span className="text-gradient-gold italic">Spa</span>
          </h1>
          
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Il rituale di benessere che rigenera il cuoio capelluto e trasforma i tuoi capelli
          </p>

          {/* Price Display */}
          <div className="mb-8 sm:mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <span className="font-playfair text-2xl sm:text-3xl md:text-4xl text-foreground/50 line-through">€130</span>
              <span className="font-playfair text-5xl sm:text-6xl md:text-7xl text-primary">€65</span>
            </div>
            <p className="font-cormorant text-sm sm:text-base text-foreground/60">Risparmi €65 sul trattamento completo</p>
          </div>

          {/* WhatsApp CTA */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            <Button 
              size="xl" 
              asChild 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Prenota su WhatsApp
              </a>
            </Button>
            <p className="font-cormorant text-foreground/50 text-xs sm:text-sm mt-3 sm:mt-4">
              Rispondiamo entro pochi minuti
            </p>
          </div>
        </div>

        {/* Scroll indicator - hidden on very small screens */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 sm:py-12 bg-soft-black border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="font-cormorant text-foreground/70">Prodotti Premium</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-cormorant text-foreground/70">45 min di Relax</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-cormorant text-foreground/70">Risultati Immediati</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 sm:mb-8">
              Un'Esperienza di Puro Relax
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-foreground/70 leading-relaxed mb-6 sm:mb-8">
              Immagina di chiudere gli occhi e lasciarti avvolgere da una sensazione di leggerezza, 
              mentre il cuoio capelluto respira, si purifica e si rigenera.
            </p>
            <p className="font-cormorant text-lg sm:text-xl text-foreground/70 leading-relaxed mb-6 sm:mb-8">
              L'Hair Spa è molto più di un trattamento: è un'esperienza di puro relax dedicata 
              alla salute della cute e alla bellezza dei capelli.
            </p>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-16 sm:py-20 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square sm:aspect-[4/5] lg:aspect-square overflow-hidden">
                <img
                  src={hairSpaImage}
                  alt="Hair Spa treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element - hidden on mobile */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-40 sm:h-40 border border-primary/30 hidden sm:block" />
              
              {/* Price Badge on Image */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-primary text-deep-black px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                <p className="font-playfair text-xs sm:text-sm line-through opacity-70">€130</p>
                <p className="font-playfair text-2xl sm:text-3xl font-bold">€65</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <p className="font-cormorant text-primary text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                  Il Rituale
                </p>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 sm:mb-8">
                Come una Vera Spa per la Testa
              </h2>
              <p className="font-cormorant text-lg sm:text-xl text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                Questo rituale esclusivo deterge in profondità, elimina impurità, sebo e forfora, 
                e ristabilisce l'equilibrio naturale del cuoio capelluto.
              </p>
              <p className="font-cormorant text-lg sm:text-xl text-foreground/70 leading-relaxed mb-8 sm:mb-10">
                Attraverso massaggi mirati e prodotti specifici, la cute si distende, 
                i follicoli si riattivano, e i capelli ritrovano forza, vitalità e luce.
              </p>
              
              <Button 
                size="lg" 
                asChild 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-full sm:w-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Prenota Ora a €65
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-cormorant text-primary text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              I Benefici
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4">
              Cosa Fa per Te
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-3 sm:gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="luxury-card p-4 sm:p-6 flex items-center gap-4 sm:gap-5 animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/50 flex items-center justify-center flex-shrink-0 bg-primary/10">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="font-cormorant text-lg sm:text-xl text-foreground/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Try It */}
      <section className="py-16 sm:py-20 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              <p className="font-cormorant text-primary text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Perché Provarlo
              </p>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 sm:mb-8">
              Il Segreto per Capelli Perfetti
            </h2>
            <p className="font-cormorant text-lg sm:text-xl text-foreground/70 leading-relaxed mb-6 sm:mb-8">
              Quando il cuoio capelluto è sano, i capelli crescono più forti e più belli.
              L'Hair Spa è il segreto per capelli morbidi, setosi e pieni di energia — 
              perfetti da toccare e da guardare.
            </p>
            <p className="font-cormorant text-xl sm:text-2xl text-primary italic mb-4">
              È un momento solo per te.
            </p>
            <p className="font-cormorant text-lg sm:text-xl text-foreground/70">
              Un rituale che rigenera, rilassa e trasforma.
            </p>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-10 sm:mt-12" />
          </div>
        </div>
      </section>

      {/* In Brief */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card p-6 sm:p-10 lg:p-14 text-center">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                <p className="font-cormorant text-accent text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                  In Breve
                </p>
              </div>
              <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-4 sm:mb-6">
                L'Hair Spa è una coccola profonda che purifica la cute, 
                rinforza i capelli e regala una piacevole sensazione di benessere immediato.
              </p>
              <p className="font-playfair text-lg sm:text-xl md:text-2xl text-primary">
                Leggerezza, luminosità, volume: tutto in un unico trattamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-soft-black to-deep-black">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <Gift className="w-4 h-4 text-primary" />
              <span className="font-cormorant text-primary text-xs sm:text-sm tracking-wide">OFFERTA SPECIALE</span>
            </div>
            
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
              Non Perdere Questa Occasione
            </h2>
            
            <p className="font-cormorant text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto mb-8 sm:mb-10">
              Prenota oggi il tuo trattamento Hair Spa e scopri il piacere di capelli rigenerati
            </p>

            {/* Price Display */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <span className="font-playfair text-2xl sm:text-3xl text-foreground/50 line-through">€130</span>
                <span className="font-playfair text-5xl sm:text-6xl text-primary">€65</span>
              </div>
              <p className="font-cormorant text-sm sm:text-base text-foreground/60">Sconto del 50% - Offerta limitata</p>
            </div>

            <Button 
              size="xl" 
              asChild 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 rounded-full shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Prenota Subito su WhatsApp
              </a>
            </Button>
            
            <p className="font-cormorant text-foreground/50 text-xs sm:text-sm mt-4 sm:mt-6">
              Clicca il pulsante per aprire WhatsApp e prenotare direttamente
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
