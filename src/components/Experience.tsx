import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData } from '@/data/content';
import { ChevronDown } from 'lucide-react';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20  px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-amber" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-primary shadow-glow cursor-pointer"
                      whileHover={{ scale: 1.5, boxShadow: '0 0 20px hsl(142 76% 45% / 0.8)' }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'ml-16 md:ml-0' : 'ml-16 md:ml-0'}`}>
                    <motion.div
                      className="bg-card rounded-xl p-6 shadow-elegant border border-border cursor-pointer"
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 60px -15px hsl(142 76% 45% / 0.3)' }}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                          <p className="text-lg font-semibold text-secondary mt-1">{exp.role}</p>
                          <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-6 h-6 text-primary" />
                        </motion.div>
                      </div>

                      <motion.ul
                        className="space-y-2 overflow-hidden"
                        initial={false}
                        animate={{
                          height: expandedIndex === index ? 'auto' : 0,
                          opacity: expandedIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
