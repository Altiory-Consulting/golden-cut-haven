import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const sedi = [
  {
    name: "Sede Acerra",
    location: "Acerra",
    instagram: "https://www.instagram.com/hairdotop_acerra/",
    instagramHandle: "@hairdotop_acerra",
    tiktok: "https://www.tiktok.com/@hairdotop_acerra",
    tiktokHandle: "@hairdotop_acerra",
    gradient: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
  },
  {
    name: "Sede Le Porte di Napoli",
    location: "Afragola",
    instagram: "https://www.instagram.com/hairdotop_portedinapoli/",
    instagramHandle: "@hairdotop_portedinapoli",
    tiktok: "https://www.tiktok.com/@hairdotop_portedinapoli",
    tiktokHandle: "@hairdotop_portedinapoli",
    gradient: "from-[#00f2ea] via-[#ff0050] to-[#000000]",
  },
];

export function SocialSection() {
  const [hoveredSede, setHoveredSede] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"instagram" | "tiktok">("instagram");

  return (
    <section className="py-24 lg:py-32 bg-deep-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#00f2ea]/20 via-[#ff0050]/20 to-primary/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
            Seguici sui Social
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
            Resta Connesso
          </h2>
          <p className="font-cormorant text-xl text-foreground/60 mt-6 max-w-2xl mx-auto">
            Ogni sede ha i suoi canali social. Seguici per scoprire le ultime tendenze, 
            i nostri lavori e le offerte esclusive!
          </p>
        </ScrollReveal>

        {/* Platform Toggle */}
        <ScrollReveal delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex bg-soft-black rounded-full p-1.5 border border-primary/20">
            <motion.button
              onClick={() => setActiveTab("instagram")}
              className={`relative px-6 py-3 rounded-full font-cormorant text-lg tracking-wider transition-colors ${
                activeTab === "instagram" ? "text-white" : "text-foreground/60 hover:text-foreground"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "instagram" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Instagram
              </span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("tiktok")}
              className={`relative px-6 py-3 rounded-full font-cormorant text-lg tracking-wider transition-colors ${
                activeTab === "tiktok" ? "text-white" : "text-foreground/60 hover:text-foreground"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "tiktok" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f2ea] via-[#ff0050] to-[#000000]"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <TikTokIcon className="w-5 h-5" />
                TikTok
              </span>
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Sedi Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {sedi.map((sede, index) => (
              <ScrollReveal key={sede.name} delay={index * 0.15}>
                <motion.a
                  href={activeTab === "instagram" ? sede.instagram : sede.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  onHoverStart={() => setHoveredSede(index)}
                  onHoverEnd={() => setHoveredSede(null)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative luxury-card p-8 overflow-hidden">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        activeTab === "instagram"
                          ? "from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20"
                          : "from-[#00f2ea]/20 via-[#ff0050]/20 to-black/20"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredSede === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="font-playfair text-2xl text-foreground mb-1">
                            {sede.name}
                          </h3>
                          <div className="flex items-center gap-2 text-foreground/60">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-cormorant">{sede.location}</span>
                          </div>
                        </div>
                        
                        {/* Animated Icon */}
                        <motion.div
                          className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${
                            activeTab === "instagram"
                              ? "from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                              : "from-[#00f2ea] via-[#ff0050] to-black"
                          }`}
                          animate={{
                            rotate: hoveredSede === index ? [0, -10, 10, 0] : 0,
                            scale: hoveredSede === index ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {activeTab === "instagram" ? (
                            <Instagram className="w-7 h-7 text-white" />
                          ) : (
                            <TikTokIcon className="w-7 h-7 text-white" />
                          )}
                        </motion.div>
                      </div>

                      {/* Handle */}
                      <div className="flex items-center gap-3">
                        <motion.span
                          key={activeTab}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`font-cormorant text-lg bg-gradient-to-r ${
                            activeTab === "instagram"
                              ? "from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                              : "from-[#00f2ea] via-[#ff0050] to-white"
                          } bg-clip-text text-transparent`}
                        >
                          {activeTab === "instagram" ? sede.instagramHandle : sede.tiktokHandle}
                        </motion.span>
                        
                        <motion.div
                          className="flex items-center gap-1 text-foreground/40 group-hover:text-primary transition-colors"
                          animate={{ x: hoveredSede === index ? 5 : 0 }}
                        >
                          <span className="font-cormorant text-sm">Seguici</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Decorative line */}
                      <motion.div
                        className={`h-0.5 mt-6 bg-gradient-to-r ${
                          activeTab === "instagram"
                            ? "from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                            : "from-[#00f2ea] via-[#ff0050] to-transparent"
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredSede === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="font-cormorant text-foreground/50 text-lg">
            Tagga <span className="text-primary">#hairdotop</span> nelle tue foto per essere featured!
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
