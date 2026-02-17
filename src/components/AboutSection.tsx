import { motion, useScroll, useTransform } from 'motion/react';
import { User, Heart, Target, Lightbulb, Zap, CalendarDays, MapPin, Home, Globe } from 'lucide-react';
import { useRef, lazy, Suspense } from 'react';

const ModelViewer = lazy(() => import('./ModelViewer').then(m => ({ default: m.ModelViewer })));

const highlights = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Passionné par le design graphique et le motion design depuis plusieurs années',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Créatif',
    description: 'Créatif et curieux, je réalise des supports modernes et dynamiques',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Toujours à l\'affût des dernières tendances et technologies',
    color: 'from-blue-500 to-cyan-500',
  },
];

const stats = [
  { value: '23/07/2005', label: 'Date de naissance', icon: '🎂', lucideIcon: 'calendar' },
  { value: 'Limoges', label: 'Ville', icon: '📍', lucideIcon: 'mapPin' },
  { value: '87000', label: 'Code postal', icon: '🏠', lucideIcon: 'home' },
  { value: 'France', label: 'Pays', icon: 'FR', lucideIcon: 'globe' },
];

const statIcons: Record<string, React.ElementType> = {
  calendar: CalendarDays,
  mapPin: MapPin,
  home: Home,
  globe: Globe,
};

const languages = [
  { 
    name: 'Français', 
    code: 'FR',
    level: 'Langue maternelle', 
    percentage: 100,
    displayValue: 'C2',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'English', 
    code: 'EN',
    level: 'Bon niveau', 
    percentage: 70,
    displayValue: 'B2',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Español', 
    code: 'ES',
    level: 'Notions', 
    percentage: 40,
    displayValue: 'B3',
    color: 'from-blue-500 to-cyan-500'
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6"
          >
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-sm shadow-blue-500/30">
              <User className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-cyan-400">À propos de moi</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Qui suis-je ?
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Avatar Card */}
            <motion.div
              style={{ scale }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 bg-gradient-to-br from-gray-900 via-black to-gray-900 aspect-square">
                
                {/* Modern 3D Liquid Morphing Shape */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Static blurred blobs instead of animated liquid */}
                  <div
                    className="absolute w-96 h-96 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 blur-3xl will-change-transform"
                    style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', animation: 'blobMorph1 12s ease-in-out infinite' }}
                  />
                  <div
                    className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl will-change-transform"
                    style={{ borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%', animation: 'blobMorph2 14s ease-in-out infinite' }}
                  />
                  <style>{`
                    @keyframes blobMorph1 { 0%, 100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.15) rotate(180deg); } }
                    @keyframes blobMorph2 { 0%, 100% { transform: scale(1.15) rotate(360deg); } 50% { transform: scale(1) rotate(180deg); } }
                    @keyframes gentleFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                  `}</style>

                  {/* 3D Model */}
                  <div className="relative z-10 w-full h-full">
                    <Suspense fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
                      </div>
                    }>
                      <ModelViewer />
                    </Suspense>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Bio */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >

              
              <h3 className="text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                Bonjour !
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Je suis <span className="text-cyan-400 font-medium">Louka Poulbriere</span>, étudiant en <span className="text-cyan-400 font-medium">BUT MMI</span> et passionné par le <span className="text-cyan-400 font-medium">design graphique</span>, le <span className="text-cyan-400 font-medium">motion design</span> et le <span className="text-cyan-400 font-medium">développement web</span>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Curieux et créatif, je conçois des expériences visuelles modernes et immersives, en alliant esthétique et fonctionnalité pour répondre aux besoins concrets des entreprises.
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="relative group"
                  >
                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                      />
                      
                      <div className="relative z-10 flex items-start gap-4">
                        <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.color} shadow-lg shadow-blue-500/30`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white mb-1">{highlight.title}</h4>
                          <p className="text-gray-400 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.color} blur-xl -z-10 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-center mb-4">
                    {(() => {
                      const StatIcon = statIcons[stat.lucideIcon];
                      return StatIcon ? (
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                          <StatIcon className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
                          <span className="text-white font-bold text-sm">{stat.icon}</span>
                        </div>
                      );
                    })()}
                  </div>
                  <div className="text-cyan-400 font-medium mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 blur-xl -z-10 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-white text-center mb-12 flex items-center justify-center gap-3 text-3xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
              <Globe className="w-5 h-5 text-white" />
            </div>
            Langues
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring' }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-cyan-500/50 transition-all">
                  {/* Circular Progress */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#circleGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: lang.percentage / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        strokeDasharray="352"
                        strokeDashoffset="0"
                      />
                      <defs>
                        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Language Code in Center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {lang.code}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">{lang.displayValue}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-white text-center mb-1">{lang.name}</h4>
                  <p className="text-gray-400 text-sm text-center">{lang.level}</p>
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${lang.color} blur-xl -z-10 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
