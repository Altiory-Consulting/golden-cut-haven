import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Gem, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import maleDirector from "@/assets/team/male-director.jpg";
import maleStylist from "@/assets/team/male-stylist.jpg";
import femaleStylist1 from "@/assets/team/female-stylist-1.jpg";
import femaleStylist2 from "@/assets/team/female-stylist-2.jpg";
const values = [{
  icon: Award,
  title: "Eccellenza",
  description: "Ogni dettaglio è curato con la massima attenzione per garantire risultati impeccabili."
}, {
  icon: Heart,
  title: "Passione",
  description: "L'amore per il nostro lavoro si riflette in ogni servizio che offriamo."
}, {
  icon: Gem,
  title: "Qualità Premium",
  description: "Utilizziamo solo prodotti di altissima qualità per i nostri clienti."
}];
const teamAcerra = [{
  name: "Raffaele",
  role: "Art Hair Director",
  image: maleDirector
}, {
  name: "Anna",
  role: "Stylist",
  image: femaleStylist1
}, {
  name: "Giusy",
  role: "Stylist",
  image: femaleStylist1
}, {
  name: "Serena",
  role: "Stylist",
  image: femaleStylist2
}];
const teamIpercoop = [{
  name: "Nando",
  role: "Art Hair Director",
  image: maleDirector
}, {
  name: "Matteo",
  role: "Stylist",
  image: maleStylist
}, {
  name: "Giuliana",
  role: "Stylist",
  image: femaleStylist1
}, {
  name: "Roberto",
  role: "Stylist",
  image: maleStylist
}, {
  name: "Carmela",
  role: "Stylist",
  image: femaleStylist1
}, {
  name: "Sofia",
  role: "Salon Assistant",
  image: femaleStylist2
}, {
  name: "Elena",
  role: "Salon Assistant",
  image: femaleStylist2
}, {
  name: "Emanuele",
  role: "Receptionist",
  image: maleStylist
}];
export default function ChiSiamo() {
  return <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/chi-siamo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-deep-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{
          animationDelay: "0.2s"
        }}>
            La Nostra Storia
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in opacity-0" style={{
          animationDelay: "0.4s"
        }}>
            Chi <span className="text-gradient-gold italic">Siamo</span>
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0" style={{
          animationDelay: "0.6s"
        }}>Oltre 10 anni di passione, eleganza e dedizione alla bellezza</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left opacity-0">
              <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
                Dal 2019
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
                La Nostra Storia: Dove Tutto È Iniziato
              </h2>
              <div className="space-y-6 font-cormorant text-lg text-foreground/70 leading-relaxed">
                <p>
                  Nel 2019, dopo anni trascorsi fianco a fianco come colleghi, <strong className="text-foreground">Raffaele Sassone</strong> e <strong className="text-foreground">Nando Fornaro</strong> hanno deciso di trasformare un sogno condiviso in realtà.
                </p>
                <p>
                  Per anni avevano lavorato nello stesso salone, crescendo, imparando, affinando tecnica e visione. Quel luogo non era solo un posto di lavoro: era il simbolo di un percorso, di una passione che li univa e che meritava un futuro ancora più grande.
                </p>
                <p>
                  Così, con coraggio e determinazione, hanno scelto di rilevare il salone in cui erano nati professionalmente… e di rivoluzionarlo completamente. Nuova identità, nuovi servizi, nuovi standard: ogni dettaglio è stato ripensato per offrire un'esperienza diversa, più elegante, più ricercata, più autentica.
                </p>
                <p>
                  Il risultato? Un salone che non era più soltanto il punto di arrivo del loro percorso, ma il punto di partenza di una visione tutta nuova.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right opacity-0">
              <div className="aspect-[4/5] overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/salone-interno.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary/30" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Continuation Section */}
      <section className="py-24 lg:py-32 bg-soft-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 font-cormorant text-lg md:text-xl text-foreground/70 leading-relaxed text-center">
              <p>
                Negli anni, grazie alla dedizione, all'amore per il mestiere e alla fiducia dei clienti, il sogno ha continuato a crescere.
              </p>
              <p className="text-primary font-playfair text-2xl md:text-3xl">
                E nel 2025 è arrivato il momento di compiere un nuovo passo:
              </p>
              <p>
                L'apertura di una seconda sede, simbolo dell'espansione di un progetto che non si è mai fermato e che continua a evolversi, giorno dopo giorno.
              </p>
              <p>
                Oggi, <strong className="text-foreground">Raffaele</strong> e <strong className="text-foreground">Nando</strong> guidano una realtà che unisce professionalità, cura e un'idea di bellezza che va oltre il semplice taglio: è un luogo dove le persone si sentono ascoltate, valorizzate e trasformate.
              </p>
              <p className="text-primary italic text-2xl font-playfair pt-8">
                "E questa, per noi, è solo l'inizio."
              </p>
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
            {values.map((value, index) => <div key={value.title} className="luxury-card p-10 text-center animate-fade-in opacity-0" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-cormorant text-lg text-foreground/60 leading-relaxed">
                  {value.description}
                </p>
              </div>)}
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

          {/* Sede Acerra */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-playfair text-2xl md:text-3xl text-foreground">
                Sede Acerra
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamAcerra.map((member, index) => <div key={member.name} className="luxury-card p-6 text-center animate-fade-in opacity-0 hover:border-primary/40 transition-colors" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-playfair text-xl text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="font-cormorant text-primary">
                    {member.role}
                  </p>
                </div>)}
            </div>
          </div>

          {/* Sede Ipercoop */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-playfair text-2xl md:text-3xl text-foreground">
                Sede Ipercoop
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamIpercoop.map((member, index) => <div key={member.name} className="luxury-card p-6 text-center animate-fade-in opacity-0 hover:border-primary/40 transition-colors" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-playfair text-xl text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="font-cormorant text-primary">
                    {member.role}
                  </p>
                </div>)}
            </div>
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
    </div>;
}