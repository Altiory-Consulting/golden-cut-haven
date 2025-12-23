import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

// Video portfolio - uploaded videos
const uploadedVideos = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const videos = uploadedVideos.map((num) => ({
  id: num,
  title: `Styling ${num}`,
  videoUrl: `/videos/portfolio/${num}.mp4`,
}));

interface VideoGalleryProps {
  className?: string;
}

// Componente per singolo video con lazy loading
function VideoCard({ video, onOpen }: { video: { id: number; title: string; videoUrl: string }; onOpen: (url: string) => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 snap-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group"
        whileHover={{ scale: 1.05, y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onClick={() => onOpen(video.videoUrl)}
      >
        {/* Placeholder thumbnail */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary/20 via-soft-black to-deep-black transition-opacity duration-500",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 animate-pulse" />
          </div>
        </div>

        {/* Video - carica solo quando visibile */}
        {isVisible && (
          <video
            ref={videoRef}
            src={video.videoUrl}
            className={cn(
              "w-full h-full object-cover transition-all duration-700 group-hover:scale-110",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={(e) => {
              e.currentTarget.currentTime = 0.1;
              setIsLoaded(true);
            }}
            onMouseEnter={(e) => {
              if (window.matchMedia('(hover: hover)').matches) {
                e.currentTarget.play();
              }
            }}
            onMouseLeave={(e) => {
              if (window.matchMedia('(hover: hover)').matches) {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }
            }}
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Play Button - sempre visibile su mobile, hover su desktop */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.div
            className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 text-deep-black ml-1" fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function VideoGallery({ className }: VideoGalleryProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const closeModal = () => {
    setActiveVideo(null);
  };

  return (
    <section className={cn("py-24 lg:py-32 bg-soft-black", className)}>
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="font-cormorant text-primary text-lg tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-foreground gold-underline inline-block pb-4">
            Le Nostre Creazioni
          </h2>
          <p className="font-cormorant text-lg text-foreground/60 mt-6 max-w-2xl mx-auto">
            Scopri i nostri lavori più recenti in una galleria di video esclusivi
          </p>
        </ScrollReveal>

        {/* Navigation Buttons */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-deep-black transition-all duration-300 shadow-lg hover:scale-110 -ml-2 md:ml-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-deep-black transition-all duration-300 shadow-lg hover:scale-110 -mr-2 md:mr-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-8 py-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} onOpen={openModal} />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-deep-black transition-all duration-300 hover:scale-110"
              aria-label="Chiudi video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <motion.div
              className="relative w-full max-w-md h-[80vh] max-h-[900px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                className="w-full h-full object-contain rounded-2xl"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
