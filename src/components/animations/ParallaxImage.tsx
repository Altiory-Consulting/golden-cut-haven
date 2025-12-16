import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.3,
  overlay = true,
  overlayOpacity = 0.6,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {overlay && (
        <div 
          className="absolute inset-0 bg-deep-black" 
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}

export function ParallaxVideo({
  src,
  className = '',
  speed = 0.2,
  overlay = true,
  overlayOpacity = 0.6,
}: Omit<ParallaxImageProps, 'alt'> & { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 50}%`, `${speed * 50}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </motion.div>
      {overlay && (
        <div 
          className="absolute inset-0 bg-deep-black" 
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}

export default ParallaxImage;
