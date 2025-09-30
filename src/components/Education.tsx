import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '@/data/content';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { education } = portfolioData;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="education" className="py-20 px-4 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Education</span>
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-lg cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{
                transformStyle: 'preserve-3d',
                position: 'relative',
                width: '100%',
                height: '280px',
              }}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Front */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                }}
                className="bg-card rounded-xl p-8 shadow-elegant border border-border"
              >
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <GraduationCap className="w-16 h-16 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">{education[0].degree}</h3>
                  <p className="text-lg text-secondary font-semibold">{education[0].institution}</p>
                  <p className="text-sm text-muted-foreground">📍 {education[0].location}</p>
                  <p className="text-xs text-muted-foreground mt-4">Click to flip</p>
                </div>
              </div>

              {/* Back */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
                className="bg-gradient-primary rounded-xl p-8 shadow-elegant"
              >
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-white">
                  <h3 className="text-2xl font-bold">Specialized in</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Data Science & Analytics</li>
                    <li>• Machine Learning</li>
                    <li>• Big Data Technologies</li>
                    <li>• Data Engineering</li>
                    <li>• Business Intelligence</li>
                  </ul>
                  <p className="text-xs mt-4 opacity-80">Click to flip back</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
