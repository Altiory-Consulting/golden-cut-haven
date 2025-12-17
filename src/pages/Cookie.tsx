import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Cookie() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <h1 className="font-playfair text-4xl md:text-5xl text-foreground mb-8">
            Cookie Policy
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="prose prose-lg prose-invert max-w-none font-cormorant text-foreground/80 space-y-6">
            <p>
              Il sito Hair do top utilizza cookie per migliorare l'esperienza di navigazione degli utenti.
            </p>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando visita un sito web.
            </p>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Tipologie di Cookie Utilizzati</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie Tecnici:</strong> necessari per il corretto funzionamento del sito</li>
              <li><strong>Cookie Analitici:</strong> utilizzati per analizzare il traffico del sito in forma anonima</li>
            </ul>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Gestione dei Cookie</h2>
            <p>
              Puoi gestire le preferenze sui cookie attraverso le impostazioni del tuo browser. La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
            </p>

            <h2 className="font-playfair text-2xl text-primary mt-8 mb-4">Contatti</h2>
            <p>
              Per ulteriori informazioni, contattaci presso una delle nostre sedi.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
