import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Come posso prenotare un appuntamento?',
    answer: 'Puoi prenotare facilmente tramite WhatsApp cliccando sui pulsanti presenti sul sito, oppure chiamando direttamente il salone della sede più vicina a te. Rispondiamo in pochi minuti!',
  },
  {
    question: 'Quanto dura un appuntamento medio?',
    answer: 'La durata varia in base al servizio: un taglio richiede circa 30-45 minuti, una colorazione 1.5-2 ore, mentre trattamenti completi come Hair Spa richiedono circa 45 minuti.',
  },
  {
    question: 'Devo pagare un acconto per prenotare?',
    answer: 'No, non richiediamo acconti. Ti chiediamo solo di avvisarci con almeno 24 ore di anticipo in caso di disdetta, per permetterci di gestire al meglio gli appuntamenti.',
  },
  {
    question: 'Quali metodi di pagamento accettate?',
    answer: 'Accettiamo contanti, carte di credito/debito, Bancomat e pagamenti digitali come Satispay. Tutto per la tua comodità!',
  },
  {
    question: 'Offrite servizi per bambini?',
    answer: 'Sì! Abbiamo servizi dedicati per bambini e ragazzi con prezzi speciali. I nostri stilisti sono esperti nel mettere a proprio agio anche i più piccoli.',
  },
  {
    question: 'Cosa rende Hair Spa diverso da un normale lavaggio?',
    answer: "L'Hair Spa è un trattamento completo che include pulizia profonda del cuoio capelluto, massaggio rilassante e prodotti professionali specifici. Non è un semplice lavaggio, ma un rituale di benessere che rigenera cute e capelli.",
  },
  {
    question: 'Posso portare una foto come riferimento?',
    answer: 'Assolutamente sì! Le foto sono molto utili per capire esattamente cosa desideri. I nostri stilisti ti consiglieranno anche sulle modifiche necessarie per adattare il look al tuo tipo di capello e viso.',
  },
  {
    question: 'Quali brand utilizzate?',
    answer: 'Utilizziamo solo prodotti professionali di alta qualità: Kevin Murphy, Leonor Greyl, L\'Oréal Professionnel, NAK e strumenti GHD per lo styling.',
  },
];

interface FAQProps {
  className?: string;
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQ({
  className = '',
  items = faqItems,
  title = 'Domande Frequenti',
  subtitle = 'Tutto quello che devi sapere',
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <p className="font-cormorant text-primary text-base sm:text-lg tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-foreground gold-underline inline-block pb-4 mb-4">
            {title}
          </h2>
          <p className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                className="luxury-card overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-cormorant text-lg sm:text-xl text-foreground/90">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div className="pt-2 border-t border-primary/20">
                          <p className="font-cormorant text-base sm:text-lg text-foreground/70 pt-4 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
