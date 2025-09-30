import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/content';
import { Award } from 'lucide-react';

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Certifications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:border-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 60px -15px hsl(142 76% 45% / 0.3)' }}
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                  {cert.issuer && (
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  )}
                  {cert.year && (
                    <p className="text-xs text-primary mt-1">{cert.year}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
