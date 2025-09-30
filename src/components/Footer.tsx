import { motion } from 'framer-motion';
import { portfolioData } from '@/data/content';
import { Mail, Linkedin, Globe } from 'lucide-react';

export const Footer = () => {
  const { contact, personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    // { icon: Globe, href: contact.portfolio, label: 'Portfolio' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2">{personal.name}</h3>
            <p className="text-sm text-muted-foreground">{personal.title}</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personal.name}. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};
