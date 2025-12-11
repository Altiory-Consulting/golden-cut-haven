import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            I Nostri Servizi
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <span className="text-gradient-gold italic">Listino</span> Prezzi
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Servizi premium per un'esperienza di bellezza senza compromessi
          </p>
        </div>
      </section>

      {/* Le Porte di Napoli Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-4">
              Sede Le Porte di Napoli
            </h2>
            <p className="font-cormorant text-foreground/60">
              Centro Commerciale Le Porte di Napoli, Afragola
            </p>
            <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Feriali */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl text-foreground mb-2">Feriali</h3>
                <p className="font-cormorant text-foreground/50 text-sm">Lunedì - Venerdì</p>
              </div>
              <div className="luxury-card p-8">
                <div className="space-y-0">
                  {lePorteDiNapoliFeriali.map((service, index) => (
                    <div key={service.name}>
                      <div className="py-4 flex justify-between items-center">
                        <h4 className="font-playfair text-foreground">{service.name}</h4>
                        <span className="font-playfair text-primary ml-4 whitespace-nowrap">{service.price}</span>
                      </div>
                      {index < lePorteDiNapoliFeriali.length - 1 && (
                        <Separator className="bg-primary/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Festivi */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl text-foreground mb-2">Festivi</h3>
                <p className="font-cormorant text-foreground/50 text-sm">Sabato - Domenica</p>
              </div>
              <div className="luxury-card p-8">
                <div className="space-y-0">
                  {lePorteDiNapoliFestivi.map((service, index) => (
                    <div key={service.name}>
                      <div className="py-4 flex justify-between items-center">
                        <h4 className="font-playfair text-foreground">{service.name}</h4>
                        <span className="font-playfair text-primary ml-4 whitespace-nowrap">{service.price}</span>
                      </div>
                      {index < lePorteDiNapoliFestivi.length - 1 && (
                        <Separator className="bg-primary/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acerra Section */}
      <section className="py-16 lg:py-24 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-4">
              Sede Acerra
            </h2>
            <p className="font-cormorant text-foreground/60">
              Via Francesco Castaldi, 12, Acerra
            </p>
            <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
          </div>

          <div className="max-w-xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="luxury-card p-8">
              <div className="space-y-0">
                {acerraServices.map((service, index) => (
                  <div key={service.name}>
                    <div className="py-4 flex justify-between items-center">
                      <h4 className="font-playfair text-foreground">{service.name}</h4>
                      <span className="font-playfair text-primary ml-4 whitespace-nowrap">{service.price}</span>
                    </div>
                    {index < acerraServices.length - 1 && (
                      <Separator className="bg-primary/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-cormorant text-lg text-foreground/60 italic leading-relaxed">
              I prezzi indicati sono orientativi e possono variare in base alla lunghezza 
              e al tipo di capello. Per un preventivo personalizzato, ti invitiamo a 
              contattarci o a visitare il salone per una consulenza gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-champagne">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-deep-black mb-6">
            Prenota il Tuo Servizio
          </h2>
          <p className="font-cormorant text-xl text-dark-gold max-w-xl mx-auto mb-10">
            Contattaci per prenotare o per ricevere una consulenza personalizzata
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="champagne" size="xl" asChild className="bg-deep-black text-champagne hover:bg-deep-black/90">
              <Link to="/sedi">Prenota Appuntamento</Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-deep-black text-deep-black hover:bg-deep-black hover:text-champagne">
              <Link to="/hair-spa">Scopri Hair Spa</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
