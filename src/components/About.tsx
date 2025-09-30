import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/content';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <motion.div
            className="relative bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl" />
            <div className="relative">
              <motion.p
                className="text-lg leading-relaxed text-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {personal.about.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.03, delay: 0.4 + i * 0.02 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
