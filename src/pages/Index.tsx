import { useState, useEffect } from 'react';
import { Preloader } from '@/components/Preloader';
import { Background3D } from '@/components/Background3D';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload profile image
    const img = new Image();
    img.src = '/assets/profile.jpg';
  }, []);

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="relative">
          <a
            href="#hero"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
          >
            Skip to content
          </a>
          <Background3D />
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
