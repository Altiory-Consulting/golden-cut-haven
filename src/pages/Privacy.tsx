import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <h1 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
            Privacy Policy
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="prose prose-lg prose-invert max-w-none font-cormorant text-foreground/80 space-y-6">
            <p>
              Hair do top rispetta la privacy dei propri clienti e si impegna a proteggere i dati personali raccolti attraverso il sito web e i servizi offerti.
            </p>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Dati Raccolti</h2>
            <p>
              Raccogliamo solo i dati necessari per fornire i nostri servizi: nome, cognome, numero di telefono, indirizzo email e preferenze di prenotazione.
            </p>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Utilizzo dei Dati</h2>
            <p>
              I dati raccolti vengono utilizzati esclusivamente per:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestire le prenotazioni e gli appuntamenti</li>
              <li>Inviare conferme e promemoria</li>
              <li>Migliorare i nostri servizi</li>
              <li>Comunicazioni relative ai trattamenti richiesti</li>
            </ul>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Contatti</h2>
            <p>
              Per qualsiasi domanda relativa alla privacy, contattaci presso una delle nostre sedi o tramite WhatsApp.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
