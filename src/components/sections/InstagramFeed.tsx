import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Placeholder images - replace with real Instagram feed integration
const instagramPosts = [
  {
    id: 1,
    image: '/placeholder.svg',
    likes: 124,
    comments: 8,
  },
  {
    id: 2,
    image: '/placeholder.svg',
    likes: 89,
    comments: 5,
  },
  {
    id: 3,
    image: '/placeholder.svg',
    likes: 156,
    comments: 12,
  },
  {
    id: 4,
    image: '/placeholder.svg',
    likes: 201,
    comments: 15,
  },
  {
    id: 5,
    image: '/placeholder.svg',
    likes: 178,
    comments: 9,
  },
  {
    id: 6,
    image: '/placeholder.svg',
    likes: 143,
    comments: 7,
  },
];

interface InstagramFeedProps {
  username?: string;
  className?: string;
}

export function InstagramFeed({ 
  username = 'hairdotop', 
  className = '' 
}: InstagramFeedProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-soft-black ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <p className="font-cormorant text-primary text-base sm:text-lg tracking-[0.2em] uppercase">
              Seguici
            </p>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            @{username}
          </h2>
          <p className="font-cormorant text-lg text-foreground/60 max-w-xl mx-auto">
            Scopri i nostri ultimi lavori e lasciati ispirare
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              delay={index * 0.1}
              direction="up"
            >
              <motion.a
                href={`https://instagram.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square group overflow-hidden block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-6 text-white">
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5 fill-white" />
                      <span className="font-cormorant">{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-cormorant">{post.comments}</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary/50 text-primary hover:bg-primary/10 rounded-full"
          >
            <a 
              href={`https://instagram.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Segui su Instagram
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default InstagramFeed;
