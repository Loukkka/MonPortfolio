import { motion, useScroll, useTransform } from 'motion/react';
import { User, Heart, Target, Lightbulb, Zap, Coffee, Music, Gamepad2, Film, Trophy } from 'lucide-react';
import { useRef } from 'react';
import profileImage from 'figma:asset/1978daaba94b4cebb7e8a20587aa0b061bbca8dc.png';

const highlights = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Passionné par le design graphique et le motion design depuis plusieurs années',
    color: 'from-cyan-500 to-blue-500',
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
    color: 'from-cyan-600 to-blue-600',
  },
];

const hobbies = [
  { 
    name: 'Serveur Fivem', 
    icon: Gamepad2, 
    emoji: '🎮',
    description: 'Gestion et développement',
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    name: 'Jeux Vidéos', 
    icon: Gamepad2, 
    emoji: '🕹️',
    description: 'Gaming compétitif',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Séries & Films', 
    icon: Film, 
    emoji: '🎬',
    description: 'Cinéphile passionné',
    color: 'from-cyan-600 to-blue-600'
  },
  { 
    name: 'Compétitivité', 
    icon: Trophy, 
    emoji: '🏆',
    description: 'Esprit de challenge',
    color: 'from-blue-600 to-cyan-600'
  },
];

const stats = [
  { value: '23/07/2005', label: 'Date de naissance', icon: '🎂' },
  { value: 'Limoges', label: 'Ville', icon: '📍' },
  { value: '87000', label: 'Code postal', icon: '🏠' },
  { value: 'France', label: 'Pays', icon: '🇫🇷' },
];

const languages = [
  { 
    name: 'Français', 
    code: 'FR',
    level: 'Langue maternelle', 
    percentage: 100,
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    name: 'English', 
    code: 'EN',
    level: 'Bon niveau', 
    percentage: 70,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'Español', 
    code: 'ES',
    level: 'Notions', 
    percentage: 40,
    color: 'from-cyan-600 to-blue-600'
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
    <div ref={sectionRef} className="min-h-screen relative overflow-hidden py-32 flex items-center">
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
            <User className="w-4 h-4 text-white" />
            <span className="text-cyan-400">À propos de moi</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Qui suis-je ?
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - Avatar & Info */}
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
              className="relative mb-8"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 bg-gradient-to-br from-gray-900 via-black to-gray-900 aspect-square">
                
                {/* Modern 3D Liquid Morphing Shape */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Animated liquid blobs - PLUS GRANDS */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute w-96 h-96 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 blur-3xl"
                  />
                  
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0],
                      borderRadius: ['70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl"
                  />

                  {/* Photo Profile avec Parallax */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{ y: scale }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                  >
                    <motion.img
                      src={profileImage}
                      alt="Louka Poulbriere"
                      className="w-[70%] h-[70%] object-contain"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
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
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all">
                    <div className="text-3xl mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 blur-xl -z-10 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Bio */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-4 right-4 text-2xl"
              >
                ✨
              </motion.div>
              
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-white" />
                Bonjour !
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Je suis <span className="text-cyan-400">Louka Poulbriere</span>, actuellement étudiant en <span className="text-purple-400">BUT MMI</span>, passionné par le <span className="text-pink-400">design graphique</span> et le <span className="text-cyan-400">motion design</span>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Créatif et curieux, je réalise des supports modernes et dynamiques adaptés aux besoins des entreprises. 
                J'aime explorer les nouvelles technologies et créer des expériences visuelles uniques.
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
                        <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${highlight.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
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

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-white text-center mb-12 flex items-center justify-center gap-2 text-3xl">
            <Coffee className="w-5 h-5 text-white" />
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
                      <span className="text-xs text-gray-400 mt-1">{lang.percentage}%</span>
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

        {/* Hobbies - Liquid Glass Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-center mb-12 flex items-center justify-center gap-2 text-3xl">
            <Coffee className="w-5 h-5 text-white" />
            Loisirs & Passions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Liquid Glass Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl min-h-[180px]">
                    {/* Glass Background with Blur */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl" />
                    
                    {/* Colored Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-20 mix-blend-overlay`} />
                    
                    {/* Animated Liquid Blob */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        borderRadius: ['60% 40% 30% 70%', '30% 60% 70% 40%', '60% 40% 30% 70%'],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                      className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${hobby.color} opacity-20 blur-3xl`}
                    />
                    
                    {/* Border Shine Effect */}
                    <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition-all" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                      <div className="text-4xl mb-3">{hobby.emoji}</div>
                      <h4 className="text-white mb-1">{hobby.name}</h4>
                      <p className="text-gray-300 text-sm">{hobby.description}</p>
                      
                      {/* Bottom Glow */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${hobby.color} blur-sm`}
                      />
                    </div>
                  </div>

                  {/* External Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${hobby.color} blur-xl -z-10 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
