import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const pricingCategories = [
  {
    title: "Donna",
    services: [
      { name: "Taglio", price: "€45", description: "Consulenza, shampoo, taglio e piega" },
      { name: "Piega", price: "da €30", description: "Styling professionale" },
      { name: "Colore", price: "da €60", description: "Tinta completa con prodotti premium" },
      { name: "Colpi di Sole", price: "da €80", description: "Schiariture naturali e luminose" },
      { name: "Balayage", price: "da €120", description: "Tecnica sfumata hand-painted" },
      { name: "Shatush", price: "da €100", description: "Effetto degradé naturale" },
      { name: "Trattamento Cheratina", price: "€150", description: "Lisciatura e ricostruzione" },
      { name: "Piega Sposa", price: "da €150", description: "Acconciatura evento speciale" },
    ],
  },
  {
    title: "Uomo",
    services: [
      { name: "Taglio Classic", price: "€30", description: "Taglio tradizionale con rifinitura" },
      { name: "Taglio & Barba", price: "€45", description: "Servizio completo di grooming" },
      { name: "Barba Design", price: "€20", description: "Definizione e styling barba" },
      { name: "Colore Uomo", price: "da €40", description: "Copertura grigi o tinta fashion" },
      { name: "Trattamento Scalpo", price: "€35", description: "Cura anticaduta e nutriente" },
      { name: "Taglio Premium", price: "€50", description: "Con massaggio e trattamento" },
    ],
  },
  {
    title: "Trattamenti",
    services: [
      { name: "Maschera Nutriente", price: "€25", description: "Idratazione profonda" },
      { name: "Olaplex Treatment", price: "€40", description: "Ricostruzione molecolare" },
      { name: "Hair Spa Relax", price: "€60", description: "Massaggio + trattamento completo" },
      { name: "Botox Capillare", price: "€80", description: "Ringiovanimento capillare" },
      { name: "Trattamento Anti-Crespo", price: "€70", description: "Disciplina e luminosità" },
    ],
  },
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

      {/* Pricing Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {pricingCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <div className="text-center mb-10">
                  <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-4">
                    {category.title}
                  </h2>
                  <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>

                <div className="luxury-card p-8">
                  <div className="space-y-0">
                    {category.services.map((service, index) => (
                      <div key={service.name}>
                        <div className="py-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-playfair text-lg text-foreground">
                              {service.name}
                            </h3>
                            <span className="font-playfair text-lg text-primary ml-4 whitespace-nowrap">
                              {service.price}
                            </span>
                          </div>
                          <p className="font-cormorant text-foreground/50 text-sm">
                            {service.description}
                          </p>
                        </div>
                        {index < category.services.length - 1 && (
                          <Separator className="bg-primary/10" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-soft-black">
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
