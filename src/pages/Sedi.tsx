import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

const locations = [
  {
    city: "Acerra",
    name: "Sede Acerra",
    address: "Via Francesco Castaldi, 12",
    cap: "80011",
    province: "NA",
    phone: "+39 081 0000000",
    hours: "Lun-Ven: 9:00-20:00 | Sab: 9:00-19:00",
    mapUrl: "https://maps.google.com/?q=Via+Francesco+Castaldi+12+Acerra+NA",
    featured: true,
  },
  {
    city: "Afragola",
    name: "Sede Le Porte di Napoli",
    address: "Via Santa Maria la Nova, 1",
    cap: "80021",
    province: "NA",
    phone: "+39 081 0000000",
    hours: "Lun-Ven: 9:00-20:00 | Sab: 9:00-19:00",
    mapUrl: "https://maps.google.com/?q=Via+Santa+Maria+la+Nova+1+Afragola+NA",
    featured: false,
  },
];

export default function Sedi() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-soft-black to-background" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Dove Trovarci
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Le Nostre <span className="text-gradient-gold italic">Sedi</span>
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Due location esclusive in provincia di Napoli
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={location.city}
                className={`luxury-card p-8 lg:p-10 animate-fade-in opacity-0 ${
                  location.featured ? "lg:ring-2 lg:ring-primary/50" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {location.featured && (
                  <span className="inline-block font-cormorant text-xs tracking-[0.2em] uppercase text-primary bg-primary/10 px-4 py-2 mb-6">
                    Sede Principale
                  </span>
                )}
                
                <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-2">
                  {location.name}
                </h2>
                <p className="font-cormorant text-primary text-lg mb-8">{location.city}</p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-cormorant text-lg text-foreground">
                        {location.address}
                      </p>
                      <p className="font-cormorant text-foreground/60">
                        {location.cap} {location.city} ({location.province})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="font-cormorant text-lg text-foreground">
                      {location.phone}
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="font-cormorant text-foreground/70">
                      {location.hours}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button variant="luxury" size="lg" className="w-full" asChild>
                    <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Chiama Ora
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      Indicazioni
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-foreground gold-underline inline-block pb-4">
              Mappa delle Sedi
            </h2>
          </div>
          
          <div className="aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden border border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96534.23456789!2d14.3!3d40.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08ca5c38a6fd%3A0x4081f3c7bb69c72!2sAcerra%20NA!5e0!3m2!1sit!2sit!4v1709123456789!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa sedi Hair do top"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-6">
            Prenota il Tuo Appuntamento
          </h2>
          <p className="font-cormorant text-xl text-foreground/70 max-w-xl mx-auto mb-10">
            Contattaci per prenotare una consulenza gratuita presso la sede più vicina a te
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <a href="tel:+390212345678">
                <Phone className="w-5 h-5 mr-2" />
                Chiama per Prenotare
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
