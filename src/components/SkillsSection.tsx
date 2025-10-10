import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Palette, Smartphone, Video, Zap } from 'lucide-react';
import { useState, useRef } from 'react';

const skillCategories = [
  {
    id: 1,
    title: 'Création Numérique',
    icon: Palette,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    skills: [
      { name: 'Photoshop', icon: '🎨', description: 'Retouche photo, composition' },
      { name: 'Illustrator', icon: '✏️', description: 'Illustration vectorielle' },
      { name: 'Figma', icon: '🎯', description: 'UI/UX Design, prototypage' },
      { name: 'Blender', icon: '🎲', description: 'Modélisation 3D' },
    ],
  },
  {
    id: 2,
    title: 'Audiovisuel',
    icon: Video,
    color: 'from-blue-500 to-cyan-600',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    skills: [
      { name: 'Premiere Pro', icon: '🎬', description: 'Montage vidéo professionnel' },
      { name: 'After Effects', icon: '✨', description: 'Motion design, effets visuels' },
      { name: 'DaVinci Resolve', icon: '🎞️', description: 'Étalonnage colorimétrique' },
    ],
  },
  {
    id: 3,
    title: 'Communication',
    icon: Smartphone,
    color: 'from-cyan-600 to-blue-500',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    skills: [
      { name: 'Trafix', icon: '📊', description: 'Gestion de projets' },
      { name: 'Canva', icon: '🎨', description: 'Design rapide' },
      { name: 'Notion', icon: '📝', description: 'Organisation' },
      { name: 'Miro', icon: '🗂️', description: 'Collaboration visuelle' },
      { name: 'WordPress', icon: '📱', description: 'CMS et sites web' },
    ],
  },
  {
    id: 4,
    title: 'Développement Web',
    icon: Code2,
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    skills: [
      { name: 'HTML', icon: '🌐', description: 'Structure web' },
      { name: 'CSS', icon: '🎨', description: 'Styles et animations' },
      { name: 'JavaScript', icon: '⚡', description: 'Interactivité' },
      { name: 'PHP', icon: '🐘', description: 'Backend dynamique' },
      { name: 'SQL', icon: '🗄️', description: 'Bases de données' },
    ],
  },
];

const softSkills = [
  { 
    name: 'Créativité', 
    description: 'Innovation et originalité dans chaque projet',
    learnedFrom: ['Projets personnels', 'Design thinking', 'Brainstorming'],
    color: 'from-cyan-500 to-blue-500' 
  },
  { 
    name: 'Curiosité', 
    description: 'Apprentissage continu des nouvelles technologies',
    learnedFrom: ['Veille techno', 'Auto-formation', 'Expérimentation'],
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    name: 'Adaptabilité', 
    description: 'Flexibilité face aux changements et défis',
    learnedFrom: ['Projets variés', 'Travail en équipe', 'Challenges'],
    color: 'from-cyan-600 to-blue-600' 
  },
  { 
    name: 'Collaboration', 
    description: 'Esprit d\'équipe et communication efficace',
    learnedFrom: ['Projets groupe', 'Workshops', 'Partage'],
    color: 'from-blue-600 to-cyan-600' 
  },
  { 
    name: 'Rigueur', 
    description: 'Attention aux détails et qualité du travail',
    learnedFrom: ['Code reviews', 'Tests qualité', 'Documentation'],
    color: 'from-cyan-500 to-blue-500' 
  },
  { 
    name: 'Passion', 
    description: 'Engagement total dans mes créations',
    learnedFrom: ['Side projects', 'Communauté', 'Créations perso'],
    color: 'from-blue-500 to-cyan-500' 
  },
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className="min-h-screen relative overflow-hidden py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
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
            <Zap className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Compétences & Expertise</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Mes Compétences
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Une combinaison de compétences techniques et créatives pour donner vie à vos projets multimédia.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`relative bg-black/40 backdrop-blur-sm border ${category.borderColor} rounded-3xl p-8 overflow-hidden hover:border-cyan-500/50 transition-all duration-500`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Category Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} ${category.glowColor} shadow-2xl`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="relative space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ x: 10 }}
                      className="relative"
                    >
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group/skill">
                        <span className="text-3xl">{skill.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white">{skill.name}</h4>
                          <p className="text-gray-400 text-sm">{skill.description}</p>
                        </div>
                        
                        {/* Hover indicator */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: hoveredSkill === skill.name ? 1 : 0,
                            scale: hoveredSkill === skill.name ? 1 : 0
                          }}
                          className="w-2 h-2 rounded-full bg-cyan-400"
                        />
                      </div>

                      {/* Shimmer effect on hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                          initial={{ x: '-100%' }}
                          animate={{ x: '200%' }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} blur-2xl -z-10 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Soft Skills - Design innovant liquide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-white mb-2 flex items-center justify-center gap-2 text-3xl">
              Compétences Humaines
            </h3>
            <p className="text-gray-400">Au-delà de la technique, mes qualités personnelles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -8 }}
                className="relative group/soft"
              >
                {/* Liquid Glass Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                  {/* Animated liquid blob background */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-30 group-hover/soft:opacity-50 transition-opacity`}
                  />
                  
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-20 group-hover/soft:opacity-40 transition-opacity`}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Title */}
                    <h4 className="text-white text-xl">{skill.name}</h4>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Learning sources with circular indicators */}
                    <div className="relative pt-2">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-gray-500">Développée par</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {skill.learnedFrom.map((source, i) => (
                          <motion.div
                            key={source}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 + 0.3, type: 'spring' }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="relative group/tag"
                          >
                            <div className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}>
                              <div className="absolute inset-0 px-[0px] mx-[0px] pt-[0px] pr-[0px] pb-[60px] pl-[0px] m-[0px]" />
                              <span className="relative z-10 text-white text-xs text-[13px] text-center mx-[0px] my-[30px] px-[0px] py-[18px] p-[0px] m-[0px]">{source}</span>
                              
                              {/* Hover glow */}
                              <motion.div
                                className="absolute inset-0 bg-white/20 opacity-0 group-hover/tag:opacity-100 transition-opacity"
                                animate={{
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover/soft:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-20`} />
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-2xl -z-10 rounded-3xl opacity-0 group-hover/soft:opacity-30 transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
