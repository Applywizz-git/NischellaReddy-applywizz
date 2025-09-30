import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/data/content';

// Honeycomb Fill Meter
const HoneycombMeter = ({ skill }: { skill: { name: string; percentage: number } }) => {
  const hexagons = 10;
  const filled = Math.round((skill.percentage / 100) * hexagons);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-primary">{skill.percentage}%</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: hexagons }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-6 h-7 ${i < filled ? 'bg-primary' : 'bg-muted'}`}
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

// Shard Bar Meter
const ShardMeter = ({ skill }: { skill: { name: string; percentage: number } }) => {
  const shards = 8;
  const filled = Math.round((skill.percentage / 100) * shards);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-secondary">{skill.percentage}%</span>
      </div>
      <div className="flex gap-1 h-3">
        {Array.from({ length: shards }).map((_, i) => (
          <motion.div
            key={i}
            className={`flex-1 ${i < filled ? 'bg-secondary' : 'bg-muted'}`}
            style={{
              clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)',
              transform: `skewX(-10deg) rotate(${i % 2 === 0 ? 2 : -2}deg)`,
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: 'backOut' }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

// Glyph Meter
const GlyphMeter = ({ skill }: { skill: { name: string; percentage: number } }) => {
  const glyphs = ['◇', '◆', '●', '◉', '◈'];
  const segments = 5;
  const filled = Math.round((skill.percentage / 100) * segments);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-accent">{skill.percentage}%</span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: segments }).map((_, i) => (
          <motion.span
            key={i}
            className={`text-2xl ${i < filled ? 'text-accent' : 'text-muted'}`}
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {glyphs[i]}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { skills } = portfolioData;

  const meterTypes = ['honeycomb', 'shard', 'glyph'] as const;
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => {
            const meterType = meterTypes[catIndex % 3];
            const categorySkills = skills[category as keyof typeof skills];

            return (
              <motion.div
                key={category}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      {meterType === 'honeycomb' && <HoneycombMeter skill={skill} />}
                      {meterType === 'shard' && <ShardMeter skill={skill} />}
                      {meterType === 'glyph' && <GlyphMeter skill={skill} />}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
