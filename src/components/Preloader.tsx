import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-2 md:gap-4">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary"
            initial={{
              opacity: 0,
              x: (i - 3) * 100,
              y: (i % 2 === 0 ? -1 : 1) * 50,
              z: -200,
              scale: 0.3,
              rotateX: 45,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: [0, 1, 1],
              x: 0,
              y: 0,
              z: 0,
              scale: 1,
              rotateX: 0,
              filter: ['blur(10px)', 'blur(0px)', 'blur(0px)'],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            style={{
              textShadow: '0 0 20px hsl(142 76% 45% / 0.5)',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
