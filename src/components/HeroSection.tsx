import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import cvImage from '../assets/CV portfolio  qr code.png';
import { Logo } from './Logo';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const downloadCvAsPdf = async () => {
    const { jsPDF } = await import('jspdf');

    const image = new Image();
    image.src = cvImage;

    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('Impossible de charger l\'image du CV'));
    });

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imageRatio = image.width / image.height;
    const pageRatio = pageWidth / pageHeight;

    let renderWidth = pageWidth;
    let renderHeight = pageHeight;

    if (imageRatio > pageRatio) {
      renderHeight = pageWidth / imageRatio;
    } else {
      renderWidth = pageHeight * imageRatio;
    }

    const x = (pageWidth - renderWidth) / 2;
    const y = (pageHeight - renderHeight) / 2;

    pdf.addImage(image, 'PNG', x, y, renderWidth, renderHeight, undefined, 'FAST');
    pdf.save('CV-Louka-Poulbriere.pdf');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating geometric shapes with varied forms */}
        {[...Array(6)].map((_, i) => {
          const shapes = ['rounded-full', 'rounded-sm', 'rounded-md'];
          const shape = shapes[i % shapes.length];
          return (
            <div
              key={i}
              className="absolute will-change-transform"
              style={{
                left: `${5 + i * 16}%`,
                top: `${10 + (i % 4) * 20}%`,
                animation: `floatShape${i % 3} ${10 + i * 2}s ${i * 0.5}s ease-in-out infinite`,
              }}
            >
              <div className={`w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 ${shape}`} />
            </div>
          );
        })}
        <style>{`
          @keyframes floatShape0 { 0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; } 50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; } }
          @keyframes floatShape1 { 0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; } 50% { transform: translateY(-40px) rotate(270deg); opacity: 0.7; } }
          @keyframes floatShape2 { 0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; } 50% { transform: translateY(-25px) rotate(360deg); opacity: 0.5; } }
        `}</style>
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full"
            >
              <span className="text-cyan-400">Disponible pour nouveaux projets</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <motion.span 
                  className="block text-gray-400 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Bonjour, je suis
                </motion.span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent text-[30px] font-bold no-underline font-title">
                  {'Louka Poulbriere'.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </span>
                <motion.div
                  animate={{ 
                    width: ['0%', '100%'],
                    boxShadow: [
                      '0 0 0px rgba(6, 182, 212, 0)',
                      '0 0 20px rgba(6, 182, 212, 0.6)',
                      '0 0 0px rgba(6, 182, 212, 0)',
                    ]
                  }}
                  transition={{ 
                    width: { delay: 0.8, duration: 1 },
                    boxShadow: { delay: 1.8, duration: 2, repeat: Infinity }
                  }}
                  className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 rounded-full"
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300"
              >
                Créateur d'expériences numériques & développeur web
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 leading-relaxed max-w-lg"
            >
              Passionné par le design web, l'UI/UX et le développement front-end. 
              Je crée des expériences numériques innovantes et immersives en combinant 
              créativité et compétences techniques.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="relative group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0 px-8 py-6 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  Voir mes projets
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>

              <Button
                onClick={downloadCvAsPdf}
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/60 hover:text-white px-8 py-6 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Voir CV
                  <Download className="w-4 h-4" />
                </span>
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                className="relative group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 border-0 px-8 py-6 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">Me contacter</span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com/Loukkka' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/louka-poulbriere-bb09872b0/' },
                { icon: Mail, label: 'Email', href: 'mailto:louka.poulbriere19@gmail.com' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - CV Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl rounded-full"
              />

              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mix-blend-overlay" />

                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full will-change-transform"
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: '10%',
                        animation: `cardFloat ${3 + i * 0.8}s ${i * 0.3}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                  <style>{`@keyframes cardFloat { 0%, 100% { transform: translateY(0); opacity: 0; } 50% { transform: translateY(-80px); opacity: 1; } }`}</style>

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, type: 'spring' }}
                      className="relative"
                    >
                      <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50" />
                      <Logo className="w-40 h-40" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="mt-6 text-center"
                    >
                      <p className="text-cyan-400 tracking-widest text-sm">Bienvenue sur mon portfolio</p>
                    </motion.div>
                  </div>

                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-gray-400">Scroll</span>
          <ArrowDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}
