import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { ScrollNavigation } from './components/ScrollNavigation';
import { FloatingParticles } from './components/FloatingParticles';
import { LoadingScreen } from './components/LoadingScreen';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ArrowUp } from 'lucide-react';

// Lazy load sections below the fold
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const EducationSection = lazy(() => import('./components/EducationSection').then(m => ({ default: m.EducationSection })));
const SkillsSection = lazy(() => import('./components/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ServicesSection = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));

const SectionFallback = () => <div className="min-h-screen" />;

function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle hash scrolling
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 origin-left z-[100] shadow-lg shadow-cyan-500/50"
        style={{ scaleX }}
      />
      <FloatingParticles count={12} />
      <ScrollNavigation />

      <div className="relative">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="projects">
          <Suspense fallback={<SectionFallback />}>
            <ProjectsSection />
          </Suspense>
        </section>

        <section id="about">
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
        </section>

        <section id="education">
          <Suspense fallback={<SectionFallback />}>
            <EducationSection />
          </Suspense>
        </section>

        <section id="skills">
          <Suspense fallback={<SectionFallback />}>
            <SkillsSection />
          </Suspense>
        </section>

        <section id="services">
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </section>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-2xl shadow-lg shadow-cyan-500/50 transition-all"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projet/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}
